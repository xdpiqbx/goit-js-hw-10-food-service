/*
Реализуй функционал изменения темы при нажатии (событие change) на чекбокс input.js-switch-input в тулбаре.

По умолчанию тема светлая.
При изменении темы, необходимо добавлять на элемент body класс light-theme или dark-theme.
Выбранная тема должна сохраняться между перезагрузками страницы. Для хранения активной темы используй localStorage.
Если при загрузке страницы тема темная, не забудь поставить свойство checked у чекбокса input.js-switch-input в true, чтобы ползунок сдвинулся в правильное положение.
*/

const Params = {
    
    Theme:{
        LIGHT: 'light-theme',
        DARK: 'dark-theme',
    },

    bodyRef: document.querySelector('body'),
    switchTheme: document.querySelector("input.js-switch-input")

}

const themeStatusCreate = () => {
    
    let themeStatus = {}
    
    if(localStorage.getItem("themeStatus")){
        themeStatus = JSON.parse(localStorage.getItem("themeStatus"));
    }else{
        themeStatus = {
            currentTheme: null,
            isChecked: null
        }
    }
    return themeStatus
}

const setLastTheme = ({bodyRef, Theme, switchTheme}) => {

    let themeStatus = themeStatusCreate()

    if(themeStatus.currentTheme !== null){
        bodyRef.classList.add(themeStatus.currentTheme);
        if(themeStatus.isChecked){
            switchTheme.setAttribute("checked", "")
        }
    }else{
        bodyRef.classList.add(Theme.LIGHT);
        themeStatus.currentTheme = Theme.LIGHT;
        themeStatus.isChecked = false;
        localStorage.setItem("themeStatus", JSON.stringify(themeStatus))
    }
}

const customToggle = (ref, lsObj, theme) => {
    ref.classList.remove(lsObj.currentTheme);
    ref.classList.add(theme);
    !lsObj.isChecked ? Params.switchTheme.setAttribute("checked", "") 
                     : Params.switchTheme.removeAttribute("checked", "")
    
    lsObj.isChecked = lsObj.isChecked ? false : true;
    lsObj.currentTheme = theme;
}

const switcher = ({bodyRef, Theme}) => {

    const themeStatus = JSON.parse(localStorage.getItem("themeStatus"))
    
    if(!themeStatus.isChecked){
        customToggle(bodyRef, themeStatus, Theme.DARK)
    }else{
        customToggle(bodyRef, themeStatus, Theme.LIGHT)
    }
    localStorage.setItem("themeStatus", JSON.stringify(themeStatus))
}

setLastTheme(Params);

Params.switchTheme.addEventListener('change', switcher.bind(this, Params));