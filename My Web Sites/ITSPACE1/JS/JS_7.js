
function loadUsers() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            const users = JSON.parse(xhr.responseText);

            const userList = document.createElement("div");
            userList.classList.add("api-output");

            users.forEach(user => {
                const userItem = document.createElement("p");
                userItem.textContent = `|  ${user.name} (${user.email})  |`;
                userItem.classList.add("subtitle");
                userList.appendChild(userItem);
            });

            document.querySelector(".content-wrapper").appendChild(userList);
        } else {
            alert("Ошибка при загрузке данных: " + xhr.status);
        }
    };

    xhr.send();
}


function sendPost() {
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
            title: "ITSPACE тест",
            body: "Это тестовое сообщение от формы.",
            userId: 1
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log("Ответ от сервера (POST):", data);

            const postResult = document.createElement("p");
            postResult.textContent = `Отправлено: ${data.title} (ID: ${data.id})`;
            postResult.classList.add("subtitle");

            document.querySelector(".content-wrapper").appendChild(postResult);
            alert("Данные успешно отправлены!");
        })
        .catch(error => {
            console.error("Ошибка при POST:", error);
            alert("Ошибка при отправке данных.");
        });
}


const getBtn = document.createElement("button");
getBtn.textContent = "Загрузить пользователей (GET)";
getBtn.classList.add("btn-link");

const postBtn = document.createElement("button");
postBtn.textContent = "Отправить данные (POST)";
postBtn.classList.add("btn-link");
postBtn.style.marginLeft = "10px";


const wrapper = document.querySelector(".content-wrapper");
wrapper.appendChild(getBtn);
wrapper.appendChild(postBtn);


getBtn.addEventListener("click", loadUsers);
postBtn.addEventListener("click", sendPost);
