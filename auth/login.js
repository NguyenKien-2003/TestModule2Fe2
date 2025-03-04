  const $auth = document.getElementById('auth');
  const savedUsers = localStorage.getItem('users');
  const users = savedUsers ? JSON.parse(savedUsers) : [];
  //import {users} from "./users.js"
  console.log(users); 
  document.getElementById('loginForm')?.addEventListener('submit', function(event){
  event.preventDefault();
  const $email = document.getElementById('email').value;
  const $password = document.getElementById('password').value;
  const $messageDiv = document.getElementById('loginMessage');
  $messageDiv.textContent='';

if (!$email || !$password) {
    $messageDiv.textContent = "Hãy nhập đầy đủ thông tin";
    return;
}

const user = users.find(u => u.email === $email && u.password === $password);

if (user) {
   $messageDiv.textContent =`Xin chào ${user.first_name} ${user.last_name}`;
   localStorage.setItem("loggedInUser", JSON.stringify(user));
   window.location.href = '../index.html';

        
} else {
   $messageDiv.textContent = "Thông tin tài khoản không chính xác";
}

});
