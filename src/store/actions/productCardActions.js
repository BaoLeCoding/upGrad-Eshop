export const requestConfirmItemDeletion = (id) => {
   return {
      type: 'CONFIRMING_ITEM_DELETION',
      payload: id
   }
}
export const confirmItemDeletion = () => {
   return {
      type: 'CONFIRMED_ITEM_DELETION'
   }
}
export const cancelItemDeletion = () => {
   return {
      type: 'CANCELED_ITEM_DELETION'
   }
}
