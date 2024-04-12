import { getTechnologies } from "./Technologies.js"
import { getPaints } from "./Paints.js"
import { getInteriors } from "./Interiors.js"
import { getWheels } from "./Wheels.js"
import { placeOrderButton } from "./PlaceOrder.js"
import { Orders } from "./Orders.js"




export const render = async () => {
    const paintOptionsHTML = await getPaints()
    const interiorOptionsHTML = await getInteriors()
    const wheelOptionsHTML = await getWheels()
    const technologyOptionsHTML = await getTechnologies()
    const placeCarOrderButtonHTML = await placeOrderButton()
    const newOrderCreated = await Orders()
    //const customCarOrders = getCustomCarOrder()

    const composedHTML = `
        <h1>Cars R Us: Personal Car Builder</h1>
      
        <article class="choices">
            <section class="choices__paints options">
                <h2>Paints</h2>
                ${paintOptionsHTML}
            </section>
       
            <section class="choices__interiors options">
                <h2>Interiors</h2>
                ${interiorOptionsHTML}
            </section>
    
            <section class="choices__wheels options">
                <h2>Wheels</h2>
                ${wheelOptionsHTML}
            </section>

            <section class="choices__technologies options">
            <h2>Technologies</h2>
            ${technologyOptionsHTML}
            </section>
        </article>

        <article class="order">
           ${placeCarOrderButtonHTML}

        </article>

        <article class="customCarOrders">
            <h2>Custom Car Orders</h2>
            
            ${newOrderCreated}
        </article>
       
    `

    container.innerHTML = composedHTML
}

//document.addEventListener("newOrderCreated", event => {
render()
//})


render()