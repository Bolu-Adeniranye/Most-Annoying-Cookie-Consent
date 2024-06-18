const modal = document.getElementById('modal')
const modalCloseBtn = document.getElementById('modal-close-btn')
const modalText = document.getElementById("modal-text")
const modalbuttons = document.getElementById("modal-choice-btns")
const declineBtn = document.getElementById("decline-btn")

setTimeout(function(){
    modal.style.display = 'inline'
}, 1500)

modalCloseBtn.addEventListener('click', function(){
    modal.style.display = 'none'
})

declineBtn.addEventListener('mouseover', function(){
    modalbuttons.classList.toggle("reverse")
})


const cookieForm = document.getElementById("cookie-form")

cookieForm.addEventListener('submit',function(e){

    e.preventDefault()
    
    const loginFormData = new FormData(cookieForm)
    const name = loginFormData.get('fullName')

    modalText.innerHTML = `
    <div class="modal-inner-loading">
        <img src="./loading.svg" class="loading">
        <p id="uploadText">
            Uploading your data to the dark web...
        </p>
    </div>`

    setTimeout(function() {
        document.getElementById("uploadText").textContent = `Engaging in acts of tomfoolery...`
    }, 1500)

    setTimeout(function(){
        document.getElementById("modal-inner").innerHTML = ""
        document.getElementById("modal-inner").innerHTML =   
            `<h2>Thanks <span class="modal-display-name">${name}</span>, you NOOB!! </h2>
            <p>Due to a vast difference in skill, your soul is ours!!!</p>
            <div class="idiot-gif">
                <img src="./ulose.gif">
            </div>
                    ` 
        document.getElementById("modal-inner").style.textAlign = "center"
    },3000)

    setTimeout(function() {
        modalCloseBtn.disabled = false
    }, 4500)

})