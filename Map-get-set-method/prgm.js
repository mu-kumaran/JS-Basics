// Map () storage

// Instance creation
const userStore  = new Map()

// Storing {key,value} pair
userStore.set("User","Manoj")
console.log(userStore)

// Retriving value using key
const user = userStore.get("User")
console.log("Username", user)

// checking storage
if(userStore.has("User"))
{
    console.log("user exists")
}

// Deleting storage
userStore.delete("User")

if(!userStore.has("User")){
    console.log("User does not exist")
}