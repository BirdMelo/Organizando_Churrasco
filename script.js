import { add_li, create_li } from "./app/crud.js";
import { addLi_itemList, itemList_btn } from "./app/itemList_btn.js";
import { showCust } from "./showCust.js";

const buttonList = document.querySelector('.buttonList')
const guestInput = document.querySelector('#name')

export const guestList = JSON.parse(localStorage.getItem('people')) || []
export const itemList = JSON.parse(localStorage.getItem('shopping')) || []

itemList_btn.forEach(item =>{
    buttonList.innerHTML += `<li class="button"><p>${item.name}</p></li>`
})
guestInput.addEventListener('keydown',(event)=>{
    if(event.key === 'Enter'){
        event.preventDefault()
        if(guestInput.value.trim()){
            add_li('people', guestInput.value)
            guestList.push(...JSON.parse(localStorage.getItem('people')) || [])
            guestInput.value = ''
            showCust()
        }
    }
})
create_li(guestList, 'people')

document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', async () => {
        const textOfLi = await addLi_itemList(button)
        add_li('shopping', textOfLi)
        itemList.push(...JSON.parse(localStorage.getItem('shopping')) || [] )
        showCust()
    })
})
create_li(itemList, 'shopping')
showCust();

