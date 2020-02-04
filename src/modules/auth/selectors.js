export const isAuthenticating = state => state.auth.isAuthenticating
export const isAuthenticated = state => state.auth.isAuthenticated
export const error = state => state.auth.error
export const user = state => state.auth.user
export const userType = state => state.auth.user && state.auth.user.type
