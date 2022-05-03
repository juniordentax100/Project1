$(document).ready(function(){
    $("#myModal").modal('show');
    $(".sub").click(function(event){
      event.preventDefault();
      $("#myModal").modal('hide');
});
});

var likeBtn = document.getElementById("yes");
var userInput = document.querySelector("#submit");
console.log(likeBtn);
console.log(userInput);

function getDog() {
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
          image.setAttribute("id", "pic")
          imageDiv.appendChild(image);

          
        });
        deleteImg();
  };

  var deleteImg = function(){
    var previousImg = document.getElementById("pic");
    previousImg.remove();
  }


        
userInput.addEventListener('click', function(){
  var dog = document.getElementById("dog").checked;
  var cat = document.getElementById("cat").checked;
  if(dog === true){
    getDog();
  }
  
});

likeBtn.addEventListener('click', getDog);
  
