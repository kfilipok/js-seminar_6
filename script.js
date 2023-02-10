// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.
const superLinkId = document.querySelector('#super_link')
// console.log(superLinkId);
// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".
const cardLinkClass = document.querySelectorAll('.card-link');
for (const key in cardLinkClass) {
    cardLinkClass[key].innerHTML = 'ссылка';
}
// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" 
// и вывести полученную коллекцию в консоль.
const cardBodyClass = document.querySelector('.card-body');
console.log(cardBodyClass.querySelectorAll('.card-link'));
// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и 
// вывести его в консоль.
const doc = document.querySelectorAll('[data-number]');
for (const key in doc) {
    if(doc[key].dataset.number == 50){
        console.log(doc[key]);
        break;
    }
}
// 5. Выведите содержимое тега title в консоль.
console.log(document.querySelector('title'));
// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.
const cardTitleClass = document.querySelector('.card-title');
console.log(cardTitleClass.parentNode);
// 7. Создайте тегp`, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, 
// который имеет класс "card".
const cardClass = document.querySelector('.card');
const pTag = document.createElement('p');
pTag.textContent = 'Привет';
let theFirstChild = cardClass.firstChild;
cardClass.insertBefore(pTag, theFirstChild);
// 8. Удалите тег h6 на странице.
const h6Tag = document.querySelector('h6');
const parent = h6Tag.parentNode;
parent.removeChild(h6Tag);