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

let themeStatus = {
    currentTheme: Theme.LIGHT,
    isChecked: false
}

const switchTheme = document.querySelector("input.js-switch-input");
const bodyRef = document.querySelector('body');

const themeStatusJson = JSON.stringify(themeStatus);
localStorage.setItem("themeStatus", themeStatusJson);

themeStatus = JSON.parse(localStorage.getItem("themeStatus"));

// themeStatus.currentTheme = localStorage.getItem("theme");
// themeStatus.isChecked = localStorage.getItem("isChecked");

if(themeStatus.currentTheme !== null){
    bodyRef.classList.add(themeStatus.currentTheme);
    themeStatus.isChecked = true;
}else{
    bodyRef.classList.add(Theme.LIGHT);
    themeStatus.currentTheme = Theme.LIGHT;
    themeStatus.isChecked = false;
    localStorage.setItem("themeStatus", JSON.stringify(themeStatus))
}

switchTheme.addEventListener('change', switcher);

function switcher () {    
    if(themeStatus.currentTheme != Theme.DARK){
        bodyRef.classList.remove(themeStatus.currentTheme);
        bodyRef.classList.add(Theme.DARK);

        themeStatus.isChecked = true;
        themeStatus.currentTheme = Theme.DARK;

        switchTheme.setAttribute("checked", "")

        localStorage.setItem("themeStatus", JSON.stringify(themeStatus))
    }else{
        bodyRef.classList.remove(themeStatus.currentTheme)
        bodyRef.classList.add(Theme.LIGHT)
        
        themeStatus.isChecked = false;
        themeStatus.currentTheme = Theme.LIGHT;
        
        switchTheme.removeAttribute("checked", "")

        localStorage.setItem("themeStatus", JSON.stringify(themeStatus))
    }
}