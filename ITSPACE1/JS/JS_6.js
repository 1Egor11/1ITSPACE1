
const title = document.getElementById("mainTitle");
const titleText = title.textContent;
console.log("Текст заголовка:", titleText);


const paragraph = document.createElement("p");
paragraph.textContent = titleText;
paragraph.classList.add("paragraph-copy");
title.insertAdjacentElement("afterend", paragraph);


function createForm() {
    const form = document.createElement("form");
    form.id = "feedbackForm";
    form.classList.add("custom-form");

    const inputName = document.createElement("input");
    inputName.type = "text";
    inputName.placeholder = "Имя";
    inputName.classList.add("form-input");

    const inputEmail = document.createElement("input");
    inputEmail.type = "email";
    inputEmail.placeholder = "Email";
    inputEmail.classList.add("form-input");

    const inputMsg = document.createElement("textarea");
    inputMsg.placeholder = "Сообщение";
    inputMsg.rows = 3;
    inputMsg.classList.add("form-input");

    const submitBtn = document.createElement("button");
    submitBtn.textContent = "Отправить";
    submitBtn.classList.add("btn-link");

    form.append(inputName, inputEmail, inputMsg, submitBtn);
    document.querySelector(".content-wrapper").appendChild(form);


    submitBtn.addEventListener("click", function (e) {
        e.preventDefault();
        const email = inputEmail.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailPattern.test(email)) {
            alert("Email введён корректно!");
        } else {
            alert("Ошибка: введите корректный email.");
        }
    });

    return form;
}


const toggleBtn1 = document.createElement("button");
toggleBtn1.textContent = "Скрыть/Показать форму (display)";
toggleBtn1.classList.add("btn-link");

const toggleBtn2 = document.createElement("button");
toggleBtn2.textContent = "Удалить/Создать форму";
toggleBtn2.classList.add("btn-link");

const wrapper = document.querySelector(".content-wrapper");
wrapper.append(toggleBtn1, toggleBtn2);

let form = createForm();


toggleBtn1.addEventListener("click", () => {
    if (form.style.display === "none") {
        form.style.display = "flex";
    } else {
        form.style.display = "none";
    }
});


let isFormVisible = true;
toggleBtn2.addEventListener("click", () => {
    if (isFormVisible) {
        form.remove();
    } else {
        form = createForm();
    }
    isFormVisible = !isFormVisible;
});


