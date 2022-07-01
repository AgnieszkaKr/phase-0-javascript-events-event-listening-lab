function addingEventListener() {
    const input = document.getElementById('button');

    function clickAlert() {
    alert('I was clicked!');
    }

    input.addEventListener('click', clickAlert);
}

// const element =dozument.getElementByID("button")

// element.addEventListeners('click', function(){
//     alert("I was clicked")
// })
addingEventListener()