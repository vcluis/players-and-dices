const isUsernameAvailable = (users, username) => {
    for(let i in users){
        if(username === users[i].name) return false;
    }
    return true;
}