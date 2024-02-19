import { setPaint } from "./transient.js"

export const getPaints = async () => {
    const response = await fetch("http://localhost:8088/paints")
    const paintPromise = await response.json()
    //console.log(paintPromise)
    document.addEventListener("change", paintChangeHandler)
    let paintChoicesHTML = `<select id="paints">
    <option value="" selected disabled hidden>Choose a Paint Color</option>`

    const divStringArray = paintPromise.map(
        (paint) => {
            return `<option value="${paint.id}">${paint.color}</option>`
       
        }
    )
     // This function needs to return a single string, not an array of strings
    paintChoicesHTML += divStringArray.join("")
    paintChoicesHTML +=  `</select>`
    return paintChoicesHTML
   
    }

    const paintChangeHandler = (changeEvent) => {
        if (changeEvent.target.id === "paints") {
            setPaint(parseInt(changeEvent.target.value))
        }
    }