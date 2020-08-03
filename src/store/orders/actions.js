import { firebaseAction } from 'vuexfire'
import { dbOrdersRef } from '../../firebaseConfig.js'

export const setOrdersRef = firebaseAction(({bindFirebaseRef}) => {
  // context contains all original properties like commit, state, etc
  // and adds `bindFirestoreRef` and `unbindFirestoreRef`
  // we return the promise returned by `bindFirestoreRef` that will
  // resolve once data is ready
  bindFirebaseRef('orders', dbOrdersRef)
})
