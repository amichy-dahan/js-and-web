const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true }
}

const button = document.getElementById("myBt")

button.addEventListener("click", () => {
 const input = document.getElementById("myIn").value;

  checkReservation(input)

}) 

function checkReservation(str){
for (const key in reservations) {
  if(key === str && !reservations[key].claimed){
    const newText = document.createElement("h5")
    newText.textContent = " welcome the user.";
    const body = document.body;
    body.appendChild(newText);
    document.getElementById("myIn").value="";
  }else if(key === str && reservations[key].claimed){

     const newText = document.createElement("h5")
    newText.textContent = "  user alreadey claimbe.";
      const body = document.body;
    body.appendChild(newText);
     document.getElementById("myIn").value="";

  }
  else{

    const newText = document.createElement("h5")
    newText.textContent = "   there is nothing under their name.";
    const body = document.body;
    body.appendChild(newText);
    document.getElementById("myIn").value="";


  }
}
}