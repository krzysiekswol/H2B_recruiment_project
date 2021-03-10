
searchPhotos = () => {

let key= `WSkFlomRD-nNTRdXWHDwj4pKPvJU2n3IBJLc6HQ4LiQ`;
let query = document.getElementById("search").value;
let url= `https://api.unsplash.com/search/photos/?client_id=${key}&query=${query}&per_page=10`
  fetch(url)
  .then((resp) => resp.json())
  .then(function (data) {
    data.results.map(item => {
      let img = document.createElement('img');
      img.classList.add('pictures')
      img.src= `${item.urls.small}`
      document.getElementById('show_pictures').append(img);
      document.querySelector('.container').classList.add('disactive');
      document.querySelector('.input-group-two').classList.remove('disactive');
      document.querySelector('.wrapper').classList.remove('disactive');
      document.getElementById('subtitle').innerText = `${query[0].toUpperCase()}${query.slice(1).toLowerCase()}`;
        }
      )
    }
  )
  
}

let input = document.getElementById('search');
input.addEventListener('keypress', function(e) { 
if(e.keyCode === 13) {
// e.preventDefault();
searchPhotos();
}
})
let inputTwo = document.getElementById('searchTwo');
inputTwo.addEventListener('keypress', function(e) { 
if(e.keyCode === 13) {
// e.preventDefault();
searchPhotosTwo();
}
})

searchPhotosTwo = () => {
  let img2 = document.querySelectorAll('img');
  img2.forEach(item => {
    item.style.display = 'none';
  })
  let key= `WSkFlomRD-nNTRdXWHDwj4pKPvJU2n3IBJLc6HQ4LiQ`;
  let query = document.getElementById("searchTwo").value;
  let url= `https://api.unsplash.com/search/photos/?client_id=${key}&query=${query}&per_page=10`
    fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
      data.results.map(item => {
        let img = document.createElement('img');
        img.classList.add('pictures')
        img.src= `${item.urls.small}`
        document.getElementById('show_pictures').append(img);
        document.getElementById('subtitle').innerText = `${query[0].toUpperCase()}${query.slice(1).toLowerCase()}`;
  
          }
        )
      }
    )
  }
  


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