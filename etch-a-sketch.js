const container = document.querySelector("#container");

//possible solution:
// set cell-size to... 1/cells?

function buildGrid(cellNo)
{
    let totalDivs = cellNo**2;
    let sizePer = 100/cellNo;
    for(let i = 0;i<totalDivs;i++)
    {
        const divCell = document.createElement("div");
        divCell.classList.add("cell");
        // divCell.style.border = "1px solid red";
        divCell.style.width = `${sizePer}%`;
        divCell.style.height = `${sizePer}%`;

        divCell.addEventListener("mouseenter", (event) => {
            event.target.style.backgroundColor = "pink";
        });

        container.appendChild(divCell);
    }
}

buildGrid(10);