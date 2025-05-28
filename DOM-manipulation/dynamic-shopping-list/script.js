
const inp = document.querySelector('input');
const but = document.querySelector('button');
const lis = document.querySelector('ul');

but.addEventListener('click',()=>{
    const myItem = inp.value;
    inp.value = "";
    const list_item = document.createElement('li');
    list_item.textContent = myItem;
    lis.appendChild(list_item);
    const del_button = document.createElement('button');
    del_button.textContent = "Delete";
    list_item.appendChild(del_button)

    list_item.setAttribute("class","list");
    del_button.setAttribute("class","buton");
    del_button.addEventListener('click',()=>{
        lis.removeChild(list_item);
        inp.focus();
    })
    inp.focus(); // to focus the input element ready for entering the next shopping list item.
})

