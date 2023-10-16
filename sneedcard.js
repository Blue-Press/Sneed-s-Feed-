function getFormInfo() {
    const firstName = document.getElementById("fname").value;
    const lastName = document.getElementById("lname").value;
    console.log(firstName, lastName);
    let registerName = document.getElementById("registerName");
    registerName.innerHTML = firstName + ' ' + lastName;
}

document.getElementById("sneedForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    getFormInfo();
});
