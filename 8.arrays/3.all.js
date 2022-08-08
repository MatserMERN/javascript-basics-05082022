var data = [
    1,
    "scott",
    true,
    null,
    undefined,
    { name: "Scott" },
    function (name) {
        return name
    },
    ["Red", "Green", "Blue"]
]

console.log(data)

// get the function 
// get the object and pass the object name as a parameter to function
// print scott

console.log(data[6](data[5].name))

// get the function 
// get the object and pass the object name as a parameter to function
// access array 
// print Scott Likes Blue

console.log(data[6](data[5].name) + " Likes " + data[7][2]) 