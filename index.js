const adviceNumber= document.querySelector("#advice-number");
const advice= document.querySelector(".advice");
const btn= document.querySelector(".dice");
const adviceGenerator = async() => {
    const response= await fetch("https://api.adviceslip.com/advice");
    const data= await response.json();

adviceNumber.textContent=data.slip.id;
advice.innerHTML=`"${data.slip.advice}"`;
}
adviceGenerator()
btn.addEventListener("click",adviceGenerator);