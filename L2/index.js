function registerform() {
    var userName = document.getElementById('username');
    var userAge = document.getElementById('age');
    var user = [userName.value, parseInt(userAge.value)];
    if (user) {
        alert("Name: ".concat(user[0], ", Age: ").concat(user[1]));
        return user;
    }
    else {
        alert('No username');
        return;
    }
}
