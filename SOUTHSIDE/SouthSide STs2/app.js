const questions = [
    { question: "Where is Irish Film Institute?", options: ["Eustace Street", "Sycamore Street", "Fleet Street", "Temple Bar"], correct: ["Eustace Street"] },
{ question: "Where is Wax Museum?", options: ["Westmoreland Street", "O’Connell Street", "College Green", "Dame Street"], correct: ["Westmoreland Street"] },
{ question: "Where is Westin Hotel?", options: ["Westmoreland Street", "College Green", "Dame Street", "Fleet Street"], correct: ["Westmoreland Street"] },
{ question: "Where is the Stock Exchange?", options: ["Anglesea Street", "Fleet Street", "College Street", "Trinity Street"], correct: ["Anglesea Street"] },
{ question: "Where is Trinity College (pedestrian entrance)?", options: ["College Green", "Nassau Street", "Westland Row", "Pearse Street"], correct: ["College Green"] },
{ question: "Where is Trinity College main entrance?", options: ["College Green", "Nassau Street", "Westland Row", "Pearse Street"], correct: ["College Green"] },
{ question: "Where is Bankers Bar?", options: ["Trinity Street", "Fleet Street", "College Green", "Anglesea Street"], correct: ["Trinity Street"] },
{ question: "Which street runs one way from College Green to Aston Quay?", options: ["Westmoreland Street", "D’Olier Street", "O’Connell Street", "Eden Quay"], correct: ["Westmoreland Street"] },
{ question: "Where is Chester Beatty Library?", options: ["Dublin Castle", "Christchurch Place", "Dame Street", "Temple Bar"], correct: ["Dublin Castle"] },
{ question: "Where is State Apartments?", options: ["Dublin Castle", "Dame Street", "Christchurch Place", "High Street"], correct: ["Dublin Castle"] },
{ question: "Where is Garda Museum?", options: ["Dublin Castle", "Christchurch Place", "Exchange Street Upper", "Dame Street"], correct: ["Dublin Castle"] },
{ question: "Where is Morgan Hotel?", options: ["Fleet Street", "Temple Bar", "Dame Street", "Eustace Street"], correct: ["Fleet Street"] },
{ question: "Where is Project Art Centre?", options: ["East Essex Street", "West Essex Street", "Sycamore Street", "Temple Bar"], correct: ["East Essex Street"] },
{ question: "Where is District Family Court?", options: ["East Essex Street", "Dame Street", "Parliament Street", "Temple Bar"], correct: ["East Essex Street"] },
{ question: "Where is the New Theatre?", options: ["East Essex Street", "West Essex Street", "Sycamore Street", "Fleet Street"], correct: ["East Essex Street"] },
{ question: "Where is Gaiety School of Acting?", options: ["West Essex Street", "East Essex Street", "Temple Bar", "Fleet Street"], correct: ["West Essex Street"] },
{ question: "Which streets are adjoining to Dame Street?", options: ["Sycamore Street", "Parliament Street", "Temple Bar", "Christchurch Place"], correct: ["Sycamore Street", "Parliament Street"] },
{ question: "Where is DBS (Dublin Business School)?", options: ["South Great George Street / Aungier Street", "Dame Street", "Clarendon Street", "Exchequer Street"], correct: ["South Great George Street / Aungier Street"] },
{ question: "Where is Civic Offices?", options: ["Wood Quay", "Christchurch Place", "Dame Street", "Parliament Street"], correct: ["Wood Quay"] },
{ question: "Where is Clarence Hotel?", options: ["Wellington Quay", "Burgh Quay", "Aston Quay", "Eden Quay"], correct: ["Wellington Quay"] },
{ question: "Where is Workman’s Pub?", options: ["Wellington Quay", "Temple Bar", "Fleet Street", "Westmoreland Street"], correct: ["Wellington Quay"] },
{ question: "Sycamore Street is in?", options: ["Temple Bar", "Dublin 8", "Inchicore", "Ringsend"], correct: ["Temple Bar"] },
{ question: "Which street runs from Parliament Street to Eustace Street?", options: ["East Essex Street", "Sycamore Street", "Temple Bar", "Fleet Street"], correct: ["East Essex Street"] },
{ question: "Where is Stag’s Head Pub?", options: ["Dame Court (corner of Dame Lane)", "Dame Street", "South William Street", "Clarendon Street"], correct: ["Dame Court (corner of Dame Lane)"] },
{ question: "Where is Mint Bar?", options: ["College Green", "Dame Street", "Fleet Street", "Trinity Street"], correct: ["College Green"] },
{ question: "Where is Dublin Tourism?", options: ["Suffolk Street", "Grafton Street", "Nassau Street", "College Green"], correct: ["Suffolk Street"] },
{ question: "Where is Molly Malone Statue?", options: ["Suffolk Street", "Grafton Street", "College Green", "Dame Street"], correct: ["Suffolk Street"] },
{ question: "Where is Brasserie Sixty Six Restaurant?", options: ["South Great George Street", "Exchequer Street", "Clarendon Street", "Wicklow Street"], correct: ["South Great George Street"] },
{ question: "Where is Yamamori Noodles Restaurant?", options: ["South Great George Street", "Clarendon Street", "Exchequer Street", "Wicklow Street"], correct: ["South Great George Street"] },
{ question: "Where is Rustic Stone Restaurant?", options: ["South Great George Street", "Exchequer Street", "Clarendon Street", "Wicklow Street"], correct: ["South Great George Street"] },
{ question: "Which street is adjoining to South Great George Street?", options: ["Exchequer Street", "Wicklow Street", "Clarendon Street", "Dame Street"], correct: ["Exchequer Street"] },
{ question: "Which street runs one way between South Great George Street to Wicklow Street?", options: ["Exchequer Street", "Drury Street", "Fade Street", "Duke Street"], correct: ["Exchequer Street"] },
{ question: "Between which two streets is Powerscourt Shopping Centre located?", options: ["South William Street and Clarendon Street", "Exchequer Street and Wicklow Street", "Grafton Street and Suffolk Street", "Dame Street and George’s Street"], correct: ["South William Street and Clarendon Street"] },
{ question: "Where is Powerscourt Centre?", options: ["South William Street", "Clarendon Street", "Exchequer Street", "Wicklow Street"], correct: ["South William Street"] },
{ question: "Where is Phil Lynott Statue?", options: ["Harry Street", "Clarendon Street", "Exchequer Street", "Wicklow Street"], correct: ["Harry Street"] },
{ question: "Where is Bruxells Pub?", options: ["Harry Street", "Clarendon Street", "Exchequer Street", "Wicklow Street"], correct: ["Harry Street"] },
{ question: "Where is MC Daids Pub?", options: ["Harry Street", "Clarendon Street", "Exchequer Street", "Wicklow Street"], correct: ["Harry Street"] },
{ question: "Where is Fallon and Byrne Restaurant?", options: ["Exchequer Street", "South William Street", "Clarendon Street", "Wicklow Street"], correct: ["Exchequer Street"] },
{ question: "Where is International Bar?", options: ["Wicklow Street", "South William Street", "Clarendon Street", "Exchequer Street"], correct: ["Wicklow Street"] },
{ question: "Where is Saint Teresa Church?", options: ["Clarendon Street", "South William Street", "Wicklow Street", "Exchequer Street"], correct: ["Clarendon Street"] },
{ question: "Which street runs one way between Stephen Street Lower to Exchequer Street?", options: ["Drury Street", "Fade Street", "Wicklow Street", "Duke Street"], correct: ["Drury Street"] },
{ question: "Which street runs one way between Burgh Quay to College Street?", options: ["D’Olier Street", "Westmoreland Street", "O’Connell Street", "Poolbeg Street"], correct: ["D’Olier Street"] },
{ question: "Which street runs one way between Tara Street to Hawkins Street?", options: ["Poolbeg Street", "Shaw Street", "Mark Street", "D’Olier Street"], correct: ["Poolbeg Street"] },
{ question: "Which street runs one way between Pearse Street to Townsend Street?", options: ["Mark Street", "Shaw Street", "Poolbeg Street", "D’Olier Street"], correct: ["Mark Street"] },
{ question: "Which street runs one way between Townsend Street to Pearse Street?", options: ["Shaw Street", "Mark Street", "Poolbeg Street", "Tara Street"], correct: ["Shaw Street"] },
{ question: "Where is Trinity City Hotel?", options: ["Pearse Street", "Westland Row", "College Green", "Nassau Street"], correct: ["Pearse Street"] },
{ question: "Where is entrance to Pearse DART Station?", options: ["Westland Row", "Pearse Street", "Tara Street", "College Street"], correct: ["Westland Row"] },
{ question: "Where is Irish Waterways Visitor Centre?", options: ["Grand Canal Quay", "Barrow Street", "Sir John Rogerson’s Quay", "Pearse Street"], correct: ["Grand Canal Quay"] },
{ question: "Where is Google Docks?", options: ["Barrow Street", "Grand Canal Quay", "Sir John Rogerson’s Quay", "Pearse Street"], correct: ["Barrow Street"] },
{ question: "Where is Shelbourne Park Greyhound Stadium?", options: ["South Lotts Road", "Barrow Street", "Pearse Street", "Grand Canal Quay"], correct: ["South Lotts Road"] },
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