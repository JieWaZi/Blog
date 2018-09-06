const init_State = {
    mardown: '',
}

export default (state = init_State, action) =>  {
    switch (action.type) {
    case "Article/SET":
        return {...state,mardown:action.payload}
      default:
        return state
    }
  }