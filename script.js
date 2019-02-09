output = document.getElementById("output");

function generate() {
    name = document.getElementById("name").value;
    jobtitle = document.getElementById("jobtitle").value;
    phonenumber = document.getElementById("phonenumber").value;
    email = document.getElementById("email").value;
    if (name == "" || jobtitle == "" || phonenumber == "" || email == "") {
        output.style.color = "red";
        output.innerHTML = "<h6>Uzupełnij wszystkie dane.</h6>";
    } else {
    document.getElementById("footer_name").innerHTML = name;
    document.getElementById("footer_jobtitle").innerHTML = jobtitle;
    document.getElementById("footer_phonenumber").innerHTML = phonenumber;
    document.getElementById("footer_email").innerHTML = email;

        output.style.color = "green";
        output.innerHTML = "<h6>Gotowe!</h6>";
    }
}