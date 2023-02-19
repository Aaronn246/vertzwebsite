var h2_main = document.getElementById('box-h2-main')
var h2_email = document.getElementById('box-h2-email')
var h2_pw1 = document.getElementById('box-h2-pw1')
var h2_pw2 = document.getElementById('box-h2-pw2')

var box1 = document.getElementById('box1')
var box2 = document.getElementById('box2')
var box3 = document.getElementById('box3')
var box4 = document.getElementById('box4')
var box5 = document.getElementById('box5')
var le_btn = document.getElementById('le_btn')

function verify(){
  if (box1.value.length > 2 && /\S+@\S+\.\S+/.test(box2.value) && box3.value.length > 7 && box4.value.length > 7 && box5.checked && box3.value == box4.value && box3.value.length > 7 && box4.value.length > 7){
    le_btn.setAttribute("onclick", "window.location.href='./dashboard.html'");
    le_btn.style.cursor = 'pointer';
    le_btn.style.opacity = '1';
  } else{
    le_btn.removeAttribute("onclick");
    le_btn.style.cursor = 'not-allowed';
    le_btn.style.opacity = '0.5';
  }
}

function name_input(element){
  if (element.value.length < 3 && element.value.length > 0){
    h2_main.textContent = 'Usernames must be at least 3 characters long';
    h2_main.style.color = '#CCCB50';
    h2_main.style.display = 'block';
  }

  setTimeout(() => {
    if (element.value.length == 0){
      h2_main.textContent = 'This field is required';
      h2_main.style.color = '#DD2E44';
      h2_main.style.display = 'block';
    }
  }, "1")
  
  if (element.value.length >= 3){
    h2_main.style.display = 'none';
  }
}

function email_input(element){
  if (!/\S+@\S+\.\S+/.test(element.value)){
    h2_email.textContent = 'Invalid email';
    h2_email.style.color = '#CCCB50';
    h2_email.style.display = 'block';
  } else{
    h2_email.style.display = 'none';
  }

  setTimeout(() => {
    if (element.value.length == 0){
      h2_email.textContent = 'This field is required';
      h2_email.style.color = '#DD2E44';
      h2_email.style.display = 'block';
    }
  }, "1")
}

function pw_input1(element){
  if (element.value.length < 8 && element.value.length > 0){
    h2_pw1.textContent = 'Passwords must be at least 8 characters long';
    h2_pw1.style.color = '#CCCB50';
    h2_pw1.style.display = 'block';
  }

  setTimeout(() => {
    if (element.value.length == 0){
      h2_pw1.textContent = 'This field is required';
      h2_pw1.style.color = '#DD2E44';
      h2_pw1.style.display = 'block';
    }
  }, "1")
  
  if (element.value.length > 7){
    h2_pw1.style.display = 'none';
  }
}

function pw_input2(element){
  if (element.value.length < 8 && element.value.length > 0){
    h2_pw2.textContent = 'Passwords must be at least 8 characters long';
    h2_pw2.style.color = '#CCCB50';
    h2_pw2.style.display = 'block';
  }

  setTimeout(() => {
    if (element.value.length == 0){
      h2_pw2.textContent = 'This field is required';
      h2_pw2.style.color = '#DD2E44';
      h2_pw2.style.display = 'block';
    }
  }, "1")
  
  if (element.value.length > 7){
    h2_pw2.style.display = 'none';
  }
}

function password(element){
  console.log(box3.value + ' - e1')
  console.log(box4.value + ' - e2')

  if (box3.value != box4.value){
    console.log(box3.value)
    console.log(box4.value)
    if (box3.value.length > 7){
      console.log(box4.value + ' ~ 2')
      if (box4.value.length > 7){
        h2_pw1.textContent = 'Passwords do not match';
        h2_pw1.style.color = '#DD2E44';
        h2_pw1.style.display = 'block';
      }
    }
  }
}