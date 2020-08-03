export const userStatus = (state, user) => {
  if(user) {
    state.currentUser = user.email
  } else {
    state.currentUser = null
  }
  state.isAuthenticated = !!user
}
