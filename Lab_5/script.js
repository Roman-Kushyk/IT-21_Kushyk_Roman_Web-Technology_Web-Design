document.addEventListener('DOMContentLoaded', () => {

    // 1. Зміна контенту через innerHTML 
    const changeTextBtn = document.getElementById('change-text-btn');
    const targetParagraph = document.getElementById('target-paragraph');

    changeTextBtn.addEventListener('click', () => {
        // Використовує innerHTML, щоб додати HTML-теги всередину тексту
        targetParagraph.innerHTML = 'Текст змінено за допомогою <strong>innerHTML</strong>. <em>Успіх!</em>';
    });

    // 2. Обробка події наведення (зміна стилів)
    const hoverElement = document.getElementById('hover-element');

    hoverElement.addEventListener('mouseenter', () => {
        hoverElement.classList.add('highlighted-style');
    });

    hoverElement.addEventListener('mouseleave', () => {
        hoverElement.classList.remove('highlighted-style');
    });

    // 3. Динамічне додавання та ВИДАЛЕННЯ елементів
    const addItemBtn = document.getElementById('add-item-btn');
    const elementsList = document.getElementById('elements-list');
    let taskCounter = 1;

    addItemBtn.addEventListener('click', () => {
        // Створює новий елемент списку <li>
        const li = document.createElement('li');
        li.classList.add('new-item');
        
        // Створює текстовий вузол
        const textSpan = document.createElement('span');
        textSpan.textContent = `Завдання №${taskCounter}`;
        
        // Створює кнопку для видалення цього елемента
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Видалити';
        deleteBtn.classList.add('delete-btn');
        
        // Додає обробник події для видалення конкретно цього <li>
        deleteBtn.addEventListener('click', () => {
            li.remove(); // Видаляє елемент з DOM
        });

        // Компонує елемент: додає текст і кнопку всередину <li>
        li.appendChild(textSpan);
        li.appendChild(deleteBtn);
        
        // Додає готовий <li> у список <ul> на сторінці
        elementsList.appendChild(li);
        
        taskCounter++;
    });

    // 4. Додаткове завдання
    const variantBtn = document.getElementById('variant-btn');
    
    const n = 5; 
    let clickCount = 0; // Лічильник кліків

    variantBtn.addEventListener('click', () => {
        clickCount++; // Збільшуємо лічильник при кожному кліку
        
        if (clickCount === n) {
            // Виводимо спливаюче вікно з іменем і варіантом
            alert(`Роман Кушик варіант номер ${n}!`);
            
            clickCount = 0; 
        }
    });

});