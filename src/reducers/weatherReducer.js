const init_State = {
    weather: {},
}

export default (state = init_State, action) =>  {
    switch (action.type) {
    case "Weather/SET":
        return {...state,weather:action.payload}
      default:
        return state
    }
  }