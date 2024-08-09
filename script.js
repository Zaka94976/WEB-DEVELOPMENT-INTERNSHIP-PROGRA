document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('password');
    const passwordToggle = document.querySelector('.password-toggle');

    passwordToggle.addEventListener('click', () => {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            passwordToggle.textContent = '🙈'; // Eye open icon
        } else {
            passwordInput.type = 'password';
            passwordToggle.textContent = '👁️'; // Eye closed icon
        }
    });
});
