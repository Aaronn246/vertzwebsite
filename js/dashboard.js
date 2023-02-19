var ui_command_btns = []

window.addEventListener('load', (event) => {
    var objToday = new Date(),
	curHour = objToday.getHours() > 12 ? objToday.getHours() - 12 : (objToday.getHours() < 10 ? "" + objToday.getHours() : objToday.getHours()),
	curMinute = objToday.getMinutes() < 10 ? "0" + objToday.getMinutes() : objToday.getMinutes(),
	curMeridiem = objToday.getHours() > 12 ? "PM" : "AM";
    var today = curHour + ":" + curMinute + " " + curMeridiem;

    var texts = document.getElementsByClassName('time_txt')
    for (var i = 0; i < texts.length; i++){
        texts[i].textContent = `Today at ${today}`;
    };

    var uis = document.getElementsByClassName('sub_ui')
    for (var i = 0; i < uis.length; i++){
        var ui_count = document.getElementById(`${uis[i].id.toLowerCase()}-commands_count`)
        var ui_total = document.getElementById(`${uis[i].id.toLowerCase()}-commands_total`)
        var ui_parent = uis[i]
        ui_count.textContent = `${ui_parent.children[1].children.length}`;
        var total = ui_parent.children[1].children.length - ui_command_btns.length
        ui_total.textContent = `${total}`;
    };
});

function panel_btn(element){
    var objToday = new Date(),
	curHour = objToday.getHours() > 12 ? objToday.getHours() - 12 : (objToday.getHours() < 10 ? "" + objToday.getHours() : objToday.getHours()),
	curMinute = objToday.getMinutes() < 10 ? "0" + objToday.getMinutes() : objToday.getMinutes(),
	curMeridiem = objToday.getHours() > 12 ? "PM" : "AM";
    var today = curHour + ":" + curMinute + " " + curMeridiem;

    var texts = document.getElementsByClassName('time_txt')
    for (var i = 0; i < texts.length; i++){
        texts[i].textContent = `Today at ${today}`;
    };

    var btns = document.getElementsByClassName('panel_btn')
    for (var i = 0; i < btns.length; i++){
        btns[i].style.background = '';
        btns[i].style.color = '';
    };

    element.style.background = 'rgba(255, 255, 255, 0.2)';
    element.style.color = 'var(--txt1)';

    var uis = document.getElementsByClassName('sub_ui')
    for (var i = 0; i < uis.length; i++){
        uis[i].style.display = 'none';
    };

    var element_ui = document.getElementById(`${element.textContent.match(/\b(\w+)\b/g)[1].toLowerCase()}-ui`)
    element_ui.style.display = 'block';
}

function ui_command_btn(element){
    var objToday = new Date(),
	curHour = objToday.getHours() > 12 ? objToday.getHours() - 12 : (objToday.getHours() < 10 ? "" + objToday.getHours() : objToday.getHours()),
	curMinute = objToday.getMinutes() < 10 ? "0" + objToday.getMinutes() : objToday.getMinutes(),
	curMeridiem = objToday.getHours() > 12 ? "PM" : "AM";
    var today = curHour + ":" + curMinute + " " + curMeridiem;

    var texts = document.getElementsByClassName('time_txt')
    for (var i = 0; i < texts.length; i++){
        texts[i].textContent = `Today at ${today}`;
    };

    if (!ui_command_btns.includes(element.id)){
        element.firstChild.textContent = 'add';
        var c = element.parentElement.children

        for (var i = 0; i < c.length; i++){
            c[i].style.opacity = '0.4';
        };

        element.style.opacity = '1';
        element.parentElement.style.cursor = 'not-allowed';
        ui_command_btns.push(element.id);

        var cmd_counter = document.getElementById(`${element.parentElement.parentElement.parentElement.children[0].children[0].textContent.toLowerCase()}-ui-commands_count`)
        var le_length = element.parentElement.parentElement.children.length - ui_command_btns.length
        cmd_counter.textContent = le_length.toString();
        return
    };
    
    if (ui_command_btns.includes(element.id)){
        element.firstChild.textContent = 'delete';
        var c = element.parentElement.children

        for (var i = 0; i < c.length; i++){
            c[i].style.opacity = '1';
        };

        element.parentElement.style.cursor = 'default';
        ui_command_btns.splice(ui_command_btns.indexOf(element.id), 1);
        
        var cmd_counter = document.getElementById(`${element.parentElement.parentElement.parentElement.children[0].children[0].textContent.toLowerCase()}-ui-commands_count`)
        var le_length = element.parentElement.parentElement.children.length - ui_command_btns.length
        cmd_counter.textContent = le_length.toString();
        return
    };
};
