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


const formEl = document.querySelector(".js-feedback-form");
const textareaEl = formEl.querySelector('textarea[name="message"]');
const inputEl = formEl.querySelector('input[name="name"]');
const FORM_DATA = "form-message";

const onInputChange = (event) => {
    const valueInput = event.target.value;
    localStorage.setItem(FORM_DATA, valueInput);
    
}

formEl.addEventListener("input", onInputChange)

const populateData = () => {
    const data = localStorage.getItem(FORM_DATA);
    textareaEl.value = data;
}

populateData()

const onSubmitForm = (event) => {
    event.preventDefault()
    event.currentTarget.reset()
    localStorage.removeItem(FORM_DATA)
}

formEl.addEventListener("submit", onSubmitForm);