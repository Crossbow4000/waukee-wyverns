const api_url = "https://script.googleusercontent.com/macros/echo?user_content_key=t_3rB0qYWTQThCmTQX1OQ1yBsV9X7pSs73MTxVwotFihYvdGhrrsDTUFz-KKDyFfVOcl_sKs1W0aajUVRbKhaSkHy2RR6WUrm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnJHuS9z0YuhrT-3Vq260P0SEZjS-CAk89NyabIMq29l37BewtScA0vkHXISjUnmfNKT-onlEH2COoNZVO3cHtXkMxjqVWQYRkg&lib=MN6OZnxKwUW0oF-2LQ9t5J1IOmpMGpgTGc";

fetch(api_url) //'https://jsonplaceholder.typicode.com/todos/1')
  .then(response => alert(response))
  .then(json => console.log(json))


