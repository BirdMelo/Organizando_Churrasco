import { customPrompt } from "./customPrompt.js"

export const itemList_btn = [
    {name: "carne bovina",          unit: "kg",     price: 10   },
    {name: "asinha de frango",      unit: "kg",     price: 15   },
    {name: "Coca-Cola",             unit: "L",      price: 7    },
    {name: "coxa de frango",        unit: "kg",     price: 9.99 },
    {name: "cerveja",               unit: "L",      price: 5.65 },
    {name: "Guaraná",               unit: "L",      price: 5.90 },
    {name: "Coração de Galinha",    unit: "kg",     price: 10   },
    {name: "carvão",                unit: "kg",     price: 3.50 },
    {name: "linguiça",              unit: "kg",     price: 50   },
    {name: "pão",                   unit: "kg",     price: 50   },
    {name: "costela",               unit: "kg",     price: 44.2 },
    {name: "carne de porco",        unit: "kg",     price: 29.99}
]

export async function addLi_itemList(button){
    const item = itemList_btn.find(object => object.name === button.querySelector('p').textContent)
    const text = await customPrompt(item.name, item.unit)
    return text 
}