import { render } from "./main.js"
import { completeOrder } from "./transient.js"

export const Orders = async () => {
    const orderPromise = await fetch("https://localhost:7119/orders")
    const orders = await orderPromise.json()
    document.addEventListener("click", handleFulfillClick)

    let ordersHTML = ""
    const divStringArray = orders.map(
        (order) => {
            const orderPrice = order.totalPrice
            // const formattedPrice = orderPrice.toLocaleString("en-US", {
            //     style: "currency",
            //     currency: "USD"
            // })

            return `<section class="order">
            <div>Order #${order.id} cost $${orderPrice}.00</div>
            <input type="button" name="complete" id=${order.id} value="Complete">
           </section>
           `
        }
    )
    ordersHTML += divStringArray.join("")
    return ordersHTML
}


const handleFulfillClick =  (clickevent) => {
    if (clickevent.target.name === "complete") {
        const orderId = clickevent.target.id
        completeOrder(orderId)
        render()

    }
}
