export const fetchGithub = () => {
    return async (dispatch)=>{
        var result = await fetch('https://api.github.com/users/JieWaZi/repos', {
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
        dispatch({"type":"Index/SET","payload":result})
    } 
}