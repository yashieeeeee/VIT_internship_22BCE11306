document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registrationForm");
    const userTableBody = document.getElementById("userTableBody");

    // Function to save user data to localStorage
    function saveUser(event) {
        event.preventDefault(); // Prevent form submission

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let contact = document.getElementById("contact").value.trim();
        let address = document.getElementById("address").value.trim();

        if (!name || !email || !contact || !address) {
            alert("All fields are required!");
            return;
        }

        let users = JSON.parse(localStorage.getItem("users")) || [];
        users.push({ name, email, contact, address });

        localStorage.setItem("users", JSON.stringify(users));

        alert("User Registered Successfully!");
        registrationForm.reset();
    }

    // Function to load users in table
    function loadUsers() {
        let users = JSON.parse(localStorage.getItem("users")) || [];

        userTableBody.innerHTML = ""; // Clear previous data

        users.forEach((user, index) => {
            let row = `<tr>
                        <td>${user.name}</td>
                        <td>${user.email}</td>
                        <td>${user.contact}</td>
                        <td>${user.address}</td>
                    </tr>`;
            userTableBody.innerHTML += row;
        });
    }

    // Event listener for form submission
    if (registrationForm) {
        registrationForm.addEventListener("submit", saveUser);
    }

    // Load users when on view.html page
    if (userTableBody) {
        loadUsers();
    }
});
