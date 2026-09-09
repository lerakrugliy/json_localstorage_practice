const user = {
    name: "ncjd",
    age: 25674,
    isStudent: true,
    family: undefined,
    listening: () => {
        console.log("i`m listening");
        
    },
}

const userJson = JSON.stringify(user);
console.log(user, userJson);

user.listening()

const catJson = '{"name": "Фасолька","age": 4}'
console.log(catJson);

const cat = JSON.parse(catJson);
console.log(cat.name);
