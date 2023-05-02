import {
  createSlice,
  createAsyncThunk,
  isAnyOf,
  PayloadAction,
} from '@reduxjs/toolkit'
import { getCollection } from '../../../utils/firebase/firebase.utils'

export const fetchContacts = createAsyncThunk<
  Company[] | void,
  string | undefined,
  { rejectValue: string }
>('user/fetchContacts', async (collectionKey, { rejectWithValue }) => {
  try {
    if (!collectionKey) return
    const contacts = await getCollection(collectionKey)
    return contacts
  } catch (error) {
    const { message } = error as Error

    return rejectWithValue(message)
  }
})

export type Company = {
  clientId: string
  clientName: string
  'trn-ppsn': number
  yearEnd: string
  ard: string
  companyNumber: number
  email: string
  phoneNumber: number
  companyAddress: string
}

type ContactsState = {
  clients: Company[]
  statusGetClients: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const initialState: ContactsState = {
  clients: [],
  statusGetClients: 'idle',
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
  },
})

// export const {  } = userSlice.actions

export default userSlice.reducer
