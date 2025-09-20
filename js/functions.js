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
    }
}