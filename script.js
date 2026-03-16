// 导航栏滚动效果
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
        navbar.style.padding = '0.5rem 0';
    } else {
        navbar.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
        navbar.style.padding = '1rem 0';
    }
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// 表单验证
function validateForm(form) {
    const inputs = form.querySelectorAll('input');
    let isValid = true;

    inputs.forEach(input => {
        if (input.required) {
            if (!input.value.trim()) {
                isValid = false;
                input.style.borderColor = 'red';
            } else {
                input.style.borderColor = '#ddd';
            }
        }

        // 邮箱验证
        if (input.type === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(input.value)) {
                isValid = false;
                input.style.borderColor = 'red';
            } else {
                input.style.borderColor = '#ddd';
            }
        }

        // 密码验证
        if (input.name === 'password') {
            if (input.value.length < 6) {
                isValid = false;
                input.style.borderColor = 'red';
            } else {
                input.style.borderColor = '#ddd';
            }
        }

        // 确认密码验证
        if (input.name === 'confirmPassword') {
            const passwordInput = form.querySelector('input[name="password"]');
            if (input.value !== passwordInput.value) {
                isValid = false;
                input.style.borderColor = 'red';
            } else {
                input.style.borderColor = '#ddd';
            }
        }
    });

    return isValid;
}

// 登录表单验证
const loginForm = document.querySelector('#loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        if (validateForm(this)) {
            alert('登录成功！');
            window.location.href = 'index.html';
        }
    });
}

// 注册表单验证
const registerForm = document.querySelector('#registerForm');
if (registerForm) {
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        if (validateForm(this)) {
            alert('注册成功！');
            window.location.href = 'login.html';
        }
    });
}

// 输入框焦点效果
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('focus', function() {
        this.style.borderColor = '#4CAF50';
    });

    input.addEventListener('blur', function() {
        if (!this.value.trim()) {
            this.style.borderColor = '#ddd';
        }
    });
});