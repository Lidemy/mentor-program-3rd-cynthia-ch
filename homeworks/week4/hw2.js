const request = require('request');
const process = require('process');

if (process.argv[2] === 'list'){
  request(
  'https://lidemy-book-store.herokuapp.com/books?_limit=20', 
  function (error, response, body) {
  const json = JSON.parse(body);
  for (let i = 0; i <= json.length; i += 1) {
    console.log(`${json[i].id}, ${json[i].name}`); 
  } 
 });	
} else request('https://lidemy-book-store.herokuapp.com/books?_limit=20', function (error, response, body) {
  if (process.argv[2]=='read') {
	  const json=JSON.parse(body);
      for (let i = 0; i < json.length; i +=1) {
      	if (process.argv[3]== i+1){
	        console.log(`${json[i].id} ${json[i].name}`)
      	}
      }
  }
});
