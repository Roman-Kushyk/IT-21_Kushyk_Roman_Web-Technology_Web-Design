document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            alert('Будь ласка, заповніть усі поля!');
            return; // Зупиняємо виконання функції, якщо є порожні поля
        }

        alert(`Дякую, ${name}! Ваше повідомлення успішно оброблено.`);

        console.log('--- Нове повідомлення ---');
        console.log('Ім\'я:', name);
        console.log('Email:', email);
        console.log('Повідомлення:', message);

        form.reset();
    });
});