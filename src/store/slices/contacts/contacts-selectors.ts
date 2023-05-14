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

export const selectIsDeletingClient = createSelector(
  [selectContacts],
  contacts => contacts.statusDeleteClient === 'pending'
)

export const selectClientForEdit = createSelector(
  [selectContacts],
  contacts => contacts.clientForEdit
)

export const selectErrorMessage = createSelector(
  [selectContacts],
  contacts => contacts.errorMessage
)

export const selectModal = createSelector([selectContacts], contacts => ({
  ...contacts.modal,
}))

export const selectIsLoadingClient = createSelector(
  [selectContacts],
  contacts =>
    contacts.statusAddClient === 'pending' ||
    contacts.statusUpdateClient === 'pending' ||
    contacts.statusDeleteClient === 'pending'
)
