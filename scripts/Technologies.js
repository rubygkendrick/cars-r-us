import { setTechnology } from "./transient.js"

export const getTechnologies = async () => {
    const response = await fetch("https://localhost:7119/technologies")
    const techPromise = await response.json()
    
    document.addEventListener("change", techChangeHandler)
    let techChoicesHTML = `<select id="technology">
    <option value="" selected disabled hidden>Choose Tech Package</option>`

    const divStringArray = techPromise.map(
        (tech) => {
            return  `<option value="${tech.id}">${tech.package}</option>`
        }
    )
    
    techChoicesHTML += divStringArray.join("")
    techChoicesHTML +=  `</select>`
    
    return techChoicesHTML
   
    }

    const techChangeHandler = (changeEvent) => {
        if (changeEvent.target.id === "technology") {
           setTechnology(parseInt(changeEvent.target.value))
        }
    }