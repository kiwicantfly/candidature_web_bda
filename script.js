/* Châteauroux */

const mapContainer = document.getElementById("map-container");
const targetMap = document.getElementById("target-map")
const chateaurouxSuccessMessage = document.getElementById("chateauroux-success-message");
const chateaurouxHiddenBoris = document.getElementById("chateauroux-hidden-boris");

mapContainer.addEventListener("click", function(event) {
    const rect = mapContainer.getBoundingClientRect();
    const clickX = (event.clientX - rect.left) / rect.width * 100;
    const clickY = (event.clientY - rect.top) / rect.height * 100;
    
    // En % 
    const targetX = 47; 
    const targetY = 51; 
    const tolerance = 10;
    
    if (Math.abs(clickX - targetX) <= tolerance && Math.abs(clickY - targetY) <= tolerance) {
        targetMap.style.display = "block";
        chateaurouxSuccessMessage.style.visibility = "visible";
        chateaurouxHiddenBoris.style.visibility = "visible";

    } /*else {
        targetMap.style.display = "none";
        chateaurouxSuccessMessage.style.visibility = "hidden";
        chateaurouxHiddenBoris.style.visibility = "hidden";

    }*/
});



/* Gentilé */

const gentilicMessages = {
    "1": "C'est le nom des habitants d'une ville.",
    "2": "4 ? Plutôt 40 000.",
    "3": "Ça aurait pu, mais c'est pas ça.",
    "4": "Pas mal, mais c'est autre chose.",
    "5": "Et oui c'est ça ! Tu as mérité ton Boris :",
    "6": "Ça c'est si on habite à Châteauroux et qu'on a les cheveux roux."
};
const radios = document.querySelectorAll('input[name="gentilic-answer"]');
const gentilicMessage = document.getElementById("gentilic-message");
const gentilicHiddenBoris = document.getElementById("gentilic-hidden-boris");


radios.forEach(radio => {
    radio.addEventListener("change", function() {
        if (this.checked) {
            if (this.value != "5") {
                /*gentilicHiddenBoris.style.visibility = "hidden";*/
                gentilicMessage.style.color = '#fcba8e';
            } else {
                gentilicMessage.style.color = 'black';
                gentilicHiddenBoris.style.visibility = "visible";
            }
            gentilicMessage.textContent = gentilicMessages[this.value];
            gentilicMessage.style.visibility = "visible";
        }
    }); 
});



/* Sentence */

const dreamHiddenBoris = document.getElementById("dream-hidden-boris");
const correctOrder = ["Je", "suis", "une", "moule", "avec", "la", "tête", "léniniste", "et", "un", "petit", "nez"];
const container = document.getElementById("sortable");
const dreamSuccessMessage = document.getElementById("dream-success-message");

let shuffledWords = [...correctOrder].sort(() => Math.random() - 0.5);

shuffledWords.forEach(word => {
    const div = document.createElement("div");
    div.classList.add("word");
    div.textContent = word;
    container.appendChild(div);
});

new Sortable(container, {
    animation: 150,
    ghostClass: 'ghost',
    onEnd: () => {
        let currentOrder = Array.from(container.children).map(el => el.textContent);
        if (JSON.stringify(currentOrder) === JSON.stringify(correctOrder)) {
            dreamSuccessMessage.style.visibility = "visible";
            dreamHiddenBoris.style.visibility = "visible";
        } /*else {
            dreamSuccessMessage.style.visibility = "hidden";
            dreamHiddenBoris.style.visibility = "hidden";

        }*/
    }
});

