const first = document.getElementById('first');
const second = document.getElementById('second');
const find = document.getElementById('find_button');
const result = document.getElementById('result');


function check(a, b) {
    if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0 || a >= b) return false;
    return true;
}
function reset(a, b) {
    if (a == 1) {
        let removeWar = document.getElementById("warningID");
        result.removeChild(removeWar);
        stharr[0] = 0;
    }
    if (b == 1) {
        let removeList = document.getElementById("list1");
        result.removeChild(removeList);
        stharr[1] = 0;
    }
}
let stharr = [0, 0];
find.onclick = () => {
    const a = parseInt(first.value);
    const b = parseInt(second.value);
    reset(stharr[0], stharr[1]);
    // console.log(a)
    if (check(a, b) == false) {
        let warning = document.createElement("h1");
        warning.setAttribute("id", "waringID");
        let validate = document.createTextNode("Invalid input");
        warning.appendChild(validate);
        result.appendChild(warning);
        stharr[0] = 1;
    }
    else {
        let table = document.createElement("table");
        table.setAttribute("id", "list1");
        let rowCreated = document.createElement("tr");
        let countCol = 0;
        for (let i = a; i <= b; ++i) {
            let countPrime = 0;
            for (let j = 2; j <= Math.sqrt(i); j++) {
                if (i % j === 0) countPrime++;
            }
            if (countPrime === 0 && i != 1) {
                let colCreated = document.createElement("td");
                colCreated.appendChild(document.createTextNode(i));
                rowCreated.appendChild(colCreated);
                countCol++;
                if (countCol / 25 === 1) {
                    countCol = 0;
                    table.appendChild(rowCreated);
                    rowCreated = document.createElement("tr");
                }
            }
        }
        table.appendChild(rowCreated);
        result.appendChild(table);
        stharr[1] = 1;
    }
}