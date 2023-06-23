import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

import {
  addCollectionAndDocuments,
  deleteCollectionAndDocuments,
  getCollection,
  updateDocuments,
} from '../../../utils/firebase/firebase.utils'

import { Company, ContactsState, ModalPayload } from './contacts-types'

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

export const updateClient = createAsyncThunk<
  Company,
  Company,
  { rejectValue: string }
>('user/updateClient', async (company, { rejectWithValue }) => {
  try {
    await updateDocuments<Company>(company)
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
  clientForEdit: null,
  statusGetClients: 'idle',
  statusAddClient: 'idle',
  statusUpdateClient: 'idle',
  statusDeleteClient: 'idle',
  errorMessage: '',
  modal: {
    isShowModal: false,
    typeModal: 'add',
  },
  globalFilter: '',
}

const userSlice = createSlice({
  name: 'clients',
  initialState,
  reducers: {
    setClientForEdit: (state, action: PayloadAction<string | null>) => {
      if (!action.payload) {
        state.clientForEdit = null
        return
      }
      state.clientForEdit = state.clients.find(
        client => client.clientId === action.payload
      ) as Company
    },

    clearErrorMessage: state => {
      state.errorMessage = ''
    },

    showModal: (state, action: PayloadAction<ModalPayload>) => {
      const { isShowModal, typeModal } = action.payload

      typeModal
        ? (state.modal = { isShowModal, typeModal })
        : (state.modal.isShowModal = isShowModal)
    },

    setGlobalFilter: (state, action: PayloadAction<string | number>) => {
      state.globalFilter = String(action.payload)
    },
  },
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
        state.modal = { ...state.modal, isShowModal: false }
      })
      .addCase(addClient.rejected, (state, action) => {
        state.statusAddClient = 'failed'
        if (action.payload) {
          state.errorMessage = action.payload
        }
      })
      .addCase(updateClient.pending, state => {
        state.statusUpdateClient = 'pending'
      })
      .addCase(updateClient.fulfilled, (state, action) => {
        state.statusUpdateClient = 'succeeded'
        state.clients = state.clients.map(client => {
          return client.clientId === action.payload.clientId
            ? action.payload
            : client
        })
        state.modal = { ...state.modal, isShowModal: false }
        state.clientForEdit = null
      })
      .addCase(updateClient.rejected, state => {
        state.statusUpdateClient = 'failed'
      })
      .addCase(deleteClient.pending, state => {
        state.statusDeleteClient = 'pending'
      })
      .addCase(deleteClient.fulfilled, (state, action) => {
        state.statusDeleteClient = 'succeeded'
        state.clients = state.clients.filter(
          client => client.clientId !== action.payload
        )
        state.modal = { ...state.modal, isShowModal: false }
        state.clientForEdit = null
      })
      .addCase(deleteClient.rejected, state => {
        state.statusDeleteClient = 'failed'
      })
  },
})

export const {
  setClientForEdit,
  clearErrorMessage,
  showModal,
  setGlobalFilter,
} = userSlice.actions

export default userSlice.reducer
