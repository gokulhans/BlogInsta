const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://instagram130.p.rapidapi.com/account-info',
  params: {username: 'adele'},
  headers: {
    'X-RapidAPI-Key': 'e653e87a17msh268c622e3e108f9p16442bjsned086d44ffca',
    'X-RapidAPI-Host': 'instagram130.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});