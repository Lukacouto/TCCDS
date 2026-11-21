<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>IA na Educação: Guia Prático Interativo</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <!-- Header/Navegação -->
    <header>
        <div class="container header-container">
            <div class="logo">Educa<span>IA</span></div>
            <nav>
                <a href="#inicio">Início</a>
                <a href="#modulo1">Módulo 1: Básico</a>
                <a href="#modulo2">Módulo 2: Intermediário</a>
                <a href="#laboratorio">Laboratório</a>
            </nav>
        </div>
    </header>
    <section id="inicio" class="hero">
        <div class="container">
            <h1>Domine a Inteligência Artificial na Educação</h1>
            <p>Um guia passo a passo interativo projetado para professores e alunos transformarem a rotina escolar de forma ética e prática.</p>
            <a href="#modulo1" class="btn-primary">Começar Agora</a>
        </div>
    </section>
    <main class="container">
        <!-- MÓDULO 1: BÁSICO -->
        <section id="modulo1" class="section-card">
            <span class="badge">Nível Básico</span>
            <h2>Módulo 1: O que é IA e Engenharia de Prompt</h2>
            <p class="section-desc">Entenda o que são Grandes Modelos de Linguagem (LLMs) e aprenda a estrutura ideal de um comando para obter as melhores respostas.</p>
            <div class="interactive-box">
                <h3><span class="icon">💡</span> Objeto Interativo: Flashcards de Conceitos</h3>
                <p>Clique no cartão para revelar o conceito fundamental.</p>
                <div class="flashcards-grid">
                    <div class="flashcard" onclick="this.classList.toggle('flipped')">
                        <div class="flashcard-inner">
                            <div class="flashcard-front">O que é uma LLM?</div>
                            <div class="flashcard-back">É um modelo de IA treinado com bilhões de textos para entender e gerar linguagem humana, como o ChatGPT ou Claude.</div>
                        </div>
                    </div>
                    <div class="flashcard" onclick="this.classList.toggle('flipped')">
                        <div class="flashcard-inner">
                            <div class="flashcard-front">O que é Alucinação?</div>
                            <div class="flashcard-back">É quando a IA gera informações incorretas ou inventadas com total confiança. Sempre verifique os dados importantes!</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="interactive-box">
                <h3><span class="icon">🏗️</span> Construtor de Prompt Perfeito</h3>
                <p>Combine os elementos abaixo para ver como um prompt profissional é estruturado:</p>
                <div class="builder-controls">
                    <label>1. Papel/Persona:</label>
                    <select id="prompt-role" onchange="updatePromptBuilder()">
                        <option value="Atue como um professor de Ciências experiente">Professor de Ciências</option>
                        <option value="Atue como um tutor acadêmico especialista em redação">Tutor de Redação</option>
                    </select>
                    <label>2. Tarefa Principal:</label>
                    <select id="prompt-task" onchange="updatePromptBuilder()">
                        <option value="crie um plano de aula dinâmico sobre fotossíntese">Plano de aula sobre fotossíntese</option>
                        <option value="explique as regras do uso da crase de forma simples">Explicar crase simplesmente</option>
                    </select>
                    <label>3. Formato da Saída:</label>
                    <select id="prompt-format" onchange="updatePromptBuilder()">
                        <option value="em formato de tabela com colunas de tempo e atividade.">Tabela formatada</option>
                        <option value="usando tópicos (bullet points) e uma analogia divertida.">Tópicos e analogia</option>
                    </select>
                </div>
                <div class="prompt-preview">
                    <strong>Resultado do Prompt:</strong>
                    <div id="prompt-output">Carregando prompt...</div>
                    <button class="btn-secondary" onclick="copyPrompt()">Copiar Prompt</button>
                </div>
            </div>
        </section>
        <!-- MÓDULO 2: INTERMEDIÁRIO -->
        <section id="modulo2" class="section-card">
            <span class="badge badge-orange">Nível Intermediário</span>
            <h2>Módulo 2: Técnicas Avançadas e Casos de Uso</h2>
            <p class="section-desc">Aprenda técnicas como Few-Shot Prompting (dar exemplos à IA) e aplique frameworks práticos para o dia a dia pedagógico e estudantil.</p>
            <!-- Comparativo de Casos de Uso (Tabela Direta) -->
            <div class="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Aplicação</th>
                            <th>Para Professores 🍎</th>
                            <th>Para Alunos 🎒</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Preparação</strong></td>
                            <td>Criação de quizzes, rubricas e planos de aula personalizados.</td>
                            <td>Resumos de textos densos e cronogramas de estudos.</td>
                        </tr>
                        <tr>
                            <td><strong>Prática</strong></td>
                            <td>Simulação de dúvidas frequentes dos alunos para treinar didática.</td>
                            <td>Simulação de debates ou arguição oral para exames.</td>
                        </tr>
                        <tr>
                            <td><strong>Feedback</strong></td>
                            <td>Geração de insights sobre dificuldades comuns da turma.</td>
                            <td>Análise ortográfica e sugestões de melhoria em redações.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <!-- Objeto Interativo 3: Simulador de Avaliação Ética -->
            <div class="interactive-box">
                <h3><span class="icon">⚖️</span> Simulador de Uso Ético (Cenários)</h3>
                <p>Leia o cenário e decida se o uso da IA é Ético ou Inadequado:</p>
                <div class="scenario-card">
                    <p id="scenario-text"><strong>Cenário:</strong> Um aluno pede para a IA escrever a redação final do bimestre inteira e entrega o texto sem fazer nenhuma alteração ou revisão.</p>
                    <div class="scenario-buttons">
                        <button class="btn-danger" onclick="checkScenario(false)">Inadequado</button>
                        <button class="btn-success" onclick="checkScenario(true)">Ético / Adequado</button>
                    </div>
                    <div id="scenario-feedback" class="feedback-msg"></div>
                </div>
            </div>
        </section>
        <!-- LABORATÓRIO / QUIZ FINAL -->
        <section id="laboratorio" class="section-card">
            <span class="badge badge-purple">Desafio</span>
            <h2>Laboratório Interativo: Quiz de Fixação</h2>
            <p class="section-desc">Teste os seus conhecimentos adquiridos e ganhe o seu diagnóstico de prontidão para IA.</p>
            <div class="quiz-container">
                <div class="quiz-question">
                    <p><strong>Questão 1:</strong> Qual é a melhor estratégia para evitar que uma IA invente fatos (alucinação) ao gerar um plano ou resumo?</p>
                    <div class="quiz-options">
                        <button onclick="answerQuiz(this, false)">A) Aceitar a primeira resposta sem questionar.</button>
                        <button onclick="answerQuiz(this, true)">B) Fornecer o texto base/fonte e pedir para ela se limitar estritamente a ele.</button>
                        <button onclick="answerQuiz(this, false)">C) Usar frases mais curtas e sem pontuação.</button>
                    </div>
                    <div id="quiz-feedback" class="feedback-msg"></div>
                </div>
            </div>
        </section>
    </main>
    <footer>
        <div class="container">
            <p>&copy; 2026 EducaIA - Tecnologia com Propósito Pedagógico.</p>
        </div>
    </footer>
    <script src="script.js"></script>
</body>
</html>
