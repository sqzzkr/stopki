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

function clearForm() {
    document.getElementById('form').reset();
    output.innerHTML = "";
    document.getElementById("footer_name").innerHTML = 'Jan Kowalski';
    document.getElementById("footer_jobtitle").innerHTML = 'Pracownik';
    document.getElementById("footer_phonenumber").innerHTML = '123456789';
    document.getElementById("footer_email").innerHTML = 'email@wszystkodokawy.pl';
}

function copyInnerHTMLToClipboard(elementId) {
    // Create an auxiliary hidden input
    var aux = document.createElement("input");
    // Get the text from the element passed into the input
    aux.setAttribute("value", (document.getElementById(elementId).innerHTML).trim());
    // Append the aux input to the body
    document.body.appendChild(aux);
    // Highlight the content
    aux.select();
    // Execute the copy command
    document.execCommand("copy");
    // Remove the input from the body
    document.body.removeChild(aux);}

function copyToClipboard() {
    window.getSelection().selectAllChildren(document.getElementById('footer'));
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
}
