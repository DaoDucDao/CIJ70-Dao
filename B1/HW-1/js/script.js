let row = document.getElementById("row");
let col = document.getElementById("column");
let button = document.getElementById("table-btn");
let tab = document.getElementById("tab");


function reset(a, b){
    if(a == 1){
        let removeWar = document.getElementById("warningID");
        tab.removeChild(removeWar);
        stharr[0] = 0;
    }
    if(b == 1){
        let removeTable = document.getElementById("tableID");
        tab.removeChild(removeTable);
        stharr[1] = 0;
    }
}
let stharr = [0,0];
button.onclick = () => {
    const a = parseInt(row.value);
    const b = parseInt(col.value);
    console.log(a);
    reset(stharr[0], stharr[1]);
    if ( isNaN(a) ||  isNaN(b) || a <= 0 || b <= 0) {
        let warning = document.createElement("h1");
        warning.setAttribute("id", "warningID");
        let validation = document.createTextNode("Please enter valid number for this operation to start properly!");
        warning.appendChild(validation);
        tab.appendChild(warning);
        stharr[0] =1;
    }
    else if (a > 0 && b > 0) {
        let table = document.createElement("table");
        table.setAttribute("id", "tableID");
        for (let i = 0; i < a; ++i) {
            let rowCreated = document.createElement("tr");
            for (let j = 0; j < b; ++j) {
                let colCreated = document.createElement("td");
                rowCreated.appendChild(colCreated);
            }
            table.appendChild(rowCreated);
        }
        tab.appendChild(table);
        stharr[1]=1;
    }
}