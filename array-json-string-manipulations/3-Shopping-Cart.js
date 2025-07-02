// Shopping Cart

let cart = []

// Initial product list (usually comes from API)
const products = [
  { id: 101, name: "Laptop", price: 60000 },
  { id: 102, name: "Mouse", price: 500 },
  { id: 103, name: "Keyboard", price: 1200 },
];

// Add to cart
function add_to_cart(product_id, qty = 1){
    const product = products.find(prod => prod.id === product_id)
    if (product){
        cart.push({...product,qty})  // here qty => qty:qty - shorthand form
    }
}
    
// Remove from cart
function remove_from_cart(product_id){
    const rem_index = cart.findIndex(prod => prod.id === product_id)
    if(rem_index !== -1){
        cart.splice(rem_index,1)
    }
}

function get_total_amount(){
    return cart.reduce((sum,item) => sum + item.price * item.qty,0);
}

function show_cart(){
    console.log(cart)
    console.log("Your cart : ")
    cart.forEach((item) => {
        console.log(
            `${item.name} : ${item.price} X ${item.qty} = ${item.price * item.qty}`
        )
    })
    console.log("Total amount: ",get_total_amount())
}


// usage
add_to_cart(101,2)
add_to_cart(102,3)
add_to_cart(103,5)
show_cart()

remove_from_cart(102)
show_cart()