const questions = [
{ question: "Where is Oscar Wilde Centre for Irish Writing?", options: ["Trinity College", "Merrion Square", "Kildare Street", "Nassau Street"], correct: ["Trinity College"] },
{ question: "Where is Samuel Beckett Theatre?", options: ["Trinity College", "Dame Street", "Pearse Street", "College Green"], correct: ["Trinity College"] },
{ question: "Where is Douglas Hyde Gallery?", options: ["Trinity College", "Nassau Street", "Merrion Square", "Dawson Street"], correct: ["Trinity College"] },
{ question: "Where is the Book of Kells?", options: ["Trinity College", "National Library", "Dublin Castle", "Christchurch Place"], correct: ["Trinity College"] },
{ question: "What will not be on your route from Trinity City Hotel to 3 Arena?", options: ["South Princess Street / Hawkins Street", "Pearse Street", "Seán O’Casey Bridge", "North Wall Quay"], correct: ["South Princess Street / Hawkins Street"] },
{ question: "Stephen Place is situated between which two streets?", options: ["Mount Street Lower and Mount Street Upper", "Baggot Street and Leeson Street", "Merrion Street and Kildare Street", "Dawson Street and Nassau Street"], correct: ["Mount Street Lower and Mount Street Upper"] },
{ question: "Which street runs one way between Stephen Green North to Nassau Street?", options: ["Dawson Street", "Kildare Street", "Suffolk Street", "Grafton Street"], correct: ["Dawson Street"] },
{ question: "DBS (Dublin Business School) is on two streets?", options: ["Aungier Street and South Great George Street", "Dame Street and Parliament Street", "Clarendon Street and Wicklow Street", "Kildare Street and Nassau Street"], correct: ["Aungier Street and South Great George Street"] },
{ question: "Which street not adjoining to Leeson Street Lower?", options: ["Waterloo Road and Leeson Place", "Merrion Square", "Baggot Street", "Mount Street"], correct: ["Waterloo Road and Leeson Place"] },
{ question: "Where is Molly Malone Statue?", options: ["Suffolk Street", "College Green", "Dame Street", "Grafton Street"], correct: ["Suffolk Street"] },
{ question: "Where is Pig’s Ear Restaurant?", options: ["Nassau Street", "Dawson Street", "Kildare Street", "Suffolk Street"], correct: ["Nassau Street"] },
{ question: "Where is Bailey Bar?", options: ["Duke Street", "Clarendon Street", "Exchequer Street", "Wicklow Street"], correct: ["Duke Street"] },
{ question: "Where is Venue Brasserie?", options: ["Anne Street", "Duke Street", "Wicklow Street", "South William Street"], correct: ["Anne Street"] },
{ question: "Where is Gaiety Theatre?", options: ["South King Street", "Dame Street", "Dawson Street", "Clarendon Street"], correct: ["South King Street"] },
{ question: "Where is Mansion House?", options: ["Dawson Street", "Kildare Street", "Merrion Street", "Nassau Street"], correct: ["Dawson Street"] },
{ question: "Where is Saint Ann Church?", options: ["Dawson Street", "South King Street", "Clarendon Street", "Duke Street"], correct: ["Dawson Street"] },
{ question: "Where is Fire Restaurant?", options: ["Dawson Street", "Anne Street", "Kildare Street", "Nassau Street"], correct: ["Dawson Street"] },
{ question: "Where is 37 Dawson?", options: ["Dawson Street", "South King Street", "Duke Street", "Clarendon Street"], correct: ["Dawson Street"] },
{ question: "Where is Sam’s Bar?", options: ["Dawson Street", "Kildare Street", "Merrion Street", "Nassau Street"], correct: ["Dawson Street"] },
{ question: "Where is Café En Seine?", options: ["Dawson Street", "South King Street", "Duke Street", "Anne Street"], correct: ["Dawson Street"] },
{ question: "Where is International Bar?", options: ["Wicklow Street", "Clarendon Street", "Duke Street", "South William Street"], correct: ["Wicklow Street"] },
{ question: "Where is Buswell’s Hotel?", options: ["Molesworth Street", "Dawson Street", "Kildare Street", "Nassau Street"], correct: ["Molesworth Street"] },
{ question: "Where is Dunne and Crescenzi Restaurant?", options: ["South Frederick Street", "Duke Street", "Clarendon Street", "Wicklow Street"], correct: ["South Frederick Street"] },
{ question: "Where is National Library?", options: ["Kildare Street", "Merrion Street", "Dawson Street", "Nassau Street"], correct: ["Kildare Street"] },
{ question: "Where is Heraldic Museum?", options: ["Kildare Street", "Merrion Street", "Clare Street", "Nassau Street"], correct: ["Kildare Street"] },
{ question: "Where is Royal College of Physicians?", options: ["Kildare Street", "Merrion Street", "Dawson Street", "Clare Street"], correct: ["Kildare Street"] },
{ question: "Where is Leinster House?", options: ["Kildare Street", "Merrion Square", "Clare Street", "Dawson Street"], correct: ["Kildare Street"] },
{ question: "Where is National Museum of Archaeology?", options: ["Kildare Street", "Merrion Square", "Clare Street", "Nassau Street"], correct: ["Kildare Street"] },
{ question: "Which street runs one way between Suffolk Street to Leinster Street South?", options: ["Nassau Street", "Dawson Street", "Kildare Street", "Grafton Street"], correct: ["Nassau Street"] },
{ question: "Which street runs one way between Molesworth Street to Nassau Street?", options: ["South Frederick Street", "Dawson Street", "Kildare Street", "Suffolk Street"], correct: ["South Frederick Street"] },
{ question: "Which street runs one way between Leinster Street South to Stephen Green North?", options: ["Kildare Street", "Dawson Street", "Nassau Street", "Molesworth Street"], correct: ["Kildare Street"] },
{ question: "Where is O’Callaghan Mont Clare Hotel?", options: ["Merrion Street Lower (Merrion Square)", "Kildare Street", "Clare Street", "Dawson Street"], correct: ["Merrion Street Lower (Merrion Square)"] },
{ question: "Where is O’Callaghan Davenport Hotel?", options: ["Merrion Street Lower (Merrion Square)", "Clare Street", "Kildare Street", "Dawson Street"], correct: ["Merrion Street Lower (Merrion Square)"] },
{ question: "Where is Dental Hospital?", options: ["Lincoln Place", "Clare Street", "Kildare Street", "Nassau Street"], correct: ["Lincoln Place"] },
{ question: "Where is National Maternity Hospital?", options: ["Holles Street", "Merrion Street", "Clare Street", "Baggot Street"], correct: ["Holles Street"] },
{ question: "Which square is near to O’Callaghan Mont Clare Hotel?", options: ["Merrion Square", "Fitzwilliam Square", "St Stephen’s Green", "Parnell Square"], correct: ["Merrion Square"] },
{ question: "Where is Royal City of Dublin Hospital?", options: ["Baggot Street Upper", "Merrion Street", "Leeson Street", "Clare Street"], correct: ["Baggot Street Upper"] },
{ question: "Which street is adjoining to Kildare Street?", options: ["Schoolhouse Lane", "Clare Street", "Merrion Street", "Dawson Street"], correct: ["Schoolhouse Lane"] },
{ question: "Where is National Gallery of Ireland?", options: ["Merrion Square West", "Kildare Street", "Clare Street", "Dawson Street"], correct: ["Merrion Square West"] },
{ question: "Where is Merrion Hotel?", options: ["Merrion Street Upper (Merrion Square)", "Kildare Street", "Clare Street", "Dawson Street"], correct: ["Merrion Street Upper (Merrion Square)"] },
{ question: "National Gallery is near the corner of?", options: ["Clare Street", "Kildare Street", "Merrion Street", "Nassau Street"], correct: ["Clare Street"] },
{ question: "Where is National Natural History Museum?", options: ["Merrion Street Upper (Merrion Square)", "Kildare Street", "Clare Street", "Nassau Street"], correct: ["Merrion Street Upper (Merrion Square)"] },
{ question: "Where is Oscar Wilde House Museum?", options: ["Merrion Square West", "Clare Street", "Kildare Street", "Dawson Street"], correct: ["Merrion Square West"] }
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