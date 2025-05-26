let num = 10;
console.log("Число:", num);
console.log("Умножим на 2:", num * 2);

let text = "Привет, мир!";
console.log("Строка:", text);
console.log("Длина строки:", text.length);

let text_2 = text + ", Я Егор!";
console.log("Строка:", text_2);

let isOnline = true;
console.log("Булево значение:", isOnline);
console.log("Инверсия булевого:", !isOnline);

let RandomNum = [1, 32, 44, 2005, 20, 2025, 23, 99];

function checkNum(arr, num) {
    if (arr.includes(num)) {
        console.log("Число  есть в массиве")
        return true
    }
    else {
        (arr.push(num));
        console.log("Число не найдено. Добавлено в массив.")
        return false
    }
}

console.log(RandomNum);
console.log(checkNum(RandomNum, 23));
console.log(checkNum(RandomNum, 10));
console.log(RandomNum);

let user = {
    name: "Алексей",        
    age: 28,                
    isAdmin: true          
};

console.log("Имя:", user.name);
console.log("Возраст:", user.age);
console.log("Админ?:", user.isAdmin);


const show = (object, key) => {

    if (key in object) {
        console.log("Значение свойства": object[key]);
    } else {
        console.log(`Свойство "${ key }" не найдено в объекте.`);
    }
};

show(user, "name");    
show(user, "isAdmin"); 
show(user, "email");  

