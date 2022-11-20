const api_url = 'https://api.sheety.co/5ee27d6536c5a1b1bac026b071e23292/apiStuff/sheet1';

fetch(api_url)
  .then(response => alert(response))
  .then(json => console.log(json))
