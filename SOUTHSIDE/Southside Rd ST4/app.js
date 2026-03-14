const questions = [
        { question: "From Jobstown to Rathgar, what will be on your route?", options: ["Tallaght", "Templeogue", "Terenure", "Rathmines"], correct: ["Tallaght", "Templeogue", "Terenure"] },
    { question: "From Rathgar to Jobstown, which areas are on your route?", options: ["Terenure", "Templeogue", "Tallaght", "Knocklyon"], correct: ["Terenure", "Templeogue", "Tallaght"] },
    { question: "From Walkinstown to the city, which areas are on your route?", options: ["Crumlin", "Dolphin’s Barn", "Terenure", "Harold’s Cross"], correct: ["Crumlin", "Dolphin’s Barn", "Terenure", "Harold’s Cross"] },
    { question: "Which road runs from Crumlin to Dolphin’s Barn?", options: ["Crumlin Road", "Rathmines Road", "Harold’s Cross Road", "Cork Street"], correct: ["Crumlin Road"] },
    { question: "Where is Our Lady’s Hospital for Sick Children?", options: ["Cooley Road", "Crumlin Road", "Parnell Road", "Mourne Road"], correct: ["Cooley Road"] },
    { question: "Where is Dolphin’s Barn Fire Station?", options: ["Parnell Road, Crumlin", "Crumlin Road", "Dolphin’s Barn Street", "Mourne Road"], correct: ["Parnell Road, Crumlin"] },
    { question: "Where is Guinness Rugby Club?", options: ["Crumlin Road", "Mourne Road", "Parnell Road", "Cork Street"], correct: ["Crumlin Road"] },
    { question: "Which road is adjoining to Kildare Road?", options: ["Windmill Road", "Crumlin Road", "Mourne Road", "Cork Street"], correct: ["Windmill Road"] },
    { question: "Which road is not along the Grand Canal?", options: ["Kildare Road", "Rathmines Road", "Portobello Road", "Wilton Terrace"], correct: ["Kildare Road"] },
    { question: "Where is Lansdowne Pitch and Putt?", options: ["Slievebloom Road, Drimnagh", "Crumlin Road", "Longmile Road", "Mourne Road"], correct: ["Slievebloom Road, Drimnagh"] },
    { question: "Where is Drimnagh Castle?", options: ["Longmile Road, Drimnagh", "Kylemore Road", "Crumlin Road", "Naas Road"], correct: ["Longmile Road, Drimnagh"] },
    { question: "Where is Drimnagh Castle School?", options: ["Longmile Road", "Kylemore Road", "Crumlin Road", "Naas Road"], correct: ["Longmile Road"] },
    { question: "Which roads are adjoining to Longmile Road?", options: ["Drimnagh Road", "Naas Road", "Walkinstown Avenue", "Kylemore Road"], correct: ["Drimnagh Road", "Naas Road", "Walkinstown Avenue"] },
    { question: "Longmile Road becomes which road?", options: ["Drimnagh Road", "Crumlin Road", "Kylemore Road", "Naas Road"], correct: ["Drimnagh Road"] },
    { question: "Which road is not directly adjoining to Longmile Road?", options: ["Kylemore Road", "Naas Road", "Walkinstown Avenue", "Drimnagh Road"], correct: ["Kylemore Road"] },
    { question: "Which road is adjoining to Cooley Road?", options: ["Mourne Road", "Crumlin Road", "Parnell Road", "Windmill Road"], correct: ["Mourne Road"] },
    { question: "In which area is Monastery Road?", options: ["Clondalkin", "Tallaght", "Ballyfermot", "Walkinstown"], correct: ["Clondalkin"] },
    { question: "In which area is New Nangor Road?", options: ["Clondalkin", "Tallaght", "Ballyfermot", "Palmerstown"], correct: ["Clondalkin"] },
    { question: "Where is Moran’s Red Cow Hotel?", options: ["Naas Road", "Kylemore Road", "N7", "Belgard Road"], correct: ["Naas Road"] },
    { question: "Where is Sheldon Park Hotel?", options: ["Kylemore Road", "Naas Road", "Ballyfermot Road", "Longmile Road"], correct: ["Kylemore Road"] },
    { question: "Which roads are adjoining to Kylemore Road?", options: ["Naas Road", "Ballyfermot Road", "Longmile Road", "Drimnagh Road"], correct: ["Naas Road", "Ballyfermot Road"] },
    { question: "Where is Cherry Orchard Hospital?", options: ["Ballyfermot Road", "Kylemore Road", "Naas Road", "Longmile Road"], correct: ["Ballyfermot Road"] },
    { question: "Where is Sundrive Garda Station?", options: ["Crumlin Road, Crumlin", "Parnell Road", "Mourne Road", "Windmill Road"], correct: ["Crumlin Road, Crumlin"] },
    { question: "Where is Ballyfermot Garda Station?", options: ["Rossmore Avenue", "Ballyfermot Road", "Kylemore Road", "Sarsfield Road"], correct: ["Rossmore Avenue"] },
    { question: "What are the Naas Road Luas stops?", options: ["Bluebell", "Kylemore", "Red Cow", "Goldenbridge"], correct: ["Bluebell", "Kylemore", "Red Cow"] },
    { question: "Which Luas stop is not a Naas Road Luas stop?", options: ["Goldenbridge", "Bluebell", "Kylemore", "Red Cow"], correct: ["Goldenbridge"] },
    { question: "Davitt Road is situated between which two Luas stops?", options: ["Blackhorse", "Suir Road", "Kylemore", "Bluebell"], correct: ["Blackhorse", "Suir Road"] },
    { question: "Where is Clondalkin / Liffey Valley Shopping Centre?", options: ["Fonthill Road", "Nangor Road", "Naas Road", "Kylemore Road"], correct: ["Fonthill Road"] },
    { question: "Where is the Hermitage Private Clinic?", options: ["Old Lucan Road", "Lucan Road", "N4", "Fonthill Road"], correct: ["Old Lucan Road"] },
    { question: "Where is Tenpin Bowling Arena?", options: ["Kennelsfort Upper, Palmerstown", "Lucan Road", "Old Lucan Road", "Fonthill Road"], correct: ["Kennelsfort Upper, Palmerstown"] },
    { question: "When you exit Red Cow Luas stop, what is the main road?", options: ["Naas Road", "N7", "Kylemore Road", "Belgard Road"], correct: ["Naas Road"] },
    { question: "What is the nearest petrol station to Ronanstown Garda Station?", options: ["Clondalkin, Fonthill", "Naas Road", "Kylemore Road", "Ballyfermot"], correct: ["Clondalkin, Fonthill"] },
    { question: "Which road is adjoining to Mill Lane?", options: ["Lucan Road", "Old Lucan Road", "N4", "Fonthill Road"], correct: ["Lucan Road"] },
    { question: "Which road runs from the city to Lucan?", options: ["N4", "N7", "M50", "R148"], correct: ["N4"] },
    { question: "Which road runs from the city to Galway?", options: ["N4", "N7", "M6", "N81"], correct: ["N4"] },
    { question: "Which road runs from the city to Palmerstown?", options: ["N4", "R148", "N7", "M50"], correct: ["N4"] },
    { question: "Which road runs from the city to Rathcoole?", options: ["N7", "N81", "M50", "R114"], correct: ["N7"] },
    { question: "Which road runs from the city to Saggart?", options: ["N7", "N81", "R114", "M50"], correct: ["N7"] },
    { question: "Which road runs from Lucan to the city?", options: ["R148", "N4", "Old Lucan Road", "Fonthill Road"], correct: ["R148"] }
];

