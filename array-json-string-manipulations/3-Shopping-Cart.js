/*
Shopping Cart System
Features:

Add products to cart

Remove product from cart

Calculate total

Display formatted output
*/

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

/*
{ ...product, qty }
This is spread syntax:

Copies all properties from product (like id, name, price)

Then adds a new property qty to the object

Result: { id, name, price, qty }

*/

/*
✅ Summary of Syntax/Concepts Used
Concept	Syntax Used	Purpose
Array	[]	To store product & cart lists
Object	{}	Product details
Function	function name() {}	Reusable actions
find()	array.find()	Find first match in array
findIndex()	array.findIndex()	Get position/index
push()	array.push()	Add to cart
splice()	array.splice(index, 1)	Remove item
reduce()	array.reduce((sum, item) => ...)	Sum total price
forEach()	array.forEach(item => {})	Loop and display items
Template strings	`Hello ${name}`	Dynamic text formatting
Spread syntax	{ ...object, extraProperty }	Clone object and add new fields
*/