function generatePassword() {
    const length = 12; // Change this to set the password length
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    document.getElementById("password").value = password;
}

function copyPassword() {
    const passwordInput = document.getElementById("password");
    passwordInput.select();
    passwordInput.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand("copy");

    const copyBtn = document.getElementById("copyBtn");
    copyBtn.innerText = "Copied";
    setTimeout(() => {
        copyBtn.innerText = "Copy";
    }, 1500);
}
