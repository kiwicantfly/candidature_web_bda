const correctOrder = ["Je", "suis", "une", "huitre", "et", "j'aime", "la","route", "avec", "des", "beaux", "paysages"];
        let shuffledWords = [...correctOrder].sort(() => Math.random() - 0.5);
        
        const container = document.getElementById("sortable");
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
                    document.getElementById("message").style.display = "block";
                } else {
                    document.getElementById("message").style.display = "none";
                }
            }
        });


const messages = {
    "1": "Comment on appelle les gens d'une ville.",
    "2": "4 ? Plutôt 40 000.",
    "3": "Le vert représente la nature et l'harmonie !",
    "4": "Le jaune est la couleur du soleil et de la joie !",
    "5": "Et oui c'est bien ça ! Parce que why not ? ʕ•ᴥ•ʔ",
    "6": "Le jaune couleur du soleil et de la joie !"
};

const radios = document.querySelectorAll('input[name="reponse-ville"]');
const answer = document.getElementById("answer");

radios.forEach(radio => {
    radio.addEventListener("change", function() {
        if (this.checked) {
            if (this.value == "5") {
                answer.style.color = 'green';
            } else {
                answer.style.color = 'red';
            }
            answer.textContent = messages[this.value];
            answer.style.display = "block";
        }
    });
});








const image = document.getElementById("map-container");
const answerMap = document.getElementById("target-image")
const message = document.getElementById("success-message");
const chateaurouxHiddenBoris = document.getElementById("chateauroux-hidden-boris");



image.addEventListener("click", function(event) {
    const rect = image.getBoundingClientRect();
    const clickX = (event.clientX - rect.left) / rect.width * 100;
    const clickY = (event.clientY - rect.top) / rect.height * 100;
    
    const targetX = 47; // Coordonnée X relative (en %)
    const targetY = 51; // Coordonnée Y relative (en %)
    const tolerance = 3 // Tolérance de clic en %
    
    if (Math.abs(clickX - targetX) <= tolerance && Math.abs(clickY - targetY) <= tolerance) {
        message.style.visibility = "visible";
        answerMap.style.display = "block";
        chateaurouxHiddenBoris.style.visibility = "visible";

    } else {
        message.style.visibility = "hidden";
        answerMap.style.display = "none";
        chateaurouxHiddenBoris.style.visibility = "hidden";

    }
});