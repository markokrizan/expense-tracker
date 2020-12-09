const localeReducer = (state, action) => {
  switch(action.type) {
    case 'CHANGE_LOCALE':
      return {
        ...state,
        locale: action.payload
      }
    default:
      return state
  }
}

export default localeReducer;
