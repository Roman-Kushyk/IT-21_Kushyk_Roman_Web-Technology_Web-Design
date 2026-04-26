document.addEventListener('DOMContentLoaded', () => {
   
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        themeToggleBtn.textContent = 'Денний режим';
    }

    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        
        if (body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
            themeToggleBtn.textContent = 'Денний режим';
        } else {
            localStorage.setItem('theme', 'light');
            themeToggleBtn.textContent = 'Нічний режим';
        }
    });

  
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            alert('Будь ласка, заповніть усі поля!');
            return; 
        }

        alert(`Дякую, ${name}! Ваше повідомлення успішно надіслано.\nЯ відповім вам на ${email}.`);

        console.log('--- Нове повідомлення з форми ---');
        console.log('Ім\'я:', name);
        console.log('Email:', email);
        console.log('Повідомлення:', message);

        form.reset();
    });
});