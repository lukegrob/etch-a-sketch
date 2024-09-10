const container = document.querySelector("#container");
const buttonSize = document.querySelector("#gridSize");

function buildGrid(cellNo)
{
    //tear down any existing grid here
    const divsToKill = document.querySelectorAll("div.cell");
    if(divsToKill)
    {
        divsToKill.forEach(e => e.remove());
    }

    //
    let totalDivs = cellNo**2;
    let sizePer = 100/cellNo;
    for(let i = 0;i<totalDivs;i++)
    {
        const divCell = document.createElement("div");
        divCell.classList.add("cell");
        divCell.style.width = `${sizePer}%`;
        divCell.style.height = `${sizePer}%`;

        divCell.addEventListener("mouseenter", (event) => {
            const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
            const r = randomBetween(0, 255);
            const g = randomBetween(0, 255);
            const b = randomBetween(0, 255);

            event.target.style.backgroundColor = `rgb(${r},${g},${b})`;
            event.target.style.opacity -= "-0.1";
        });

        container.appendChild(divCell);
    }
}

buttonSize.addEventListener("click", (result) =>
    {   
        let promptMessage = 'Please enter a grid size between 1-100';
        let userInput = NaN;
        do{
            
            userInput = prompt(promptMessage);
            userInput = parseInt(userInput, 10);
            console.log("Result: " + userInput);

                if((userInput > 0) && (userInput <= 100))
                {
                    buildGrid(userInput);
                }
                else{
                    userInput = false;
                    promptMessage = 'Invalid Option. Please enter a grid size between 1-100';
                }
        }
        while(userInput === false);
    });

buildGrid(10);