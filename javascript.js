var database = [
    {
        username: "khoa",
        password: "nopass",
    },
    {
        username: "hiep",
        password: "bahiep",
    },
    {
        username: "than",
        password: "123",
    },
];
var newsfeed = [
    {
        username: "khoa",
        timeline: "oh man, I'm too sleepy.",
    },
    {
        username: "toan",
        timeline: ":<",
    },
    {
        username: "thanthan",
        timeline: "drawing time.",
    },
];
var usernamePrompt = prompt("what is your username?");
var passwordPrompt = prompt("what is your password?");
function checkValid(user, pass) {
    for (var i = 0; i < database.length; i++) {
        if (
            usernamePrompt == database[i].username &&
            passwordPrompt == database[i].password
        )
            return true;
    }
    return false;
}
function signIn() {
    if (checkValid(usernamePrompt, passwordPrompt) == true) {
        console.log(newsfeed);
    } else {
        alert("your password or username is wrong!");
    }
}
signIn();
