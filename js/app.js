
searchPhotos = () => {

let key= `WSkFlomRD-nNTRdXWHDwj4pKPvJU2n3IBJLc6HQ4LiQ`;
let query = document.getElementById("search").value;
let url= `https://api.unsplash.com/search/collections/?client_id=${key}&query=${query}&per_page=12`
  fetch(url)
  .then((resp) => resp.json())
  .then(function (data) {
    data.results.map(item => {
      // let img = document.createElement('img');
      // img.classList.add('pictures')
      // img.src= `${item.urls.small}`
      let div = document.createElement('div');
      div.setAttribute('class', 'pics');
      div.innerHTML = `<img src= "${item.cover_photo.urls.small}" class="pictures"><div class="tags">${item.title.toUpperCase()}<div>`;
      document.getElementById('show_pictures').append(div);
    
      document.querySelector('.container').classList.add('disactive');
      document.querySelector('.input-group-two').classList.remove('disactive');
      document.querySelector('.wrapper').classList.remove('disactive');
      document.getElementById('subtitle').innerText = `${query[0].toUpperCase()}${query.slice(1).toLowerCase()}`;

      // =========== modal =========
      
      div.addEventListener('click', showModal);
      function showModal () {
        let modal = document.querySelector('.modal-wrap').classList.remove(`disactive`);
              }
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
  let divCancel = document.querySelectorAll('.pics');
  divCancel.forEach(item => {
    item.remove();
  })
  let key= `WSkFlomRD-nNTRdXWHDwj4pKPvJU2n3IBJLc6HQ4LiQ`;
  let query = document.getElementById("searchTwo").value;
  let url= `https://api.unsplash.com/search/collections/?client_id=${key}&query=${query}&per_page=12`
    fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
      console.log(data.results.map(el => el.title));
      data.results.map(item => {
      let div = document.createElement('div');
      div.setAttribute('class', 'pics');
      div.innerHTML = `<img src= "${item.cover_photo.urls.small}" class="pictures"><div class="tags">${item.title.toUpperCase()}</div>`;
      document.getElementById('show_pictures').append(div);
      document.getElementById('subtitle').innerText = `${query[0].toUpperCase()}${query.slice(1).toLowerCase()}`;  

      // =========== modal =========
      
      div.addEventListener('click', showModal);
      function showModal () {
        document.querySelector('.modal-wrap').classList.remove(`disactive`);
        document.querySelector('.middle').innerHTML = `<img src= "${item.cover_photo.urls.small}">`
              }
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