// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
//let btn = document.querySelectorAll(".btnRequest");

let allButtons = document.querySelectorAll('.btnRequest');

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
/*btn.onclick = function() {
  modal.style.display = "block";
}*/
console.log(allButtons.length);
for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener('click', function() {
        console.log(this.value);
        modal.style.display = "block";
        para = document.getElementById('hidden');
        hiddenInput = document.createElement('input');
        hiddenInput.type = 'hidden';
        hiddenInput.name = 'userId';
        hiddenInput.value = this.value;
        para.appendChild(hiddenInput);
    });
  }
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}