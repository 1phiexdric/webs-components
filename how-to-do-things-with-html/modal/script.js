const modal = document.querySelector('.modal')
const openModalBtn = document.getElementById('open')
const closeModalBtn = document.querySelector('.close')
openModalBtn.addEventListener('click', ()=>{
    modal.showModal()
})

closeModalBtn.addEventListener('click', ()=>{
    modal.close()
})
