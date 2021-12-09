const createBox = function() {

    // Find the parent for the days (= month container)
    let boxContainerNode = document.getElementById("CardsBoxes")

    // TODO: Get the current month, so we can know how many days we need
    // (just for now, we assume we are in December and we have 31 days)
    let GameBox = 76

    // Within a loop, we create as many days as we need
    for (let BoxNumber = 1; BoxNumber <= 76; BoxNumber++) {

        // We create a new DIV element...
        let newBoxNode = document.createElement("div") // <div></div>
        newBoxNode.innerText = BoxNumber // <div>1</div>
        newBoxNode.classList.add("box") // <div class="day">1</div>

        // Set the 'selectDay' function as a LISTENER for the CLICK event
        // on the newly created HTML node
        newBoxNode.onclick = selectDay
        // (this is another, almost equivalent alternative)
        // newDayNode.addEventListener("click", selectDay)

        // ...and we attach it as the last child of the month container
        boxContainerNode.appendChild(newBoxNode)
    }
}





