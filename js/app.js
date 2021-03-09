let input = document.getElementById('search');



searchPhotos = () => {
let key= `WSkFlomRD-nNTRdXWHDwj4pKPvJU2n3IBJLc6HQ4LiQ`;
let query = document.getElementById("search").value;
let url= `https://api.unsplash.com/search/photos/?client_id=${key}&query=${query}&per_page=10`
  fetch(url)
  .then((resp) => resp.json())
  .then(function (data) {
    data.results.map(item => {
      let img = document.createElement('img');
      img.src= `${item.urls.small}`
      console.log(img);
      document.getElementById('show_pictures').append(img);
      let container = document.querySelector('.container');
      container.classList.add('disactive');
      

        }
      )
    }
  )
}
input.addEventListener('keypress', function(e) { 
  if(e.keyCode === 13) {
  // e.preventDefault();
  searchPhotos();
  }
 })
 
//  input.addEventListener('keyup', function(e) {
//   if(input.value.length > 2) {
// let key= `WSkFlomRD-nNTRdXWHDwj4pKPvJU2n3IBJLc6HQ4LiQ`;
// let query = document.getElementById("search").value;
// let url= `https://api.unsplash.com/search/photos/?client_id=${key}&query=${query}=$per_page20`
//   fetch(url)
//   .then((resp) => resp.json())
//   .then(function (data) {
//     data.results.map(item => {
//       let img = document.createElement('img');
//       img.src= `${item.urls.small}`
//       console.log(img);
//       document.getElementById('show_pictures').append(img);
    
//     })
    

    
    
      
//     })
    
//   }})