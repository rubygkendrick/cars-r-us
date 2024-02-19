import { setWheel } from "./transient.js"

export const getWheels = async () => {
    const response = await fetch(" http://localhost:8088/wheels")
    const wheelPromise = await response.json()
    //console.log(wheelPromise)
    document.addEventListener("change", wheelChangeHandler)
    let wheelChoicesHTML = `<select id="wheels">
    <option value="" selected disabled hidden>Choose your Wheels</option>`

    const divStringArray = wheelPromise.map(
        (wheel) => {
            return  `<option value="${wheel.id}">${wheel.type}</option>`
        }
    )
    // This function needs to return a single string, not an array of strings
    wheelChoicesHTML += divStringArray.join("")
    wheelChoicesHTML +=  `</select>`
    return wheelChoicesHTML
   
    }

    const wheelChangeHandler = (changeEvent) => {
        if (changeEvent.target.id === "wheels") {
           setWheel(parseInt(changeEvent.target.value))
        }
    }