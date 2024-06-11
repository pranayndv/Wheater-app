
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a4469aae33msh7116fd5e6d151f5p1d9c23jsncf12b740a807',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

	fetch('https://weatherapi-com.p.rapidapi.com/forecast.json?q=maharashtra&days=3', options)
	   .then(Response => Response.json())
	   .then((Response) =>{
        console.log(Response)

         
        // Last_updated_epoch.body.innerHTML = Response.Last_updated_epoch  
        Last_updated.innerHTML = Response.last_updated  
        Temp_c.innerHTML = Response.temp_c  
        Temp_f.innerHTML = Response.temp_f  
        Is_day.innerHTML = Response.is_day 
    
    })
       .catch(err=>console.error(err));