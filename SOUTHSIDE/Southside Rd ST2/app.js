const questions = [
        { question: "Which road runs from Donnybrook to Clonskeagh?", options: ["Eglinton Road", "Ailesbury Road", "Anglesea Road", "Rathmines Road"], correct: ["Eglinton Road"] },
    { question: "Which road runs from Donnybrook to Merrion?", options: ["Ailesbury Road", "Anglesea Road", "Sandford Road", "Pembroke Road"], correct: ["Ailesbury Road"] },
    { question: "Which road runs from Donnybrook to Ballsbridge?", options: ["Anglesea Road", "Ailesbury Road", "Pembroke Road", "Elgin Road"], correct: ["Anglesea Road"] },
    { question: "Which road runs from Donnybrook to Stillorgan?", options: ["Stillorgan Road", "N11", "Rock Road", "Mount Merrion Avenue"], correct: ["Stillorgan Road"] },
    { question: "Which road runs from Donnybrook to Foxrock?", options: ["Stillorgan Road", "N11", "Kilmacud Road Lower", "Sandyford Road"], correct: ["Stillorgan Road"] },
    { question: "Which road runs from Stillorgan to Kilmacud?", options: ["Kilmacud Road Lower", "Stillorgan Road", "Sandyford Road", "Taney Road"], correct: ["Kilmacud Road Lower"] },
    { question: "Which road runs from Stillorgan to Goatstown?", options: ["Kilmacud Road Lower", "Taney Road", "Sandyford Road", "Churchtown Road"], correct: ["Kilmacud Road Lower"] },
    { question: "Which road runs from Kilmacud to Goatstown?", options: ["Kilmacud Road Lower", "Taney Road", "Sandyford Road", "Churchtown Road"], correct: ["Kilmacud Road Lower"] },
    { question: "Which road runs from the city to Cabinteely?", options: ["N11", "M50", "Stillorgan Road", "Rock Road"], correct: ["N11"] },
    { question: "Which road runs from the city to Loughlinstown?", options: ["N11", "M50", "Rock Road", "Sandyford Road"], correct: ["N11"] },
    { question: "Which road runs from the city to Glencree?", options: ["N11", "R115", "M50", "R116"], correct: ["N11"] },
    { question: "Where is Stillorgan Shopping Centre?", options: ["Kilmacud Road Lower", "Stillorgan Road", "Sandyford Road", "Taney Road"], correct: ["Kilmacud Road Lower"] },
    { question: "Where is Beacon Hospital?", options: ["Bracken Road, Sandyford", "Blackthorn Road, Sandyford", "Ballyogan Road, Sandyford", "Kilmacud Road Upper"], correct: ["Bracken Road, Sandyford"] },
    { question: "Where is the Beacon Hotel?", options: ["Blackthorn Road, Sandyford", "Bracken Road, Sandyford", "Ballyogan Road, Sandyford", "Stillorgan Road"], correct: ["Blackthorn Road, Sandyford"] },
    { question: "Where is Leopardstown Shopping Centre?", options: ["Ballyogan Road, Sandyford", "Blackthorn Road, Sandyford", "Bracken Road, Sandyford", "Stillorgan Road"], correct: ["Ballyogan Road, Sandyford"] },
    { question: "Where is Foxrock Golf Club?", options: ["Torquay Road (Golf Lane)", "Kill Lane", "Westminster Road", "Sandyford Road"], correct: ["Torquay Road (Golf Lane)"] },
    { question: "Where is the Nigerian Embassy?", options: ["Leeson Park", "Elgin Road", "Ailesbury Road", "Raglan Road"], correct: ["Leeson Park"] },
    { question: "Which road is adjoining to Sandyford Road?", options: ["Blackglen Road", "Ballyogan Road", "Bracken Road", "Kilmacud Road Upper"], correct: ["Blackglen Road"] },
    { question: "What is the main road near Cornelscourt Shopping Centre?", options: ["N11", "Rock Road", "Stillorgan Road", "M50"], correct: ["N11"] },
    { question: "Where is UCD (University College Dublin)?", options: ["Belfield", "Blackrock", "Donnybrook", "Clonskeagh"], correct: ["Belfield"] },
    { question: "Where is the National Hockey Stadium?", options: ["UCD, Belfield", "Donnybrook", "Rathmines", "Clonskeagh"], correct: ["UCD, Belfield"] },
    { question: "Where is the Talbot Hotel?", options: ["Stillorgan Road, Stillorgan", "Kilmacud Road Lower", "Sandyford Road", "Ballyogan Road"], correct: ["Stillorgan Road, Stillorgan"] },
    { question: "Where is Saint John of God Hospital?", options: ["Stillorgan Road, Stillorgan", "Kilmacud Road Lower", "Sandyford Road", "Mount Merrion Avenue"], correct: ["Stillorgan Road, Stillorgan"] },
    { question: "From UCD to the airport, what will be on your route?", options: ["Sandymount", "East Wall", "M50", "Blackrock"], correct: ["Sandymount", "East Wall", "M50"] },
    { question: "From the airport to UCD, what areas will be on your route?", options: ["M50", "East Wall", "Sandymount", "Blackrock"], correct: ["M50", "East Wall", "Sandymount"] },
        { question: "Where is the Canadian Ambassador’s Residence?", options: ["Ranelagh", "Donnybrook", "Ballsbridge", "Clonskeagh"], correct: ["Ranelagh"] },
    { question: "Which road runs from Ranelagh to Clonskeagh?", options: ["Sandford Road", "Rathmines Road", "Clonskeagh Road", "Milltown Road"], correct: ["Sandford Road"] },
    { question: "Which road runs from Milltown to Dundrum?", options: ["Dundrum Road", "Sandyford Road", "Taney Road", "Kilmacud Road"], correct: ["Dundrum Road"] },
    { question: "Which road runs from Milltown to Churchtown?", options: ["Churchtown Road Lower", "Dundrum Road", "Taney Road", "Sandyford Road"], correct: ["Churchtown Road Lower"] },
    { question: "Which road runs from Rathmines to Rathgar?", options: ["Rathgar Road", "Orwell Road", "Highfield Road", "Dartry Road"], correct: ["Rathgar Road"] },
    { question: "Which road runs from Rathgar to Churchtown?", options: ["Orwell Road", "Rathgar Road", "Highfield Road", "Bushy Park Road"], correct: ["Orwell Road"] },
    { question: "Which road runs from Dundrum to Sandyford?", options: ["Sandyford Road", "Taney Road", "Kilmacud Road Lower", "Churchtown Road"], correct: ["Sandyford Road"] },
    { question: "Which road runs from Dundrum to Goatstown?", options: ["Taney Road", "Sandyford Road", "Kilmacud Road Upper", "Churchtown Road"], correct: ["Taney Road"] },
    { question: "Which road is not directly adjoining to Dundrum Road?", options: ["Sandyford Road", "Taney Road", "Milltown Road", "Churchtown Road"], correct: ["Sandyford Road"] },
    { question: "Which road is not directly adjoining to Dundrum Road?", options: ["Clonskeagh Road", "Taney Road", "Milltown Road", "Churchtown Road"], correct: ["Clonskeagh Road"] },
    { question: "Which road does not cross the River Dodder?", options: ["Bushy Park Road", "Orwell Road", "Rathfarnham Road", "Milltown Road"], correct: ["Bushy Park Road"] },
    { question: "Which road is not directly adjoining to Ranelagh Road?", options: ["Marlborough Road", "Chelmsford Road", "Mount Pleasant Avenue", "Sandford Road"], correct: ["Marlborough Road"] },
    { question: "Where is the Central Mental Hospital?", options: ["Windy Arbour", "Dundrum", "Rathgar", "Milltown"], correct: ["Windy Arbour"] },
    { question: "Where is the Russian Embassy?", options: ["Orwell Road", "Elgin Road", "Raglan Road", "Ailesbury Road"], correct: ["Orwell Road"] },
    { question: "Where is Old Wesley Rugby Club?", options: ["Donnybrook", "Ballsbridge", "Rathmines", "Clonskeagh"], correct: ["Donnybrook"] },
    { question: "Where is the Stella Theatre?", options: ["Rathmines", "Ranelagh", "Rathgar", "Milltown"], correct: ["Rathmines"] },
    { question: "Where is Cathal Brugha Barracks?", options: ["Rathmines, Military Road", "Ranelagh, Sandford Road", "Rathgar, Highfield Road", "Milltown, Dundrum Road"], correct: ["Rathmines, Military Road"] },
    { question: "Where is Dundrum Shopping Centre?", options: ["Sandyford Road", "Kilmacud Road Upper", "Taney Road", "Dundrum Road"], correct: ["Sandyford Road"] },
    { question: "Where is Dundrum Garda Station?", options: ["Kilmacud Road Upper", "Sandyford Road", "Taney Road", "Dundrum Road"], correct: ["Kilmacud Road Upper"] },
    { question: "Between which Luas stops is Dundrum Shopping Centre located?", options: ["Dundrum", "Balally", "Milltown", "Windy Arbour"], correct: ["Dundrum", "Balally"] },
    { question: "Where is Clonskeagh Hospital / Vergemount Clinic?", options: ["Clonskeagh", "Ranelagh", "Milltown", "Goatstown"], correct: ["Clonskeagh"] },
    { question: "Where is Saint Luke’s Hospital?", options: ["Highfield Road, Rathgar", "Bushy Park Road", "Rathmines Road", "Orwell Road"], correct: ["Highfield Road, Rathgar"] },
    { question: "What areas will be on your route from Dundrum to Saint Stephen’s Green?", options: ["Milltown", "Ranelagh", "Rathgar", "Donnybrook"], correct: ["Milltown", "Ranelagh"] },
    { question: "What areas will be on your route from Sandyford Industrial Estate to Ranelagh?", options: ["Goatstown", "Clonskeagh", "Milltown", "Rathgar"], correct: ["Goatstown", "Clonskeagh", "Milltown"] },
    { question: "What areas will be on your route from Ranelagh to Leopardstown?", options: ["Milltown", "Clonskeagh", "Goatstown", "Rathgar"], correct: ["Milltown", "Clonskeagh", "Goatstown"] },
    { question: "From Donnybrook to D2, what is not on your route?", options: ["Sussex Road", "Merrion Road", "Pembroke Road", "Anglesea Road"], correct: ["Sussex Road"] },
    { question: "From Blackrock Shopping Centre to Cornelscourt Shopping Centre, what is not on your route?", options: ["Drummartin Link Road", "Rock Road", "Mount Merrion Avenue", "N11"], correct: ["Drummartin Link Road"] },
    { question: "Which road is adjoining to Dundrum Road?", options: ["Taney Road", "Sandyford Road", "Clonskeagh Road", "Kilmacud Road"], correct: ["Taney Road"] },
    { question: "Where is Leopardstown Shopping Centre?", options: ["Ballyogan Road, Sandyford", "Blackthorn Road, Sandyford", "Bracken Road, Sandyford", "Stillorgan Road"], correct: ["Ballyogan Road, Sandyford"] },
    { question: "Which main road is near Cornelscourt Shopping Centre?", options: ["N11", "Rock Road", "M50", "Stillorgan Road"], correct: ["N11"] }
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