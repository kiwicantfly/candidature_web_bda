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
    "1": "C'est le nom des habitants d'une ville.",
    "2": "4 ? Plutôt 40 000.",
    "3": "Ça aurait pu, mais c'est pas ça.",
    "4": "Pas mal, mais c'est autre chose.",
    "5": "Et oui c'est bien ça !",
    "6": "Ça c'est si on cumule les cheveux roux."
};

const radios = document.querySelectorAll('input[name="reponse-ville"]');
const answer = document.getElementById("answer");
const gentileHiddenBoris = document.getElementById("gentile-hidden-boris");


radios.forEach(radio => {
    radio.addEventListener("change", function() {
        if (this.checked) {
            if (this.value != "5") {
                gentileHiddenBoris.style.visibility = "hidden";
                answer.style.color = '#fcba8e';
            } else {
                answer.style.color = 'black';
                gentileHiddenBoris.style.visibility = "visible";
            }
            answer.textContent = messages[this.value];
            answer.style.visibility = "visible";
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