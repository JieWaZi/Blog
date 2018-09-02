const init_State = {
    weathers: [],
}

export default (state = init_State, action) =>  {
    switch (action.type) {
    case "Statistics/SET":
        return {...state,weathers:action.payload}
      default:
        return state
    }
  }