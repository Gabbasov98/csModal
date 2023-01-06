let modalToggle = document.querySelectorAll("[data-modal]")
let modals = document.querySelectorAll(".m-modal")
let modalCloses = document.querySelectorAll(".m-modal__close")
let modalDialogs = document.querySelectorAll(".m-modal__dialog")

modalToggle.forEach(el => {
    el.onclick = function(){
        let modalId = el.getAttribute("data-modal")

        openModal(modalId)
    }

})


function openModal(modalId){
    document.getElementById(`${modalId}`).classList.add("m-modal--active")
    document.querySelector("body").classList.add("fixed-body")
}


modals.forEach(modal => {
    modal.onclick = function(){
        closeModal()
    }
})

modalCloses.forEach(modalClose => {
    modalClose.onclick = function(){
        closeModal()
    }
})

modalDialogs.forEach(modalDialog => {
    modalDialog.onclick = function(e){
        e.stopPropagation()
    }
})



function closeModal() {
    modals.forEach(el => {
        el.classList.remove("m-modal--active")
        document.querySelector("body").classList.remove("fixed-body")
    })
}
