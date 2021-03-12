
searchPhotos = () => {

let key= `WSkFlomRD-nNTRdXWHDwj4pKPvJU2n3IBJLc6HQ4LiQ`;
let query = document.getElementById("search").value;
let url= `https://api.unsplash.com/search/collections/?client_id=${key}&query=${query}&per_page=12`
  fetch(url)
  .then((resp) => resp.json())
  .then(function (data) {
    console.log(data.results);
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
        document.querySelector('.modal-wrap').classList.remove(`disactive`);
        document.querySelector('.middle').innerHTML = `<img src= "${item.cover_photo.urls.regular}">`
        document.querySelector('.top').innerHTML = `<h3 class="author">${item.user.name.toUpperCase()}</h3>`
        let id = item.cover_photo.id;
        fetch(`https://api.unsplash.com/photos/${id}/?client_id=${key}`)
        .then((resp) => resp.json())
        .then(function (data) {
        let location = data.location.name;
        if(location === null) {
          location = "no location for this picture";
        }
        let month = data.created_at.slice(5,7);
        switch(month){
          case '01':
            month = "styczeń"
          break;
          case '02':
            month = "luty"
          break;
          case '03':
            month = "marzec"
          break;
          case '04':
            month = "kwiecień"
          break;
          case '05':
            month = "maj"
          break;
          case '06':
            month = "czerwiec"
          break;
          case '07':
            month = "lipiec"
          break;
          case '08':
            month = "sierpień"
          break;
          case '09':
            month = "wrzesień"
          break;
          case '10':
            month = "październik"
          break;
          case '11':
            month = "listopad"
          break;
          case '12':
            month = "grudzień"
          break;
        }
        document.querySelector('.bottom-left').innerHTML = `<h3 class="location">${location}</h3>`
        document.querySelector('.bottom-right').innerHTML = `<h3 class="date">${month} ${data.created_at.slice(0,4)}</h3>`
      })
    }
      
      
      // close modal 
      let btn = document.querySelector(".close")
      btn.addEventListener('click', function() {
        document.querySelector('.modal-wrap').classList.add('disactive');
      })
               
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
      console.log(data.results);
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
        document.querySelector('.middle').innerHTML = `<img src= "${item.cover_photo.urls.regular}">`
        document.querySelector('.top').innerHTML = `<h3 class="author">${item.user.name}</h3>`
        let id = item.cover_photo.id;
        fetch(`https://api.unsplash.com/photos/${id}/?client_id=${key}`)
        .then((resp) => resp.json())
        .then(function (data) {
          let location = data.location.name;
        if(location === null) {
          location = "no location for this picture";
        }
          let month = data.created_at.slice(5,7);
        switch(month){
          case '01':
            month = "styczeń"
          break;
          case '02':
            month = "luty"
          break;
          case '03':
            month = "marzec"
          break;
          case '04':
            month = "kwiecień"
          break;
          case '05':
            month = "maj"
          break;
          case '06':
            month = "czerwiec"
          break;
          case '07':
            month = "lipiec"
          break;
          case '08':
            month = "sierpień"
          break;
          case '09':
            month = "wrzesień"
          break;
          case '10':
            month = "październik"
          break;
          case '11':
            month = "listopad"
          break;
          case '12':
            month = "grudzień"
          break;
        }
        document.querySelector('.bottom-left').innerHTML = `<h3 class="location">${location}</h3>`
        document.querySelector('.bottom-right').innerHTML = `<h3 class="date">${month} ${data.created_at.slice(0,4)}</h3>`
        })
      } 
      
      // close modal 
      let btn = document.querySelector(".close")
      btn.addEventListener('click', function() {
        document.querySelector('.modal-wrap').classList.add('disactive');
      })
       })
        }
    )
  }


  
  








