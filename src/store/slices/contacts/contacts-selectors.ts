import { RootState } from '../../store'
import { createSelector } from '@reduxjs/toolkit'

export const selectContacts = (state: RootState) => state.contacts

export const selectClients = createSelector(
  [selectContacts],
  contacts => contacts.clients
)

export const selectStatusGetClients = createSelector(
  [selectContacts],
  contacts => contacts.statusGetClients
)
