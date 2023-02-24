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

var search_txt = document.getElementById('search-txt');

function search(element){
    var input, filter, servers, div, h1, i, txtValue;
    input = search_txt;
    filter = input.value.toUpperCase();
    servers = document.getElementById('servers');
    div = servers.getElementsByTagName('div');

    for (i = 0; i < div.length; i++) {
        h1 = div[i].getElementsByTagName('h1')[0];
        txtValue = h1.textContent || h1.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            div[i].style.display = 'block';
        } else {
            div[i].style.display = 'none';
        }
    }
};
