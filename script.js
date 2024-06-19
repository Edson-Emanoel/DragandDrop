// Help
function log(message){ 
    console.log("> " + message) 
}

// App
const cards = document.querySelectorAll('.card')
const dropzones = document.querySelectorAll('.dropzone')


// cards
cards.forEach(card => {
    card.addEventListener("dragstart", dragstart);
    card.addEventListener("drag", drag);
    card.addEventListener("dragend", dragend);
})


function dragstart(){
    log("> CARD: Start dragging")
}

function drag(){
    log("> CARD: Is dragging")
}

function dragend(){
    log("> CARD: Stop drag")
}

// Local de onde soltar os cards
// dropzones.forEach(dropzone => {
//     dropzone.addEventListener('dragenter,', dragenter)
//     dropzone.addEventListener('dragover', dragover)
//     dropzone.addEventListener('dragleave', dragleave)
//     dropzone.addEventListener('drop', drop)
// })

// function dragenter (){
//     log("> Dropzone: Enter in zone")
// }

// function dragover (){
//     log("> Dropzone: Over the zone")
// }

// function dragleave (){
//     log("> Dropzone: Leave")
// }

// function drop (){
//     log("> Dropzone: Dropped")
// }