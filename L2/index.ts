function registerform() {
    const userName=document.getElementById('username') as HTMLInputElement
    const userAge=document.getElementById('age') as HTMLInputElement
   
    type UserProfile = [name:string, age:Number];
    let user:UserProfile = [userName.value,parseInt(userAge.value)];
        if(user){
        alert(`Name: ${user[0]}, Age: ${user[1]}`)

        return user;
    }
    else {
        alert('No username')

        return;
    }


}
