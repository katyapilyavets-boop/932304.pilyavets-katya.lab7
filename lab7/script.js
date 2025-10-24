
let selectedElementId = null;
let globalIdCounter = 0;

function removeElement(elementId) {
    const el = document.getElementById(elementId);
    if (!el) return;
    if (selectedElementId === elementId) selectedElementId = null;
    el.remove();
}

function createRect(inputId) {
    const input = document.getElementById(inputId);
    const amount = parseInt(input.value, 10);
    if (isNaN(amount) || amount <= 0) return;

    for (let i = 0; i < amount; i++) {
        const rect = document.createElement('div');
        const size = Math.random() * 200 + 50;

        rect.style.backgroundColor = 'red';
        rect.style.opacity = '0.9';
        rect.style.border = '3px solid black';
        rect.style.width = size + 'px';
        rect.style.height = size + 'px';
        rect.style.position = 'absolute';
        rect.style.left = Math.random() * (window.innerWidth - size) + 'px';
        rect.style.top = Math.random() * (window.innerHeight - size) + 'px';

        const id = `rect-${++globalIdCounter}`;
        rect.id = id;

        rect.onclick = function() {
            clearSelection();
            this.style.backgroundColor = 'yellow';
            this.style.borderColor = 'yellow';
            selectedElementId = id;
        };
        rect.ondblclick = () => removeElement(id);

        document.getElementById('figures').appendChild(rect);
    }
}

function createTriangle(inputId) {
    const input = document.getElementById(inputId);
    const amount = parseInt(input.value, 10);
    if (isNaN(amount) || amount <= 0) return;

    for (let i = 0; i < amount; i++) {
        const triangle = document.createElement('div');
        const size = Math.random() * 150 + 30;

        triangle.style.opacity = '0.9';
        triangle.style.width = '0';
        triangle.style.height = '0';
        triangle.style.borderLeft = `${size}px solid transparent`;
        triangle.style.borderRight = `${size}px solid transparent`;
        triangle.style.borderBottom = `${size}px solid blue`;
        triangle.style.position = 'absolute';
        triangle.style.left = Math.random() * (window.innerWidth - size * 2) + 'px';
        triangle.style.top = Math.random() * (window.innerHeight - size) + 'px';

        const id = `triangle-${++globalIdCounter}`;
        triangle.id = id;

        triangle.onclick = function() {
            clearSelection();
            this.style.borderBottom = `${size}px solid yellow`;
            selectedElementId = id;
        };
        triangle.ondblclick = () => removeElement(id);

        document.getElementById('figures').appendChild(triangle);
    }
}

function createCircle(inputId) {
    const input = document.getElementById(inputId);
    const amount = parseInt(input.value, 10);
    if (isNaN(amount) || amount <= 0) return;

    for (let i = 0; i < amount; i++) {
        const circle = document.createElement('div');
        const size = Math.random() * 200 + 50;

        circle.style.backgroundColor = 'green';
        circle.style.opacity = '0.9';
        circle.style.border = '3px solid black';
        circle.style.width = size + 'px';
        circle.style.height = size + 'px';
        circle.style.borderRadius = '50%';
        circle.style.position = 'absolute';
        circle.style.left = Math.random() * (window.innerWidth - size) + 'px';
        circle.style.top = Math.random() * (window.innerHeight - size) + 'px';

        const id = `circle-${++globalIdCounter}`;
        circle.id = id;

        circle.onclick = function() {
            clearSelection();
            this.style.backgroundColor = 'yellow';
            this.style.borderColor = 'yellow';
            selectedElementId = id;
        };
        circle.ondblclick = () => removeElement(id);

        document.getElementById('figures').appendChild(circle);
    }
}

function clearSelection() {
    if (!selectedElementId) return;
    const el = document.getElementById(selectedElementId);
    if (!el) return;

    // Сброс стилей в зависимости от типа
    if (el.id.startsWith('rect') || el.id.startsWith('circle')) {
        el.style.backgroundColor = el.id.startsWith('rect') ? 'red' : 'green';
        el.style.borderColor = 'black';
    } else if (el.id.startsWith('triangle')) {
        // Извлекаем size из стиля borderLeft (например: "100px solid transparent")
        const borderLeft = el.style.borderLeft;
        const sizeMatch = borderLeft.match(/(\d+\.?\d*)px/);
        const size = sizeMatch ? parseFloat(sizeMatch[1]) : 50;
        el.style.borderBottom = `${size}px solid blue`;
    }
}
