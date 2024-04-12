import { render } from "./main.js";
import { placeOrder } from "./transient.js";


export const placeOrderButton =  async() => {
    document.addEventListener("click", handlePlaceOrderClick)
    return "<div><button id='placeOrder'>Place Car Order</button></div>"
}

const handlePlaceOrderClick = (clickevent) => {
    if (clickevent.target.id === "placeOrder") {
        const convertedToInteger = JSON.stringify(clickevent.target.id)
        placeOrder(convertedToInteger)
        render()
            
    }
}