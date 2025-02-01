// Function to generate a random password
function generatePassword() {
    const length = document.getElementById("length").value;
    const useUpper = document.getElementById("useUpper").checked;
    const useLower = document.getElementById("useLower").checked;
    const useNumbers = document.getElementById("useNumbers").checked;
    const useSymbols = document.getElementById("useSymbols").checked;

    let characterSet = '';
    if (useUpper) characterSet += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (useLower) characterSet += 'abcdefghijklmnopqrstuvwxyz';
    if (useNumbers) characterSet += '0123456789';
    if (useSymbols) characterSet += '!@#$%^&*()_+[]{}|;:,.<>?';

    if (!characterSet) {
        alert('Please select at least one option.');
        return;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characterSet.length);
        password += characterSet[randomIndex];
    }

    document.getElementById("password").textContent = password;
}

// Update password length value
document.getElementById("length").addEventListener("input", function() {
    document.getElementById("lengthValue").textContent = this.value;
});
// Function to copy the password to clipboard
function copyToClipboard() {
    const passwordText = document.getElementById("password").textContent;
    if (passwordText === 'Your Password Will Appear Here') {
        alert("Please generate a password first.");
        return;
    }

    // Create a temporary text area to copy the password
    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = passwordText;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextArea);

    alert("Password copied to clipboard!");
}

