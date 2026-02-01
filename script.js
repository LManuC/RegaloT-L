const cards = document.querySelectorAll('.card');
const submitBtn = document.getElementById('submitBtn');

let selectedValue = null;

cards.forEach(card => {
    card.addEventListener('click', () => {

        // Volver todas a estado normal
        cards.forEach(c => c.classList.remove('flipped'));

        // Girar solo la seleccionada
        card.classList.add('flipped');

        selectedValue = card.dataset.value;
        submitBtn.disabled = false;
    });
});

submitBtn.addEventListener('click', () => {
    if (!selectedValue) return;

    const subject = encodeURIComponent("Elección de heladera 💍");
    const body = encodeURIComponent(
        `Hola!\n\nLa heladera elegida es:\n\n${selectedValue}\n\n¡Gracias!`
    );

    window.location.href = `mailto:lmanuelcarra@gmail.com?subject=${subject}&body=${body}`;
});
