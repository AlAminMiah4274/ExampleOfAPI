const loadUser = () => {
    fetch('https://randomuser.me/api/?gender=female')
        .then(res => res.json())
        .then(data => displayUsers(data))
}
loadUser();

const displayUsers = users => {
    for (const user of users) {
        console.log(user)
    }
}