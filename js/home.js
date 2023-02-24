var menu_ui = document.getElementById('menu-ui');

var menu_btn_clicked = false;

function menu_btn_click(){
    if (menu_btn_clicked == false){
        menu_ui.style.display = 'block';
        setTimeout(() => { menu_ui.style.transform = 'scale(1)'; }, 1);
        menu_btn_clicked = true;
    } else{
        setTimeout(() => { menu_ui.style.transform = 'scale(0.9)'; }, 1);
        setTimeout(() => { menu_ui.style.display = 'none'; }, 100);
        menu_btn_clicked = false;
    }
};

function close_menu(){
    menu_ui.style.display = 'none';
    menu_ui.style.transform = 'scale(0.9)';
    menu_btn_clicked = false;
};
