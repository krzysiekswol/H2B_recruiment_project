let input = document.getElementById('search');
console.log(input.value);


searchPhotos = () => {
let key= `WSkFlomRD-nNTRdXWHDwj4pKPvJU2n3IBJLc6HQ4LiQ`;
let query = document.getElementById("search").value;
let url= `https://api.unsplash.com/search/photos/?client_id=${key}&query=${query}&per_page=20`
  fetch(url)
  .then((resp) => resp.json())
  .then(function (data) {
    console.log(data);
  
    
  });
}
input.addEventListener('keypress', function(e) { 
  if(e.keyCode === 13) {
  // e.preventDefault();
  searchPhotos();
  }
 })
 
 input.addEventListener('keyup', function(e) {
  if(input.value.length > 2) {
let key= `WSkFlomRD-nNTRdXWHDwj4pKPvJU2n3IBJLc6HQ4LiQ`;
let query = document.getElementById("search").value;
let url= `https://api.unsplash.com/search/photos/?client_id=${key}&query=${query}=$per_page20`
  fetch(url)
  .then((resp) => resp.json())
  .then(function (data) {
    let arr1 = data.results.filter(item => item)
    console.log(arr1[0].urls.thumb)

    // let img = document.createElement('img').src= `${(arr1[0].urls.thumb)}`
    // document.getElementsByClassName('shown').appendChild(img);
    
      
    })
    
  }})