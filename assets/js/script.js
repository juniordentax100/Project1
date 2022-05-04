$(document).ready(function(){
    $("#myModal").modal('show');
});

var form = document.getElementById('animalForm');

var closeModal = () => $("#myModal").modal('hide');

animalForm.addEventListener('submit', function(event) {
  event.preventDefault()
  var pickedAnimal = document.querySelector("#animalForm ul li input[type=radio]:checked").value
  showAnimal()
  closeModal()
  localStorage.setItem('pickedAnimal', pickedAnimal)
})

function showAnimal() {
  var dog = document.getElementById("dog").checked;
  var cat = document.getElementById("cat").checked;
  //console.log(dog);
  //console.log(cat);
  if(dog === true){
    getDog();
  }
  else if(cat === true){
    getCat();
  }
  // TO DO: **for future updates, allow users to submit multiple pet choices at the same time**
};


var likeBtn = document.getElementById("yes");
var noBtn = document.getElementById("no");
var userInput = document.querySelector("#submit");
//console.log(likeBtn);
//console.log(userInput);

function getDog() {
    // get pic of random dog
    var requestUrl = 'https://random.dog/woof.json';
    console.log(requestUrl);
  
    fetch(requestUrl)
      .then(function(response) {
        return response.json();
    })
    .then(function(data){
        console.log(data);
          var imageDiv = document.querySelector(".image");
          imageDiv.innerHTML = ""
          var image = document.createElement("img");
          image.setAttribute("src", data.url);
          image.setAttribute("id", "pic")
          imageDiv.appendChild(image);

          
        });
       
  };

  function getCat() {
    // get pic of random cat
    var requestUrl = 'https://cataas.com/cat?json=true';
  
    fetch(requestUrl)
      .then(function(response) {
        return response.json();
    })
    .then(function(data){
        console.log(data);
          var imageDiv = document.querySelector(".image");
          imageDiv.innerHTML = ""

          var image = document.createElement("img");
          image.setAttribute("src", "https://cataas.com/" + data.url);
          image.setAttribute("id", "pic")
          imageDiv.appendChild(image);

          
        });
        
  };

  var deleteImg = function(){
    var previousImg = document.getElementById("pic");
    previousImg.remove();
  }



  likeBtn.addEventListener('click', showAnimal);
  noBtn.addEventListener('click',showAnimal);



        

