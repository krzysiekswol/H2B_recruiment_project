 searchPhotos = () => {
   let key= `WSkFlomRD-nNTRdXWHDwj4pKPvJU2n3IBJLc6HQ4LiQ`;
   let query = document.getElementById("search").value;
   let url= `https://api.unsplash.com/search/photos/?client_id=${key}&query=${query}`
    
   fetch(url)
   .then((resp) => resp.json())
   .then(function (data) {
     console.log(data);
   });
 }