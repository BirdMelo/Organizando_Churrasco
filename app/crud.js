

export function add_li(listKey, value){
    const storage = JSON.parse(localStorage.getItem(listKey)) || []
    storage.push(value)
    localStorage.setItem(listKey, JSON.stringify(storage))
    create_li(storage, listKey)
    showCust()
}

export function create_li(storage, listKey){
    const ul = document.querySelector(`#${listKey}List`)
    ul.innerHTML = '';
    storage.forEach(item => {
        const li = document.createElement('li')
        li.classList.add('button')

        const p = document.createElement('p')
        p.textContent = item

        const close_btn = document.createElement('p')
        close_btn.id = 'close_cross'
        close_btn.textContent = 'x'
        close_btn.onclick = ()=>{
            removeItem(item, listKey)
        }

        li.append(p)
        li.append(close_btn)
        ul.append(li)
    });
}
function removeItem(item, listKey){
    const storage = JSON.parse(localStorage.getItem(listKey))
    const itemIndex = storage.indexOf(item)
    
    if (itemIndex !== -1) {
        storage.splice(itemIndex, 1)
        localStorage.setItem(listKey, JSON.stringify(storage))
        create_li(storage, listKey)
    }
}