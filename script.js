console.log("running")

let carts = document.getElementsByClassName('.add-cart');
for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        console.log("running");
    })
}

function cartNumbers() {
    console.log("running");
}