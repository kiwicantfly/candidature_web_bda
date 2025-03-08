const red = '#ff6b51';

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
                gentilicMessage.style.color = red;
            } else {
                gentilicMessage.style.color = 'black';
                gentilicHiddenBoris.style.visibility = "visible";
            }
            gentilicMessage.textContent = gentilicMessages[this.value];
            gentilicMessage.style.visibility = "visible";
        }
    }); 
});



/* Rêve */

const dreamHiddenBoris = document.getElementById("dream-hidden-boris");
const correctOrder = ["je", "suis", "une", "moule", "avec", "la", "tête", "léniniste"];
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


/* Funk */
let currentAudio = null;
let currentSelected = null;

document.querySelectorAll('.funk-image-container').forEach(container => {
    container.addEventListener('click', function() {
        if (currentSelected === this) {
            currentSelected.classList.remove('selected');
            currentAudio.pause();
            currentAudio.currentTime = 0;
            currentSelected = null;
            currentAudio = null;
        } else {
            if (currentSelected) {
                currentSelected.classList.remove('selected');
                currentAudio.pause();
                currentAudio.currentTime = 0;
            }
            this.classList.add('selected');
            currentAudio = new Audio(this.getAttribute('data-audio'));
            currentAudio.play();
            currentSelected = this;
        }
    });
});




/* Mot de passe */
const hint1Button = document.getElementById("hint-1-button");
const hint2Button = document.getElementById("hint-2-button");
const hint3Button = document.getElementById("hint-3-button");

hint1Button.addEventListener("click", function() {
    hint1Button.style.display = "none";
    const hint1 = document.getElementById("hint-1");
    const hint1Text = document.createElement("p") ;
    hint1Text.textContent = "C'est un plat faussement équilibré";
    hint1.appendChild(hint1Text);
    hint2Button.style.visibility = "visible";
})

hint2Button.addEventListener("click", function() {
    hint2Button.style.display = "none";
    const hint2 = document.getElementById("hint-2");
    const hint2Text = document.createElement("p") ;
    hint2Text.textContent = "Ça vient de Hambourg";
    hint2.appendChild(hint2Text);
    hint2.style.visibility = "visible";
    hint3Button.style.visibility = "visible";
})

hint3Button.addEventListener("click", function() {
    hint3Button.style.display = "none";
    const hint3 = document.getElementById("hint-3");
    const hint3Text = document.createElement("p") ;
    hint3Text.textContent = "Que c'est bon putain";
    hint3.appendChild(hint3Text);
    hint3.style.visibility = "visible";
})

const wrongAnswer = ["C'est pas ça", 
    "C'est pas ça non plus", 
    "Non plus", 
    "Toujours pas", 
    "Encore moins", 
    "Non", 
    "No", 
    "Nope", 
    "Nein", 
    "Courage, tu peux le faire", 
    "Nan", 
    "C'était 'burger'"];

let count = 0;

function checkPassword() {
    const correctWord = "burger";
    const userWord = document.getElementById("password-input").value.trim().toLowerCase();
    const passwordMessage = document.getElementById("password-message");
    const passwordHiddenBoris = document.getElementById("password-hidden-boris");
    const padlockClosed = document.getElementById("padlock-closed");

    if (userWord === correctWord || userWord === "hamburger") {
        passwordMessage.textContent = "Formidable ! Ya pas d'heure pour un ptit burger.";
        passwordMessage.style.visibility = "visible";
        
        passwordHiddenBoris.style.visibility = "visible";
        padlockClosed.style.display ="none";
    } else {
        passwordMessage.textContent = wrongAnswer[count%wrongAnswer.length];
        count++;
        passwordMessage.style.visibility = "visible";
    }
}