//- creare in html la base della pagina con il contenitore grid e con il bottone 'gioca'
//- creare il css con la classe bg-blue e bg-red (in previsione della logica di gioco)
//- recuperare il bottone come domelement
const btnPlayDomElement = document.querySelector('.btn')
const flexGridContainerDomElement = document.querySelector('.flex-grid')
//- aggiungere un addEventListener al bottone
btnPlayDomElement.addEventListener('click', function() {
//    - svuotare eventualmente la griglia
    flexGridContainerDomElement.innerHTML = ''

    for(let i = 0; i < 100; i++){
        let n = i + 1; 
        const cellDomElement = `
        <div class="flex-grid-item">${n}</div>
        `
        flexGridContainerDomElement.innerHTML += cellDomElement
//    - aggiungere l' eventlistener alla casella stampata con parametri click, ONCLICKCELL
    }     
})

//-creare una funzione ONCLICKCELL che aggiunga a THIS (il soggetto che la invoca = casella corrente nel ciclo) la classe bg-green
//(ALLA FINE RIPROVARE CON FUNZIONI PER SVUOTARE E RIEMPIRE)