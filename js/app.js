//- creare in html la base della pagina con il contenitore grid e con il bottone 'gioca'
//- creare il css con la classe bg-blue e bg-red (in previsione della logica di gioco)
//- recuperare il bottone come domelement
const btnPlayDomElement = document.querySelector('.btn')
const flexGridContainerDomElement = document.querySelector('.flex-grid')
//- aggiungere un addEventListener al bottone
btnPlayDomElement.addEventListener('click', function() {
//    - svuotare eventualmente la griglia
    flexGridContainerDomElement.innerHTML = ''

    const selectDomElement = document.getElementById('levels')
    const selectValue = selectDomElement.options[selectDomElement.selectedIndex].value
    const numberCells = parseInt(selectValue)

    for(let i = 0; i < numberCells; i++){
        let n = i + 1; 
        const cellDomElement = `
        <div class="flex-grid-item">${n}</div>
        `
        flexGridContainerDomElement.innerHTML += cellDomElement 
        
    }
//    - aggiungere l' eventlistener alla casella stampata con parametri click, ONCLICKCELL
    const cellDomElementNodes = document.querySelectorAll('.flex-grid-item') 
    

    for(let i = 0; i < cellDomElementNodes.length; i++){
        let currentCell = cellDomElementNodes[i];
        //console.log(currentCell)

        currentCell.addEventListener('click', onClickCell)
        if (selectValue == 81) {
            currentCell.classList.add('medium-level')
        } else if (selectValue == 49) {
            currentCell.classList.add('hard-level')
        } else {
            currentCell.classList.add('easy-level')
        }
    }  

})
//-creare una funzione ONCLICKCELL che aggiunga a THIS (il soggetto che la invoca = casella corrente nel ciclo) la classe bg-green
function onClickCell () {
    this.classList.add('bg-blue')
    console.log(this.innerHTML)
}