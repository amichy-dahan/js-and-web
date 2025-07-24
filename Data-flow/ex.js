addEventListener("DOMContentLoaded", () => {
    let posts = [
        {
            name: "sharon",
            text: " have a good life"
        },
        {
            name: "shi",
            text: " have a good life"
        },
        {
            name: "shivi",
            text: " have a good learn"
        },
        {
            name: "miaa",
            text: " arre your great"
        },
        {
            name: "amichy",
            text: " have a nice day"
        }

    ]

render();


function render (){
const mess = document.getElementById("message");
mess.innerHTML = ""
posts.forEach((post) =>{
    const newDiv = document.createElement("div");
    const nameSpan = document.createElement("strong");
    nameSpan.textContent = post.name + ": ";
    const textSpan = document.createTextNode(post.text);
    newDiv.appendChild(nameSpan);
    newDiv.appendChild(textSpan);
    mess.appendChild(newDiv);
})
}

const btn = document.getElementById("btn")

btn.addEventListener("click",()=>{
  const inputNameEl = document.getElementById("name");
  const inputWishEl = document.getElementById("wish");

  const name = inputNameEl.value;
  const text = inputWishEl.value;

  posts.push({ name, text });

  inputNameEl.value = "";
  inputWishEl.value = "";

  render();

})



})