// ============================
// QUIZ STATE
// ============================

let currentIndex = 0;
let score = 0;

const userAnswers = {};
const markedQuestions = {};
const shuffledOptions = {};

// ============================
// DOM ELEMENTS
// ============================

const questionEl = document.getElementById("question");
const formEl = document.getElementById("answers-form");
const feedbackEl = document.getElementById("feedback");
const progressEl = document.getElementById("progress");

const prevBtn = document.getElementById("prev-btn");
const markBtn = document.getElementById("mark-btn");
const nextBtn = document.getElementById("next-btn");

// ============================
// PROPER SHUFFLE (Fisher-Yates)
// ============================

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Shuffle questions when quiz loads
shuffleArray(questions);

// ============================
// LOAD QUESTION
// ============================

function loadQuestion() {

    const q = questions[currentIndex];

    progressEl.textContent = `Question ${currentIndex + 1} of ${questions.length}`;
    questionEl.textContent = q.question;

    formEl.innerHTML = "";
    feedbackEl.textContent = "";
    feedbackEl.className = "";

    // Shuffle options once per question
    if (!shuffledOptions[currentIndex]) {
        shuffledOptions[currentIndex] = [...q.options];
        shuffleArray(shuffledOptions[currentIndex]);
    }

    shuffledOptions[currentIndex].forEach(option => {

        const label = document.createElement("label");
        label.classList.add("option-label");

        const input = document.createElement("input");

        // Radio if single answer, Checkbox if multiple
        input.type = q.correct.length > 1 ? "checkbox" : "radio";
        input.name = "answer";
        input.value = option;

        // Restore previous selection
        if (userAnswers[currentIndex]?.includes(option)) {
            input.checked = true;
        }

        // If already marked → lock and show colors
        if (markedQuestions[currentIndex] !== undefined) {
            input.disabled = true;

            if (q.correct.includes(option)) {
                label.classList.add("correct-option");
            }

            if (
                userAnswers[currentIndex]?.includes(option) &&
                !q.correct.includes(option)
            ) {
                label.classList.add("wrong-option");
            }
        }

        label.appendChild(input);
        label.appendChild(document.createTextNode(option));
        formEl.appendChild(label);
    });

    // Show feedback if already marked
    if (markedQuestions[currentIndex] !== undefined) {

        const isCorrect = markedQuestions[currentIndex];

        if (isCorrect) {
            feedbackEl.textContent = "✅ Correct!";
            feedbackEl.className = "correct";
        } else {
            feedbackEl.innerHTML =
                "❌ Incorrect! <br> Correct Answer: <strong>" +
                q.correct.join(", ") +
                "</strong>";
            feedbackEl.className = "wrong";
        }
    }

    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = markedQuestions[currentIndex] === undefined;
}

