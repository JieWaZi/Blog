import fetchJsonp from 'fetch-jsonp'

export const fetchWeather = (cityIds) => {
    return async (dispatch)=>{
        var result = await fetchJsonp('http://aider.meizu.com/app/weather/listWeather?cityIds=101240101', {
            credentials: 'include',
            method: 'get',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/x-www-form-urlencoded',
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36'
            },
            mode: "cors",
            cache: "force-cache"
        }).then(function(response) {
            console.log(response)
            return response.json()
        }).catch(function(err) {
       
        });
        console.log(result)
        dispatch({"type":"Statistics/SET","payload":result})
    } 
}