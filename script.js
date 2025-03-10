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
    const tolerance = 8;
    
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
    "1": "Jamais de la vie. Nique la physique et la chimie.",
    "2": "C'est le talent de Cl<span class='accent'>é</span>ment <span class='accent'>ç</span>a :)",
    "3": "Malheureusement non :(",
    "4": "Effectivement, je siffle h24.",
    "5": 'Je pr<span class="accent">é</span>dis une campagne bda de folie.',
};
const radios = document.querySelectorAll('input[name="gentilic-answer"]');
const gentilicMessage = document.getElementById("gentilic-message");
const gentilicHiddenBoris = document.getElementById("gentilic-hidden-boris");


radios.forEach(radio => {
    radio.addEventListener("change", function() {
        if (this.checked) {
            if (this.value === "4") {
                gentilicHiddenBoris.style.visibility = "visible";
            }
            gentilicMessage.innerHTML = gentilicMessages[this.value];
            gentilicMessage.style.visibility = "visible";
        }
    }); 
});



/* Rêve */

const dreamHiddenBoris = document.getElementById("dream-hidden-boris");
const correctOrder = ["c'est", "un", "film", "avec", "des", "castors", "zombies"];
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


/* Musique */
const audioTrigger = document.getElementById('funk');
const audio = document.getElementById('audio');
const musicMessage = document.getElementById('music-message');
const musicHiddenBoris = document.getElementById('music-hidden-boris');

audioTrigger.addEventListener('click', function() {
    if (audioTrigger.classList.contains('selected')) {
        audioTrigger.classList.remove('selected');
        audio.pause();
        audio.currentTime = 0;
    } else {
        audioTrigger.classList.add('selected');
        audio.play();
    }
});

audio.addEventListener('ended', function() {
    audioTrigger.classList.remove('selected');
    musicMessage.style.visibility = 'visible';
    musicHiddenBoris.style.visibility = 'visible';
});




/* Mot de passe */
const hint1Button = document.getElementById("hint-1-button");
const hint2Button = document.getElementById("hint-2-button");
const hint3Button = document.getElementById("hint-3-button");

hint1Button.addEventListener("click", function() {
    hint1Button.style.display = "none";
    const hint1 = document.getElementById("hint-1");
    const hint1Text = document.createElement("p") ;
    hint1Text.innerHTML = "C'est un plat faussement <span class='accent'>é</span>quilibr<span class='accent'>é</span>";
    hint1.appendChild(hint1Text);
    hint2Button.style.visibility = "visible";
})

hint2Button.addEventListener("click", function() {
    hint2Button.style.display = "none";
    const hint2 = document.getElementById("hint-2");
    const hint2Text = document.createElement("p") ;
    hint2Text.innerHTML = "Ville d'origine : Hambourg";
    hint2.appendChild(hint2Text);
    hint2.style.visibility = "visible";
    hint3Button.style.visibility = "visible";
})

hint3Button.addEventListener("click", function() {
    hint3Button.style.display = "none";
    const hint3 = document.getElementById("hint-3");
    const hint3Text = document.createElement("p") ;
    hint3Text.innerHTML = "Que c'est bon putain";
    hint3.appendChild(hint3Text);
    hint3.style.visibility = "visible";
})

const wrongAnswer = ["C'est pas <span class='accent'>ç</span>a", 
    "C'est pas <span class='accent'>ç</span>a non plus", 
    "Non plus", 
    "Toujours pas", 
    "Encore moins", 
    "Non", 
    "No", 
    "Nope", 
    "Nein", 
    "Courage, tu peux y arriver", 
    "Nan", 
    "C'est un burger !"];

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
        passwordMessage.innerHTML = wrongAnswer[count%wrongAnswer.length];
        count++;
        passwordMessage.style.visibility = "visible";
    }
}