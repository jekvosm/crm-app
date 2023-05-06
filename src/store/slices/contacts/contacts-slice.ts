import {
  createSlice,
  createAsyncThunk,
  isAnyOf,
  PayloadAction,
} from '@reduxjs/toolkit'

import {
  addCollectionAndDocuments,
  deleteCollectionAndDocuments,
  getCollection,
} from '../../../utils/firebase/firebase.utils'

import { Company, ContactsState } from './contacts-types'

export const fetchContacts = createAsyncThunk<
  Company[] | void,
  void,
  { rejectValue: string }
>('user/fetchContacts', async (_, { rejectWithValue }) => {
  try {
    const contacts = await getCollection('clients')
    return contacts
  } catch (error) {
    const { message } = error as Error

    return rejectWithValue(message)
  }
})

export const addClient = createAsyncThunk<
  Company,
  Company,
  { rejectValue: string }
>('user/addClient', async (company, { rejectWithValue }) => {
  try {
    await addCollectionAndDocuments<Company>(company)
    return company
  } catch (error) {
    const { message } = error as Error

    return rejectWithValue(message)
  }
})

export const deleteClient = createAsyncThunk<
  string,
  string,
  { rejectValue: string }
>('user/deleteClient', async (documentKey, { rejectWithValue }) => {
  try {
    await deleteCollectionAndDocuments(documentKey)
    return documentKey
  } catch (error) {
    const { message } = error as Error

    return rejectWithValue(message)
  }
})

const initialState: ContactsState = {
  clients: [],
  statusGetClients: 'idle',
  statusAddClient: 'idle',
  statusDeleteClient: 'idle',
}

const userSlice = createSlice({
  name: 'clients',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.statusGetClients = 'pending'
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.statusGetClients = 'succeeded'
        if (action.payload) {
          state.clients = action.payload
        }
      })
      .addCase(fetchContacts.rejected, state => {
        state.statusGetClients = 'failed'
      })
      .addCase(addClient.pending, state => {
        state.statusAddClient = 'pending'
      })
      .addCase(addClient.fulfilled, (state, action) => {
        state.statusAddClient = 'succeeded'
        const client = state.clients.find(
          client => client.clientId === action.payload.clientId
        )
        if (!client) {
          state.clients.push(action.payload)
        }
      })
      .addCase(addClient.rejected, state => {
        state.statusAddClient = 'failed'
      })
      .addCase(deleteClient.pending, state => {
        state.statusDeleteClient = 'pending'
      })
      .addCase(deleteClient.fulfilled, (state, action) => {
        state.statusDeleteClient = 'succeeded'
        state.clients = state.clients.filter(
          client => client.clientId !== action.payload
        )
      })
      .addCase(deleteClient.rejected, state => {
        state.statusDeleteClient = 'failed'
      })
  },
})

// export const {  } = userSlice.actions

export default userSlice.reducer
