const questions = [
        { question: "Which road runs from Merrion to Ballsbridge?", options: ["Merrion Road", "Rock Road", "Anglesea Road", "Pembroke Road"], correct: ["Merrion Road"] },
    { question: "Which road runs from Merrion to Irishtown?", options: ["Strand Road", "Merrion Road", "Rock Road", "Beach Road"], correct: ["Strand Road"] },
    { question: "Which road runs between Blackrock and Merrion?", options: ["Rock Road", "Mount Merrion Avenue", "Frascati Road", "Carysfort Avenue"], correct: ["Rock Road"] },
    { question: "Which road runs between Blackrock and Mount Merrion?", options: ["Mount Merrion Avenue", "Rock Road", "Frascati Road", "Nutley Lane"], correct: ["Mount Merrion Avenue"] },
    { question: "Which roads are adjoining to Strand Road?", options: ["Merrion Road", "Beach Road", "Rock Road", "Anglesea Road"], correct: ["Merrion Road", "Beach Road"] },
    { question: "Which road is adjoining to South Bank Road?", options: ["Pigeon House Road", "Beach Road", "Strand Road", "Sean Moore Road"], correct: ["Pigeon House Road"] },
    { question: "Where is the RDS (Royal Dublin Society)?", options: ["Merrion Road", "Anglesea Road", "Pembroke Road", "Elgin Road"], correct: ["Merrion Road"] },
    { question: "Where is the British Embassy?", options: ["Merrion Road", "Elgin Road", "Raglan Road", "Anglesea Road"], correct: ["Merrion Road"] },
    { question: "Where is the Netherlands Embassy?", options: ["Merrion Road", "Elgin Road", "Raglan Road", "Pembroke Road"], correct: ["Merrion Road"] },
    { question: "Where is the Chinese Embassy?", options: ["Merrion Road", "Elgin Road", "Anglesea Road", "Raglan Road"], correct: ["Merrion Road"] },
    { question: "Where is Tara Towers?", options: ["Merrion Road", "Rock Road", "Strand Road", "Anglesea Road"], correct: ["Merrion Road"] },
    { question: "Where is the Horse Show Jumping entrance?", options: ["Anglesea Road", "Merrion Road", "Pembroke Road", "Elgin Road"], correct: ["Anglesea Road"] },
    { question: "Where is the Herbert Park Hotel?", options: ["Anglesea Road", "Merrion Road", "Pembroke Road", "Elgin Road"], correct: ["Anglesea Road"] },
    { question: "Where is Blackrock Clinic?", options: ["Rock Road, Blackrock", "Frascati Road, Blackrock", "Carysfort Avenue, Blackrock", "Mount Merrion Avenue"], correct: ["Rock Road, Blackrock"] },
    { question: "Where is Blackrock College?", options: ["Rock Road, Blackrock", "Frascati Road, Blackrock", "Mount Merrion Avenue", "Carysfort Avenue"], correct: ["Rock Road, Blackrock"] },
    { question: "Where is Blackrock Park?", options: ["Rock Road, Blackrock", "Frascati Road, Blackrock", "Mount Merrion Avenue", "Carysfort Avenue"], correct: ["Rock Road, Blackrock"] },
    { question: "In which area is Rock Road?", options: ["Blackrock", "Ballsbridge", "Merrion", "Dún Laoghaire"], correct: ["Blackrock"] },
    { question: "Where is the Mexican Embassy?", options: ["Raglan Road", "Elgin Road", "Pembroke Road", "Merrion Road"], correct: ["Raglan Road"] },
    { question: "Where is the American Embassy?", options: ["Elgin Road", "Raglan Road", "Pembroke Road", "Anglesea Road"], correct: ["Elgin Road"] },
    { question: "Where is the Spanish Embassy?", options: ["Merlyn Park", "Elgin Road", "Raglan Road", "Pembroke Road"], correct: ["Merlyn Park"] },
    { question: "Where is Blackrock Shopping Centre?", options: ["Frascati Road", "Carysfort Avenue", "Rock Road", "Mount Merrion Avenue"], correct: ["Frascati Road"] },
    { question: "Where is the InterContinental Hotel?", options: ["Simmonscourt Road", "Anglesea Road", "Merrion Road", "Pembroke Road"], correct: ["Simmonscourt Road"] },
    { question: "Where are RTÉ Studios?", options: ["Nutley Lane", "Mount Merrion Avenue", "Rock Road", "Frascati Road"], correct: ["Nutley Lane"] },
    { question: "Where is Saint Vincent’s Hospital?", options: ["Nutley Lane", "Rock Road", "Mount Merrion Avenue", "Frascati Road"], correct: ["Nutley Lane"] },
    { question: "Where is Elm Park Golf Club?", options: ["Nutley Lane", "Mount Merrion Avenue", "Rock Road", "Merrion Road"], correct: ["Nutley Lane"] },
        { question: "What is near Saint Vincent’s Hospital?", options: ["RTÉ Studios", "Blackrock Clinic", "Elm Park Golf Club", "Blackrock Shopping Centre"], correct: ["RTÉ Studios"] },
    { question: "Where is Aviva Stadium?", options: ["Lansdowne Road", "Pembroke Road", "Anglesea Road", "Elgin Road"], correct: ["Lansdowne Road"] },
    { question: "Where is Marian College Swimming Pool?", options: ["Lansdowne Road", "Pembroke Road", "Anglesea Road", "Merrion Road"], correct: ["Lansdowne Road"] },
    { question: "Where is Irishtown / Ringsend Garda Station?", options: ["Irishtown Road", "Strand Road", "Sean Moore Road", "Beach Road"], correct: ["Irishtown Road"] },
    { question: "Where is People’s Park?", options: ["Dún Laoghaire", "Blackrock", "Dalkey", "Monkstown"], correct: ["Dún Laoghaire"] },
    { question: "Where is Smurfit Business School?", options: ["Carysfort Avenue, Blackrock", "Frascati Road, Blackrock", "Rock Road, Blackrock", "Mount Merrion Avenue"], correct: ["Carysfort Avenue, Blackrock"] },
    { question: "Killiney Hill Road becomes which road?", options: ["Dalkey Avenue", "Vico Road", "Marine Road", "Rochestown Avenue"], correct: ["Dalkey Avenue"] },
    { question: "Which road is adjoining to Killiney Hill Road?", options: ["Dalkey Avenue", "Vico Road", "Marine Road", "Rochestown Avenue"], correct: ["Dalkey Avenue"] },
    { question: "Where is the Fitzpatrick Castle Hotel?", options: ["Killiney Hill Road", "Dalkey Avenue", "Vico Road", "Marine Road"], correct: ["Killiney Hill Road"] },
    { question: "Where is the Royal Marine Hotel?", options: ["Marine Road, Dún Laoghaire", "George’s Street, Dún Laoghaire", "Upper Georges Street", "Dalkey Avenue"], correct: ["Marine Road, Dún Laoghaire"] },
    { question: "Where is the National Rehabilitation Hospital?", options: ["Rochestown Avenue", "Mount Merrion Avenue", "Rock Road", "Frascati Road"], correct: ["Rochestown Avenue"] },
    { question: "Which areas are not bordering Dalkey?", options: ["Cabinteely", "Ballybrack", "Killiney", "Glasthule"], correct: ["Cabinteely", "Ballybrack"] },
    { question: "Where is the German Embassy?", options: ["Trimleston Avenue", "Merrion Road", "Elgin Road", "Raglan Road"], correct: ["Trimleston Avenue"] },
    { question: "Which road runs from Blackrock to Dún Laoghaire?", options: ["N31", "Rock Road", "Marine Road", "Mount Merrion Avenue"], correct: ["N31"] },
    { question: "Where is Saint Michael’s Hospital?", options: ["Dún Laoghaire", "Blackrock", "Monkstown", "Dalkey"], correct: ["Dún Laoghaire"] },
    { question: "From Saint Vincent’s Hospital to Dún Laoghaire, which areas are on your route?", options: ["Blackrock", "Monkstown", "Ballsbridge", "Merrion"], correct: ["Blackrock", "Monkstown"] },
    { question: "Which area is not bordering Newtown Park Avenue?", options: ["Dundrum", "Blackrock", "Monkstown", "Deansgrange"], correct: ["Dundrum"] },
    { question: "From Dún Laoghaire to the city, which area is not on your route?", options: ["Foxrock", "Blackrock", "Monkstown", "Ballsbridge"], correct: ["Foxrock"] },
    { question: "Where are the Sweepstakes Apartments?", options: ["Ballsbridge Park, Ballsbridge", "Herbert Park, Ballsbridge", "Pembroke Road", "Merrion Road"], correct: ["Ballsbridge Park, Ballsbridge"] },
    { question: "Which road runs from Dalkey to Killiney?", options: ["Vico Road", "Dalkey Avenue", "Marine Road", "Rochestown Avenue"], correct: ["Vico Road"] },
    { question: "Which road runs from Ballybrack to Killiney?", options: ["Killiney Hill Road", "Vico Road", "Rochestown Avenue", "Dalkey Avenue"], correct: ["Killiney Hill Road"] },
    { question: "Which road is not adjoining to Park Avenue?", options: ["Merrion Road", "Anglesea Road", "Pembroke Road", "Elgin Road"], correct: ["Merrion Road"] },
    { question: "Where is Roly’s Bistro?", options: ["Ballsbridge Terrace", "Pembroke Road", "Merrion Road", "Anglesea Road"], correct: ["Ballsbridge Terrace"] },
    { question: "Where is the Lansdowne Hotel?", options: ["Pembroke Road", "Lansdowne Road", "Merrion Road", "Anglesea Road"], correct: ["Pembroke Road"] }
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