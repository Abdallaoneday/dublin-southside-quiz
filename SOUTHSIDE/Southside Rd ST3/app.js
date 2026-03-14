const questions = [
     { question: "Which road leads towards Harold’s Cross?", options: ["Terenure Road North", "Rathmines Road", "Harold’s Cross Road", "Crumlin Road"], correct: ["Terenure Road North"] },
    { question: "Which road runs from Terenure to Harold’s Cross?", options: ["Terenure Road North", "Terenure Road East", "Rathfarnham Road", "Templeogue Road"], correct: ["Terenure Road North"] },
    { question: "Which road runs from Terenure to Kimmage?", options: ["Terenure Road West", "Kimmage Road Lower", "Crumlin Road", "Templeogue Road"], correct: ["Terenure Road West"] },
    { question: "Which road runs from Terenure to Rathgar?", options: ["Terenure Road East", "Rathgar Road", "Highfield Road", "Bushy Park Road"], correct: ["Terenure Road East"] },
    { question: "Which road runs from Terenure to Templeogue?", options: ["Templeogue Road", "Rathfarnham Road", "Terenure Road South", "Crumlin Road"], correct: ["Templeogue Road"] },
    { question: "Which road runs from Terenure to Rathfarnham?", options: ["Rathfarnham Road", "Templeogue Road", "Grange Road", "Bushy Park Road"], correct: ["Rathfarnham Road"] },
    { question: "Which road runs from Harold’s Cross to Kimmage?", options: ["Kimmage Road Lower", "Crumlin Road", "Rathmines Road", "Terenure Road West"], correct: ["Kimmage Road Lower"] },
    { question: "Where is Rathfarnham Castle?", options: ["Rathfarnham Road, Rathfarnham", "Grange Road, Rathfarnham", "Nutgrove Avenue", "Stocking Lane"], correct: ["Rathfarnham Road, Rathfarnham"] },
    { question: "Where is the Pearse Museum?", options: ["Grange Road, Rathfarnham", "Rathfarnham Road", "Whitechurch Road", "Stocking Lane"], correct: ["Grange Road, Rathfarnham"] },
    { question: "Where is Saint Enda’s Park?", options: ["Grange Road, Rathfarnham", "Rathfarnham Road", "Whitechurch Road", "Stocking Lane"], correct: ["Grange Road, Rathfarnham"] },
    { question: "Where is Marley Park?", options: ["Grange Road, Rathfarnham", "Whitechurch Road", "Stocking Lane", "Nutgrove Avenue"], correct: ["Grange Road, Rathfarnham"] },
    { question: "Where is Grange Golf Club?", options: ["Whitechurch Road, Rathfarnham", "Grange Road", "Stocking Lane", "Nutgrove Avenue"], correct: ["Whitechurch Road, Rathfarnham"] },
    { question: "Which road is not directly adjoining to Ballyboden Road?", options: ["Grange Road", "Rathfarnham Road", "Whitechurch Road", "Nutgrove Avenue"], correct: ["Grange Road"] },
    { question: "In which area is Taylor’s Lane?", options: ["Ballyboden", "Rathfarnham", "Templeogue", "Knocklyon"], correct: ["Ballyboden"] },
    { question: "Taylor’s Lane becomes which road?", options: ["Grange Road", "Ballyboden Road", "Whitechurch Road", "Rathfarnham Road"], correct: ["Grange Road"] },
    { question: "From Kimmage to Leopardstown, which areas are on your route?", options: ["Terenure", "Knocklyon", "Sandyford", "Rathgar"], correct: ["Terenure", "Knocklyon", "Sandyford"] },
    { question: "Where is Nutgrove Shopping Centre?", options: ["Nutgrove Avenue, Rathfarnham", "Rathfarnham Road", "Grange Road", "Whitechurch Road"], correct: ["Nutgrove Avenue, Rathfarnham"] },
    { question: "Where is Edmondstown Park?", options: ["Edmondstown Road", "Grange Road", "Whitechurch Road", "Stocking Lane"], correct: ["Edmondstown Road"] },
    { question: "Where is Rathfarnham Golf Club?", options: ["Stocking Lane, Newtown", "Grange Road", "Whitechurch Road", "Edmondstown Road"], correct: ["Stocking Lane, Newtown"] },
    { question: "From Rathmines to Marley Park, which areas are on your route?", options: ["Rathgar", "Terenure", "Rathfarnham", "Templeogue"], correct: ["Rathgar", "Terenure", "Rathfarnham"] },
    { question: "From Rathmines to Rathfarnham, which areas are on your route?", options: ["Rathgar", "Terenure", "Templeogue", "Knocklyon"], correct: ["Rathgar", "Terenure"] },
    { question: "Which road is adjoining to Templeville Road?", options: ["Cypress Grove Road", "Rathfarnham Road", "Nutgrove Avenue", "Whitechurch Road"], correct: ["Cypress Grove Road"] },
    { question: "Which road runs from the city to Jobstown?", options: ["N81", "N7", "N4", "R114"], correct: ["N81"] },
    { question: "Which road runs from the city to Tallaght?", options: ["N81", "N7", "M50", "R110"], correct: ["N81"] },
    { question: "Which road runs from the city to Blessington?", options: ["N81", "N7", "R114", "N4"], correct: ["N81"] },
    { question: "Which road is adjoining to Wainsfort Road?", options: ["Fortfield Road", "Templeogue Road", "Rathfarnham Road", "Nutgrove Avenue"], correct: ["Fortfield Road"] },
    { question: "Where is Newlands Golf Course?", options: ["Belgard Road (off N7)", "Naas Road", "Greenhills Road", "Kylemore Road"], correct: ["Belgard Road (off N7)"] },
    { question: "Off which road is Newlands Golf Course?", options: ["N7", "Naas Road", "N81", "M50"], correct: ["N7"] },
    { question: "Where is the National Basketball Arena?", options: ["Tallaght", "Walkinstown", "Greenhills", "Clondalkin"], correct: ["Tallaght"] },
    { question: "Firhouse Road is not bordering which area?", options: ["Dundrum", "Templeogue", "Firhouse", "Knocklyon"], correct: ["Dundrum"] },
    { question: "Which road runs from Tallaght to Walkinstown?", options: ["Greenhills Road", "Belgard Road", "Naas Road", "Kylemore Road"], correct: ["Greenhills Road"] },
    { question: "Which road runs from Tallaght to Newlands Cross?", options: ["Belgard Road", "Greenhills Road", "Naas Road", "N81"], correct: ["Belgard Road"] },
    { question: "Where is Tallaght Garda Station?", options: ["Belgard Walk", "Belgard Square", "Whitestown Way", "Greenhills Road"], correct: ["Belgard Walk"] },
    { question: "Where is Tallaght Hospital?", options: ["Belgard Square, North Tallaght", "Belgard Walk", "Whitestown Way", "Greenhills Road"], correct: ["Belgard Square, North Tallaght"] },
    { question: "Where is the National Children’s Hospital?", options: ["Belgard Square, North Tallaght", "Tallaght Village", "Belgard Walk", "Greenhills Road"], correct: ["Belgard Square, North Tallaght"] },
    { question: "Where is Shamrock Rovers Football Stadium?", options: ["Whitestown Way, Tallaght", "Belgard Square", "Greenhills Road", "Naas Road"], correct: ["Whitestown Way, Tallaght"] },
    { question: "Where is the Plaza Hotel?", options: ["Tallaght", "Greenhills", "Clondalkin", "Walkinstown"], correct: ["Tallaght"] },
    { question: "Where is the Civic Theatre?", options: ["Tallaght", "Templeogue", "Greenhills", "Clondalkin"], correct: ["Tallaght"] },
    { question: "Where is The Square Shopping Centre?", options: ["Tallaght", "Greenhills", "Clondalkin", "Walkinstown"], correct: ["Tallaght"] }
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