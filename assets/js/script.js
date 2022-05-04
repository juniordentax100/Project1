//global variables
var likeBtn = document.getElementById("yes");
var noBtn = document.getElementById("no");
var form = document.getElementById('animalForm');
var closeModal = () => $("#myModal").modal('hide');

// open modal on page load
$(document).ready(function(){
  $("#myModal").modal('show');
});

// revtrieve value of user input form and save to localStorage
animalForm.addEventListener('submit', function(event) {
  event.preventDefault()
  var pickedAnimal = document.querySelector("#animalForm ul li input[type=radio]:checked").value
  showAnimal()
  closeModal()
  localStorage.setItem('pickedAnimal', pickedAnimal)
})

//function to determine which animal gets displayed based on user input 
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
};

// API function to request random dog picture
function getDog() {
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

// API function to request random cat picure
function getCat() {
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


//Event listeners for "yes" "no" clicks
likeBtn.addEventListener('click', showAnimal);
noBtn.addEventListener('click',showAnimal);


// TO DO: **for future updates, allow users to submit multiple pet choices at the same time**
// TO Do: **for future updates, allow users to save liked and unliked pictures to localStorage**
    
  

    
    
    
  