// ============================
// MARK QUESTION
// ============================

markBtn.onclick = () => {

    if (markedQuestions[currentIndex] !== undefined) return;

    const selected = [
        ...document.querySelectorAll("input[name='answer']:checked")
    ].map(i => i.value);

    if (selected.length === 0) {
        alert("Please select at least one answer.");
        return;
    }

    userAnswers[currentIndex] = selected;

    const correct = questions[currentIndex].correct;

    const isCorrect =
        selected.length === correct.length &&
        selected.every(a => correct.includes(a));

    if (isCorrect) score++;

    markedQuestions[currentIndex] = isCorrect;

    loadQuestion();
};

// ============================
// NEXT BUTTON
// ============================

nextBtn.onclick = () => {

    if (currentIndex < questions.length - 1) {
        currentIndex++;
        loadQuestion();
    } else {

        let wrongHtml = "";

        questions.forEach((q, index) => {
            if (markedQuestions[index] === false) {
                wrongHtml += `
                    <div class="review-box">
                        <strong>Question:</strong> ${q.question}<br>
                        <strong>Your Answer:</strong> ${userAnswers[index].join(", ")}<br>
                        <strong>Correct Answer:</strong> ${q.correct.join(", ")}
                    </div>
                `;
            }
        });

        document.getElementById("quiz-container").innerHTML = `
            <h2>Quiz Finished</h2>
            <p><strong>Your score: ${score} / ${questions.length}</strong></p>
            ${wrongHtml || "<p>🎉 You got everything correct!</p>"}
            <button onclick="location.reload()">Restart Quiz</button>
        `;
    }
};

// ============================
// PREVIOUS BUTTON
// ============================

prevBtn.onclick = () => {

    if (currentIndex > 0) {
        currentIndex--;
        loadQuestion();
    }
};

// ============================
// START QUIZ
// ============================

loadQuestion();