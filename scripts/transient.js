// Set up the transient state data structure and provide initial valuess
const transientState = {
    "id": 0,
    "technologyId": 0,
    "wheelId": 0,
    "interiorId": 0,
    "paintId": 0,
}

// Functions to modify each property of transient state

export const setPaint = (chosenPaint) => {
    transientState.paintId = chosenPaint
    
}

export const setWheel = (chosenWheel) => {
    transientState.wheelId = chosenWheel
  
}

export const setInterior = (chosenInterior) => {
    transientState.interiorId = chosenInterior
 
}
export const setTechnology = (chosenTechnology) => {
    transientState.technologyId = chosenTechnology
    
}


// Function to convert transient state to permanent state

export const placeOrder = async () => {
    let postOptions = {}
    if ((transientState.technologyId === 0) || (transientState.wheelId === 0) || (transientState.interiorId === 0) || (transientState.paintId === 0)){
        window.alert("NO!")
    } else {
        postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json" 
        },
        body: JSON.stringify(transientState)
    }
}
        const response = await fetch("http://localhost:8088/orders", postOptions)
        const customEvent = new CustomEvent("newOrderCreated")
        document.dispatchEvent(customEvent)
        setInterior(0)
        setTechnology(0)
        setPaint(0)
        setWheel(0)

}

