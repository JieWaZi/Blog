export const fetchWeather = (cityIds) => {
    return async (dispatch)=>{
        var result = await fetch('http://localhost:8989/api/get-weather', {
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
        console.log(result)
        dispatch({"type":"Weather/SET","payload":result})
    } 
}