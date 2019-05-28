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
} else if (process.argv[2] === 'read'){
  request('https://lidemy-book-store.herokuapp.com/books?_limit=20', 
  function (error, response, body) {
  const json=JSON.parse(body);
  for (let i = 0; i < json.length; i +=1) {
    if (process.argv[3]== i+1){
          console.log(`${json[i].id} ${json[i].name}`)
    }
  }
 }); 
} else if (process.argv[2] === 'delete') {
  request.delete(`https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`);
} else if (process.argv[2] === 'create' ) {
  request.post(
    {
      url: 'https://lidemy-book-store.herokuapp.com/books/',
      form: { name: process.argv[3] },
    })
} else (process.argv[2] === 'update') 
  request.patch(
    {
      url: `https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`,
      form: { name: process.argv[4] },
  })


