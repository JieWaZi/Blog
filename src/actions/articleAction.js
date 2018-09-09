export const getArticle = (path) => {
    return async (dispatch)=>{
        var result = await require('../../markdown/'+path)
        dispatch({"type":"GET/ARTICLE","payload":result})
    } 
}

export const listArticles = (param) => {
    return async (dispatch)=>{
        var result = await fetch('http://localhost:8989/api/list-article?pageIndex='+param.pageIndex+'&pageSize='+param.pageSize, {
            method: 'get',
            credentails: 'include',
            mode: "cors",
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/x-www-form-urlencoded'
            }
            }).then(function(response) {
                return response.json()
            }).catch(function(err) {
           
            });
        dispatch({"type":"LIST/ARTICLES","payload":result.articles})
    } 
}