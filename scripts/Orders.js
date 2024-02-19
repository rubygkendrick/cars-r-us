
export const Orders = async () => {
    const orderPromise = await fetch("http://localhost:8088/orders?_expand=paint&_expand=interior&_expand=technology&_expand=wheel")
    const orders = await orderPromise.json()
    //console.log(orders)
    let ordersHTML = ""
    const divStringArray = orders.map(
        (order) => {
            const orderPrice = order.paint.price + order.interior.price + order.technology.price + order.wheel.price
            const formattedPrice = orderPrice.toLocaleString("en-US", {
                style: "currency",
                currency: "USD"
            })
            return`<section class="order">
            <div>Order #${order.id} cost ${formattedPrice}</div>
           </section>`
        }
    )
    ordersHTML += divStringArray.join("")
    return ordersHTML
}

const customEvent = new CustomEvent("orderPlaced")
document.dispatchEvent(customEvent)