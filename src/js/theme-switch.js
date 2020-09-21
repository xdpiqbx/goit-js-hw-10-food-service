/*
Реализуй функционал изменения темы при нажатии (событие change) на чекбокс input.js-switch-input в тулбаре.

По умолчанию тема светлая.
При изменении темы, необходимо добавлять на элемент body класс light-theme или dark-theme.
Выбранная тема должна сохраняться между перезагрузками страницы. Для хранения активной темы используй localStorage.
Если при загрузке страницы тема темная, не забудь поставить свойство checked у чекбокса input.js-switch-input в true, чтобы ползунок сдвинулся в правильное положение.
*/

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const switchTheme = document.querySelector("input.js-switch-input");
const bodyRef = document.querySelector('body');

let currentTheme = localStorage.getItem("theme");

if(currentTheme !== null){
    bodyRef.classList.add(currentTheme);
}else{
    bodyRef.classList.add(Theme.LIGHT);
    localStorage.setItem("theme", Theme.LIGHT)
    currentTheme = Theme.LIGHT
}

switchTheme.addEventListener('change', switcher)

function switcher () {
    currentTheme = localStorage.getItem("theme");

    if(currentTheme != Theme.DARK){
        localStorage.setItem("theme", Theme.DARK)
        bodyRef.classList.remove(currentTheme)
        bodyRef.classList.add(Theme.DARK)
        switchTheme.checked = true;
    }else{
        localStorage.setItem("theme", Theme.LIGHT)
        bodyRef.classList.remove(currentTheme)
        bodyRef.classList.add(Theme.LIGHT)
        switchTheme.checked = false;
    }
}