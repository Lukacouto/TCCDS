// 1. Construtor Dinâmico de Prompts
function updatePromptBuilder() {
    const role = document.getElementById("prompt-role").value;
    const task = document.getElementById("prompt-task").value;
    const format = document.getElementById("prompt-format").value;
    
    const fullPrompt = `"${role}, ${task}, ${format}"`;
    document.getElementById("prompt-output").innerText = fullPrompt;
}

function copyPrompt() {
    const promptText = document.getElementById("prompt-output").innerText;
    navigator.clipboard.writeText(promptText);
    alert("Prompt copiado com sucesso! Agora você pode colar no ChatGPT, Claude ou Copilot.");
}

// 2. Simulador de Uso Ético (Cenários)
let currentScenarioIndex = 0;
const scenarios = [
    {
        text: "<strong>Cenário:</strong> Um aluno usa a IA para explicar um conceito de física que não entendeu na aula, usando analogias sobre futebol.",
        ethical: true,
        feedback: "Correto! Isso é um uso ético excelente. A IA funciona perfeitamente como um tutor complementar de estudos customizado."
    },
    {
        text: "<strong>Cenário:</strong> Um professor gera um teste inteiro usando IA e aplica diretamente para a turma sem ler ou checar as questões antes.",
        ethical: false,
        feedback: "Correto! Isso é inadequado. O professor deve sempre manter a supervisão humana ('human-in-the-loop') para evitar alucinações e erros conceituais."
    }
];

function checkScenario(userChoice) {
    const currentScenario = scenarios[currentScenarioIndex];
    const feedbackEl = document.getElementById("scenario-feedback");
    
    if (userChoice === currentScenario.ethical) {
        feedbackEl.className = "feedback-msg feedback-success";
        feedbackEl.innerHTML = currentScenario.feedback;
    } else {
        feedbackEl.className = "feedback-msg feedback-danger";
        feedbackEl.innerHTML = "Não é bem assim. Reflita sobre o papel da supervisão e autoria humana.";
    }
    
    // Avança cenários ciclicamente após 3 segundos
    setTimeout(() => {
        currentScenarioIndex = (currentScenarioIndex + 1) % scenarios.length;
        document.getElementById("scenario-text").innerHTML = scenarios[currentScenarioIndex].text;
        feedbackEl.style.display = "none";
    }, 4000);
}

// 3. Quiz de Fixação
function answerQuiz(buttonElement, isCorrect) {
    const feedbackEl = document.getElementById("quiz-feedback");
    const options = buttonElement.parentElement.querySelectorAll("button");
    
    // Desabilita opções após responder
    options.forEach(opt => opt.disabled = true);
    
    if (isCorrect) {
        buttonElement.style.backgroundColor = "#c6f6d5";
        feedbackEl.className = "feedback-msg feedback-success";
        feedbackEl.innerText = "Excelente! Fornecer dados e contexto restringe a IA de inventar coisas (técnica de ancoragem).";
    } else {
        buttonElement.style.backgroundColor = "#fed7d7";
        feedbackEl.className = "feedback-msg feedback-danger";
        feedbackEl.innerText = "Resposta errada. Lembre-se: IAs precisam de direcionamento de dados confiáveis para não alucinar.";
    }
}

// Inicializações automáticas
window.onload = function() {
    updatePromptBuilder();
};
