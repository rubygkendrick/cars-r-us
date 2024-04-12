import { setInterior } from "./transient.js"

export const getInteriors = async () => {
    const response = await fetch("https://localhost:7119/interiors")
    const interiorPromise = await response.json()
    document.addEventListener("change", interiorChangeHandler)
    let interiorChoicesHTML = `<select id="interiors">
    <option value="" selected disabled hidden>Choose an Interior</option>`

    const divStringArray = interiorPromise.map(
        (interior) => {
            return`<option value="${interior.id}">${interior.material}</option>`
        }
    )
   
    interiorChoicesHTML += divStringArray.join("")
    interiorChoicesHTML +=  `</select>`
    
    return interiorChoicesHTML
   
    }

    const interiorChangeHandler = (changeEvent) => {
        if (changeEvent.target.id === "interiors") {
           setInterior(parseInt(changeEvent.target.value))
        }
    }