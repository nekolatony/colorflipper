const hexNumbers = ['0',"1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');
btn.style.borderColor ="black";
btn.style.borderWidth = '2px';
btn.style.borderRadius='7px';

btn.addEventListener('click',()=>{
    const randomNumber = 2;
    let generatedColor = "#";
    for(i=0;i<6;i++){
        generatedColor = generatedColor + hexNumbers[generateRandomNumber()];
    }
    document.body.style.backgroundColor = generatedColor;
    document.body.innerHTML.bold;
    color.textContent = generatedColor;
    btn.style.backgroundColor = generatedColor;
})



function generateRandomNumber(){
    let color = Math.random()* hexNumbers.length;
    return Math.floor(color);
}