// Lenguaje JavaScript
// Declaracion de variables globales

var counter = 0;

function cellClick (cell) 
    {
        if(window.getComputedStyle(cell).backgroundImage == "none" )
        {

        if (counter < 8) 
            {
                cell.style = `background-image: url(img/queen.png); 
                background-size: cover;`;
                counter++;
            }else{
                alert("Las 8 reinas ya han sido colocadas");
            }
    }else{
        cell.style = "background-image: none;";
        counter--;
    }
}

function cambiarColor (r, c)
    {
        var cell = document.getElementById("Tablero");
        var r1 = r, c1 = c, r2 = r, c2 = c;
        var r3 = r, c3 = c, r4 = r, c4 = c;

        for (let i = 0; i < 8; i++)
        {
            cell.rows[r].cells[i].style.backgroundColor = "lightblue";
            cell.rows[i].cells[c].style.backgroundColor = "lightblue";
        }