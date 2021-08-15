// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let modal = document.getElementById('modal').className = "hidden";
let likeSym = document.getElementsByClassName('like-glyph');

for(const element of likeSym){
element.addEventListener('click', ()=> {
  mimicServerCall()
  
 .then(() => {
   if(element.className === 'activated-heart'){
    element.classList.remove('activated-heart')
    element.innerHTML = EMPTY_HEART
   }else{
   element.innerHTML = FULL_HEART
   element.className = 'activated-heart'
   console.log(element)
   }
 })
 .catch(() => {
   modal.classList.remove("hidden")
 })
});

}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
