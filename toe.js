let array = Array(9).fill(null); let turn = "X"; const lines = [ 
[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6] ];let counter = 9; 
function clicked(e) { 
counter--;
 if (counter === 0) { 
document.getElementById("winner").innerHTML = "Pa fitues. Luaj Serish :("; }if (turn === "X" && e.target.innerHTML === "") { 
array[e.target.id] = turn; document.getElementById(e.target.id).innerHTML = turn; turn = "O"; document.getElementById("turn").innerHTML = `Radha e ${turn} `; } else if (turn === "O" && e.target.innerHTML === "") { 
array[e.target.id] = turn; document.getElementById(e.target.id).innerHTML = turn; turn = "X"; document.getElementById("turn").innerHTML = `Radha e ${turn} `; } for (i = 0; i <= lines.length; i++) { 
const [a, b, c] = lines[i]; 
    if (array[a] && array[a] === array[b] && array[a] === array[c]) 
    { 
        if (document.getElementById("winner").innerHTML === "") { 
    document.getElementById("winner").innerHTML = `Fitoi ${array[a]} </br></br>(BY JS)`; 
for (i = 0; i <= 9; i++) { 
if (document.getElementById(i).innerHTML === "") { 
document.getElementById(i).innerHTML = "-"; }}}} 
}}
    function reset() { 
        counter = 9; 
        turn = "X"; document.getElementById("turn").innerHTML = `Radha e ${turn}`;
        for (i = 0; i <= 9; i++) { 
document.getElementById(i).innerHTML = ""; 
            array[i] = null; 
        }
        document.getElementById("winner").innerHTML = ""; } 

