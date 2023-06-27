import { Axios } from "axios";

export const deleteProduct = (productId) => {
   console.log('Calling API to delete product ID ' + productId);
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         console.log('Mock deletion')
         resolve("Mock deletion");
      }, 300);
   });
}