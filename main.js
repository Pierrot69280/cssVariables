// sélectionne l'élément color et l'élément div pour le fond coloré.
const base = document.getElementById('base');
const colorfulBackground = document.getElementById('colorful-background');

const body = document.body;  // sélectionne le corps de la page.

// Initialise la couleur de fond avec la valeur par défaut.
colorfulBackground.style.backgroundColor = base.value;

// faire les changements sur l'élément color.
base.addEventListener('input', () => {
    // obtiens la valeur de la couleur sélectionnée.
    const baseColor = base.value;

    // applique la couleur de fond à l'élément div pour le fond.
    colorfulBackground.style.backgroundColor = baseColor;

    // applique aussi la couleur de fond au corps de la page.
    body.style.backgroundColor = baseColor;
});


