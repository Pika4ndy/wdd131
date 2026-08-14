document.addEventListener("eventsCardLoaded", () => {

    // Slider Functions
    let currentIndex = 0;
    const cards = document.querySelectorAll('.event-card');
    const totalCards = cards.length;

    const prevBtn = document.getElementById("event-prev-btn");
    const nextBtn = document.getElementById("event-next-btn");

    // Exit early if no cards or buttons found
    if (totalCards === 0) {
        console.warn('No event cards found. Events slider will not initialize.');
        return;
    }

    if (!prevBtn || !nextBtn) {
        console.warn('Event slider buttons not found. Events slider will not initialize.');
        return;
    }

    function showCard(index) {
        // Remove active class from all cards
        cards.forEach(card => card.classList.remove('active'));

        // Wrap around index logic
        if (index >= totalCards) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = totalCards - 1;
        } else {
            currentIndex = index;
        }

        // Add active class to current card
        if (cards[currentIndex]) {
            cards[currentIndex].classList.add('active');
        }
    }

    // Function triggered by Next/Prev buttons
    function moveSlide(step) {
        showCard(currentIndex + step);
        resetAutoSlide();
    }

    let autoSlide = setInterval(() => {
        showCard(currentIndex + 1);
    }, 10000);

    function resetAutoSlide() {
        clearInterval(autoSlide);
        autoSlide = setInterval(() => {
            showCard(currentIndex + 1);
        }, 10000);
    }

    prevBtn.addEventListener("click", e => moveSlide(-1));
    nextBtn.addEventListener("click", e => moveSlide(1));

});