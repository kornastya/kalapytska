let dragItem = null
const boardZone = document.querySelector('.board__zone')
const createBoardBtn = document.querySelector('.new__board')


createBoardBtn.addEventListener('click', ()=>{
  boardZone.innerHTML += createBoard()
  dragNdrop()
})

const createBoard = () =>{
     return`
     <div class="board">
     <h2 class="board__title">In Progress</h2>
     <div class="card__zone">

     </div>
 </div>
 `
     
}

const dragNdrop = () =>{
    const cards = document.querySelectorAll('.card')
    const cardZone = document.querySelectorAll('.card__zone')

    for (let index = 0; index < cards.length; index++) {
        const element = cards[index];

        element.addEventListener('dragstart', ()=>{
            dragItem = element

            setTimeout(() => {
                element.style.display = 'none'

            }, 0);
        })

        element.addEventListener('dragend', ()=>{
            setTimeout(() => {
                element.style.display = 'block'
                dragItem = null

            }, 0);
        })

        for (let j = 0; j < cardZone.length; j++) {
            const zone = cardZone[j];

           zone.addEventListener('dragover', e => e.preventDefault())

           zone.addEventListener('dragenter', function(e) {
               e.preventDefault()
               this.style.background = 'rgba(0,0,0, .3)'
           })

           zone.addEventListener('drop', function(e) {
            this.style.background = 'rgba(0,0,0, .0)'
            this.append(dragItem)
       
        })
        
    }
}

}


dragNdrop()