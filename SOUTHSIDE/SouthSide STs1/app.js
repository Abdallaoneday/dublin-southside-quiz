const questions = [
    { question: "Where is Richmond Park?", options: ["Emmet Road", "South Circular Road", "Inchicore Road", "Tyrconnell Road"], correct: ["Emmet Road"] },
{ question: "Where is Kilmainham Gaol?", options: ["Inchicore Road", "South Circular Road", "Military Road", "James Street"], correct: ["Inchicore Road"] },
{ question: "Where is Hilton Hotel Kilmainham?", options: ["South Circular Road", "Emmet Road", "James Street", "Inchicore Road"], correct: ["South Circular Road"] },
{ question: "Where does Emmet Road run between?", options: ["South Circular Road and Tyrconnell Road", "James Street and Thomas Street", "Military Road and Inchicore Road", "Cork Street and James Street"], correct: ["South Circular Road and Tyrconnell Road"] },
{ question: "Emmet Road East becomes?", options: ["Old Kilmainham Road", "Inchicore Road", "James Street", "Military Road"], correct: ["Old Kilmainham Road"] },
{ question: "In which area is Emmet Road?", options: ["Inchicore", "Kilmainham", "Dublin 8", "Crumlin"], correct: ["Inchicore"] },
{ question: "Where is Dr Steevens?", options: ["Steevens’ Lane", "James Street", "Military Road", "South Circular Road"], correct: ["Steevens’ Lane"] },
{ question: "Where is Clancy Barracks?", options: ["South Circular Road", "Military Road", "James Street", "Emmet Road"], correct: ["South Circular Road"] },
{ question: "Where is National Boxing Stadium?", options: ["South Circular Road", "James Street", "Inchicore Road", "Cork Street"], correct: ["South Circular Road"] },
{ question: "Where is War Memorial Park?", options: ["South Circular Road", "Inchicore Road", "James Street", "Military Road"], correct: ["South Circular Road"] },
{ question: "Where is Dublin Mosque?", options: ["South Circular Road", "Cork Street", "James Street", "Thomas Street"], correct: ["South Circular Road"] },
{ question: "Where is Griffith College?", options: ["South Circular Road", "Cork Street", "James Street", "Military Road"], correct: ["South Circular Road"] },
{ question: "Where is Blood Bank Headquarters (Irish Blood Transfusion Service)?", options: ["James Street", "Thomas Street", "Military Road", "South Circular Road"], correct: ["James Street"] },
{ question: "Where is Saint James Hospital?", options: ["James Street", "Cork Street", "South Circular Road", "Inchicore Road"], correct: ["James Street"] },
{ question: "Where is Saint Patrick’s Hospital?", options: ["James Street", "Cork Street", "Thomas Street", "Military Road"], correct: ["James Street"] },
{ question: "In which area is Cork Street?", options: ["Dublin 8", "Inchicore", "Kilmainham", "Crumlin"], correct: ["Dublin 8"] },
{ question: "Where is Coombe Woman’s Hospital?", options: ["Cork Street, Dublin 8", "James Street", "South Circular Road", "Thomas Street"], correct: ["Cork Street, Dublin 8"] },
{ question: "Where is Royal Hospital?", options: ["Military Road, Kilmainham", "James Street", "Inchicore Road", "South Circular Road"], correct: ["Military Road, Kilmainham"] },
{ question: "Where is Irish Museum of Modern Art?", options: ["Military Road", "James Street", "Inchicore Road", "Thomas Street"], correct: ["Military Road"] },
{ question: "Where is Heuston South Quarter Apartments?", options: ["Military Road", "Saint John’s Road West", "James Street", "Inchicore Road"], correct: ["Military Road"] },
{ question: "Where is Heuston Station?", options: ["Saint John’s Road West", "Military Road", "James Street", "South Circular Road"], correct: ["Saint John’s Road West"] },
{ question: "Where is Rupert Guinness Theatre?", options: ["Watling Street", "Thomas Street", "Cork Street", "James Street"], correct: ["Watling Street"] },
{ question: "Where is Guinness Storehouse?", options: ["St. James’s Gate (Market Street)", "James Street", "Thomas Street", "Military Road"], correct: ["St. James’s Gate (Market Street)"] },
{ question: "Where is James Joyce House of the Dead?", options: ["Usher’s Island Quay", "Bridge Street Lower", "High Street", "Watling Street"], correct: ["Usher’s Island Quay"] },
{ question: "Where is Vicar Street venue?", options: ["Thomas Street", "James Street", "Cork Street", "Francis Street"], correct: ["Thomas Street"] },
{ question: "Where is National College of Art and Design?", options: ["Thomas Street", "James Street", "Francis Street", "High Street"], correct: ["Thomas Street"] },
{ question: "Where is Tivoli Theatre?", options: ["Francis Street", "Thomas Street", "James Street", "Cork Street"], correct: ["Francis Street"] },
{ question: "Coombe to Thomas Street?", options: ["Meath Street (One Way)", "Francis Street", "James Street", "Cork Street"], correct: ["Meath Street (One Way)"] },
{ question: "Cornmarket to Dean Street?", options: ["Francis Street (One Way)", "Thomas Street", "James Street", "Meath Street"], correct: ["Francis Street (One Way)"] },
{ question: "Where is Brazen Head Pub?", options: ["Bridge Street Lower", "High Street", "Thomas Street", "Watling Street"], correct: ["Bridge Street Lower"] },
{ question: "Where is Saint Audeon Church?", options: ["High Street", "Bridge Street Lower", "Thomas Street", "Francis Street"], correct: ["High Street"] },
{ question: "Where is Staycity Apartments?", options: ["High Street, Dublin 8", "Thomas Street", "James Street", "Cork Street"], correct: ["High Street, Dublin 8"] },
{ question: "Which street does not border Guinness Brewery?", options: ["Usher Street / Ellis Quay", "James Street", "Thomas Street", "Market Street"], correct: ["Usher Street / Ellis Quay"] },
{ question: "Where is Dublinia?", options: ["Saint Michael’s Hill", "Christchurch Place", "High Street", "Fishamble Street"], correct: ["Saint Michael’s Hill"] },
{ question: "Where is Christ Church Cathedral?", options: ["Christchurch Place", "High Street", "Dame Street", "Fishamble Street"], correct: ["Christchurch Place"] },
{ question: "Where is Harding Hotel?", options: ["Fishamble Street", "Exchange Street Upper", "Dame Street", "High Street"], correct: ["Fishamble Street"] },
{ question: "Where is Paramount Hotel?", options: ["Exchange Street Upper", "Fishamble Street", "Dame Street", "High Street"], correct: ["Exchange Street Upper"] },
{ question: "Which street is adjoining to Lord Edward Street?", options: ["Exchange Street Upper", "Fishamble Street", "High Street", "Dame Street"], correct: ["Exchange Street Upper"] },
{ question: "Where is Smock Alley Theatre?", options: ["Exchange Street Lower", "Exchange Street Upper", "Dame Street", "Fishamble Street"], correct: ["Exchange Street Lower"] },
{ question: "Where is Isolde’s Tower?", options: ["Exchange Street Lower", "Exchange Street Upper", "Christchurch Place", "High Street"], correct: ["Exchange Street Lower"] },
{ question: "Where is Dublin City Hall?", options: ["Dame Street", "Christchurch Place", "Exchange Street Upper", "Fishamble Street"], correct: ["Dame Street"] },
{ question: "Where is Dublin Town Hall?", options: ["Dame Street", "High Street", "Exchange Street Lower", "Fishamble Street"], correct: ["Dame Street"] },
{ question: "Where is Dublin Castle?", options: ["Dame Street", "Christchurch Place", "High Street", "Lord Edward Street"], correct: ["Dame Street"] },
{ question: "Where is O’Brien’s Bar?", options: ["Dame Street", "Exchange Street Upper", "Fishamble Street", "High Street"], correct: ["Dame Street"] },
{ question: "Where is Mercantile Hotel and Bar?", options: ["Dame Street", "High Street", "Exchange Street Upper", "Fishamble Street"], correct: ["Dame Street"] },
{ question: "Where is Millstone Restaurant?", options: ["Dame Street", "Exchange Street Lower", "Christchurch Place", "High Street"], correct: ["Dame Street"] },
{ question: "Where is Olympia Theatre?", options: ["Dame Street", "Fishamble Street", "Exchange Street Upper", "High Street"], correct: ["Dame Street"] },
{ question: "Which street runs one way between Dame Street to East Essex Street?", options: ["Sycamore Street", "Eustace Street", "Parliament Street", "Temple Bar"], correct: ["Sycamore Street"] },
{ question: "Which street runs one way between Dame Street to Wellington Quay?", options: ["Eustace Street", "Sycamore Street", "Parliament Street", "East Essex Street"], correct: ["Eustace Street"] },
{ question: "Where is ARK Theatre?", options: ["Eustace Street", "Sycamore Street", "Temple Bar", "Fishamble Street"], correct: ["Eustace Street"] },
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