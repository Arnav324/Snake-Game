const email_1 = "singhbrijeshvns@gmail.com";
const password_1 = "Arnav@123";

function login()
{
    var email = document.getElementById("e-mail").value;
    var password = document.getElementById("password").value;

    console.log(email_1);
    console.log(email);

    if (email==email_1 && password==password_1)
    {
        window.location = "webpage.html"
    }
    else
    {
        document.getElementById("p1").style.display = "block";
    }

}

function locate()
{
    window.location = "reference.html"
}