const prompt = document.querySelector('#howMach')
export function customPrompt(name, unit){
    const label = document.createElement('label')
    label.textContent = `Quantos ${unit} de ${name} terá no churrasco ?`
    prompt.append(label)

    const input = document.createElement('input')
    input.setAttribute('type', 'text')
    prompt.append(input)

    prompt.style.display = 'grid'
    return new Promise((resolve)=>{
        input.addEventListener('keydown', ( event )=>{
            if(event.key === 'Enter'){
                event.preventDefault()
                const quant = input.value
                input.value = ''
                prompt.style.display = 'none'
                resolve(`${name} ${quant}${unit}`)
                prompt.innerHTML = ''
            }
        })
    })
}