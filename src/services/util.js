const delay = (action, duration, params) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(action(params))
      } catch (e) {
        reject(e)
      }
    }, duration)
  })

const persistState = state => localStorage.setItem('store', JSON.stringify(state))
const loadPersistedState = () => JSON.parse(localStorage.getItem('store'))

export default {
  delay,
  persistState,
  loadPersistedState
}
