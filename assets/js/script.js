$(document).ready(function(){
    $("#myModal").modal('show');
})

var likeBtn = document.getElementById("yes");
console.log(likeBtn);

function getApi() {
    // get pic of random dog
    var requestUrl = 'https://random.dog/woof.json';
    console.log(requestUrl);
  
    fetch(requestUrl)
      .then(function(response) {
        return response.json();
    })
    .then(function(data){
        //console.log(data);
          var imageDiv = document.querySelector(".image");
          var image = document.createElement("img");
          image.setAttribute("src", data.url);
          imageDiv.appendChild(image);

    });


        


    };

    likeBtn.addEventListener('click', getApi);