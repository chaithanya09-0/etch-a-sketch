const container = document.querySelector('.container');

const button =  document.querySelector(".button")

const normalColor = "black";
let randomColor;
let color = normalColor;
let red;
let green;
let blue;
let alpha=1;

for(let i=0;i<16;i++){
    for(let j=0;j<16;j++){
        const subdiv = document.createElement("div")
        subdiv.classList.add("subdiv")

        subdiv.addEventListener('mouseenter' , ()=>{
            if(randomColors.textContent === "Random Colors") {
                subdiv.style.backgroundColor = normalColor;
            } else{
                let {red, green, blue, alpha} = generateRandomColors();
                randomColor = `rgb( ${red}, ${green}, ${blue} , ${alpha})`
                subdiv.style.backgroundColor = randomColor;
            }
        })

        container.appendChild(subdiv)
    }
}

button.addEventListener('click', ()=>{
    let containerWidth = 500;
    let numberOfGrids = prompt("Enter the number of squares per each side (16 - 100)");
    if(numberOfGrids > 100){
        alert("Cant have more than 100 squares each side")
    }
    else if(numberOfGrids < 16){
        alert("Cant have less than 16 squares each side")
    } else{
        let widthOfGrid = containerWidth / numberOfGrids;
        container.innerHTML = "";
        for ( let i=0; i< numberOfGrids; i++){
            for ( let j=0; j < numberOfGrids; j++){
                const newSubdiv = document.createElement("div")
                newSubdiv.classList.add("newSubdiv")
                newSubdiv.style.height=`${widthOfGrid}px`
                newSubdiv.style.width=`${widthOfGrid}px`

                newSubdiv.addEventListener('mouseenter' , ()=>{
                    if(randomColors.textContent === "Random Colors") {
                        newSubdiv.style.backgroundColor = normalColor;
                    }else{
                        let {red, green, blue, alpha} = generateRandomColors();
                        randomColor = `rgb( ${red}, ${green}, ${blue} , ${alpha})`
                        newSubdiv.style.backgroundColor = randomColor;
                    }
                })

                container.appendChild(newSubdiv)
            }
        }
    }
})

const randomColors = document.querySelector(".randomColors")

function generateRandomColors(){
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    alpha = (alpha === 1 ) ? 0.1 : Math.round((alpha + 0.1) * 10)/10;
    return {red,green,blue,alpha};
}

randomColors.addEventListener("click" , ()=>{
    if(randomColors.textContent === "Random Colors"){
        randomColors.textContent = "Normal color";
    }
    else{
        randomColors.textContent = "Random Colors";
    }
})
