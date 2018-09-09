const init_State = {
    article: '',
    articles:[]
}

export default (state = init_State, action) =>  {
    switch (action.type) {
    case "GET/ARTICLE":
        return {...state,article:action.payload}
    case "LIST/ARTICLES":
        return {...state,articles:action.payload}
      default:
        return state
    }
  }