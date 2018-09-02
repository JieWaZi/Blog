const init_State = {
    project: [],
}

export default (state = init_State, action) =>  {
    switch (action.type) {
    case "Index/SET":
        return {...state,project:action.payload}
      default:
        return state
    }
  }