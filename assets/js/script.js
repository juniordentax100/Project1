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
  var animal = localStorage.getItem('pickedAnimal');

  if(animal === "Cat") {
    getCat();
  } else {
    getDog();
  }
}


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
    //console.log(requestCat);
  
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

var noBtn = document.getElementById("no");
        
// userInput.addEventListener('click', function(){
//   var dog = document.getElementById("dog").checked;
//   var cat = document.getElementById("cat").checked;
//   if(dog === true){
//     getDog();
//   }
  
// });

likeBtn.addEventListener('click', showAnimal);
  noBtn.addEventListener('click',showAnimal);
