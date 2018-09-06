export const getArticle = () => {
    return async (dispatch)=>{
        var result = await require('../markdown/README.md')
        dispatch({"type":"Article/SET","payload":result})
    } 
}