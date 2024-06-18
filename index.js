const modal = document.getElementById('modal')
const modalCloseBtn = document.getElementById('modal-close-btn')
const modalText = document.getElementById("modal-text")

setTimeout(function(){
    modal.style.display = 'inline'
}, 1500)

modalCloseBtn.addEventListener('click', function(){
    modal.style.display = 'none'
})

const cookieForm = document.getElementById("cookie-form")

cookieForm.addEventListener('submit',function(e){
    e.preventDefault()
    modalText.innerHTML = `
    <div class="modal-inner-loading">
        <img src="./loading.svg" class="loading">
        <p id="uploadText">
            Uploading your data to the dark web...
        </p>
    </div>`

    setTimeout(function() {
        document.getElementById("uploadText").textContent = `Making the sale...`
    }, 1500)

    setTimeout(function(){
        document.getElementById("modal-inner").innerHTML = ""
        document.getElementById("modal-inner").innerHTML =   
            `<h2>Thanks you sucker! </h2>
            <p>We have obtained the rights to your eternal soul.</p>
            <div class="idiot-gif">
                <img src="./ulose.gif">
            </div>
                    ` 
        document.getElementById("modal-inner").style.textAlign = "center"
    },3000)
})