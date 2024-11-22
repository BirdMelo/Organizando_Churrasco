import { itemList_btn } from "./app/itemList_btn.js";
import { itemList, guestList } from "./script.js";

export function showCust() {
    let totalCust = 0;
    const itemNameList = [];
    const quantList = [];

    const totalCost_p = document.querySelector('#resultTotal');
    const costPerPerson = document.querySelector('#resultPerPerson');

    itemList.forEach(item => {
        let resultName = '';
        let quant = '';
        let foundN = false;

        for (let i = 0; i < item.length; i++) {
            const char = item[i];
            if (!foundN && (isNaN(char) || char === ' ')) {
                resultName += char;
            } else if (!foundN) {
                foundN = true;
                quant += char;
            } else if (foundN) {
                if (!isNaN(char) || char === '.' || char === ',') {
                    quant += char;
                } else {
                    break;
                }
            }
        }
        itemNameList.push(resultName.trim());
        quant = parseFloat(quant.replace(',', '.')) || 0;
        quantList.push(quant);
    });
    itemNameList.forEach((name, index) => {
        // debugger
        const teste = itemList_btn.find(item => item.name == name);
        if (teste) {
            totalCust += teste.price * quantList[index];
        }
    });
    const perPerson = guestList.length > 0 ? totalCust / guestList.length : 0;
    totalCost_p.textContent = `R$ ${brPriceFormat(totalCust)}`;
    costPerPerson.textContent = `R$ ${brPriceFormat(perPerson)}`;
}
function brPriceFormat(price) {
    return price.toFixed(2).replace('.', ',');
}
