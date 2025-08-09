const myForm = document.querySelector("#my-form")
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const msg = document.querySelector("#msg")
const userList = document.querySelector("#Users")

myForm.addEventListener('submit',onSubmit)

function onSubmit(e){
    e.preventDefault()
    document.querySelector('body').style.backgroundColor = 'blue';
    console.log(nameInput.value)
    if(nameInput.value === '' || emailInput.value === ''){
        msg.innerHTML = "Please enter the fields"
        msg.classList.add("error")
        setTimeout(() => msg.remove(), 3000)
    }
    else{
        const li = document.createElement('li')
        li.innerHTML = `User: ${nameInput.value},<br>email: ${emailInput.value}`
        userList.appendChild(li)
        userList.style.color = 'white';
    }

}