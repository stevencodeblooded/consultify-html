document.addEventListener('DOMContentLoaded', function () {
    const texts = [
        "We are your next Product Development Partner",
        "We bring your ideas to life with expertise",
        "Innovative solutions for your business growth"
    ];
    let currentIndex = 0;
    let headerText = document.getElementById('heroTitle');
    let index = 0;

    function typeText() {
        if (index <= texts[currentIndex].length) {
            headerText.innerText = texts[currentIndex].slice(0, index);
            index++;
            setTimeout(typeText, 50);
        } else {
            setTimeout(() => {
                currentIndex = (currentIndex + 1) % texts.length;
                index = 0;
                typeText();
            }, 5000);
        }
    }

    typeText();
});
