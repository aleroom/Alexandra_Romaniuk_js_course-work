let out = document.querySelector(".out");
let wrapper = document.createElement("div");
wrapper.classList.add("wrapper");

const createTaskBlock = (content) => {
    let taskBlock = document.createElement("div");
    let taskListItem = document.createElement("div");
    let removeBtn = document.createElement("button");
    
}

const createForm = () => {
    let form = document.createElement("form");
    out.append(wrapper);
    form.style.cssText = `border: 1px solid grey; width: 300px; padding: 20px`;
    wrapper.append(form);

    let input = document.createElement("input");
    let btnSend = document.createElement("button");
    btnSend.textContent = "Get task";
    form.append(input, btnSend);

    btnSend.addEventListener('click', (e) => {
        let content = input.value;
        console.log(content);
        e.preventDefault();
        createTaskBlock(content)
        input.value = "";
    })
};
createForm();
