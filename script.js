document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scrolling
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(link.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });


const tooltip = document.getElementById('tooltip');

    document.querySelectorAll('[data-tooltip]').forEach(item => {
        item.addEventListener('mouseover', (e) => {
            tooltip.textContent = item.getAttribute('data-tooltip');
            tooltip.style.left = `${e.pageX + 10}px`;
            tooltip.style.top = `${e.pageY + 10}px`;
            tooltip.classList.add('show');
        });

        item.addEventListener('mousemove', (e) => {
            tooltip.style.left = `${e.pageX + 10}px`;
            tooltip.style.top = `${e.pageY + 10}px`;
        });

        item.addEventListener('mouseout', () => {
            tooltip.classList.remove('show');
        });
    });
});