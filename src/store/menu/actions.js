import { firebaseAction } from 'vuexfire'
import { dbMenuRef } from '../../firebaseConfig.js'

export const setMenuRef = firebaseAction(({bindFirebaseRef}) => {
    // context contains all original properties like commit, state, etc
    // and adds `bindFirestoreRef` and `unbindFirestoreRef`
    // we return the promise returned by `bindFirestoreRef` that will
    // resolve once data is ready
    bindFirebaseRef('menuItems', dbMenuRef)
})

