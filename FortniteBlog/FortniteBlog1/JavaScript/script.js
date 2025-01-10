const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");

// Base de dados ampliada
const botData = [
    { keywords: ["olá", "oi", "e aí", "ola", "eai", "opa"], responses: ["Olá! Como vai você?"] },
    { keywords: ["modo criativo", "Modo Criativo", "modo Criativo", "Modo criativo", "funciona o Criativo", "funciona o criativo", "Funciona o criativo", "Funciona o Criativo"], responses: ["O modo criativo é um modo de jogo onde você pode criar alguns mapas ou jogar em mapas de outras pessoas."] },
    { keywords: ["Salve o Mundo", "salve o mundo", "Salve O Mundo"], responses: ["O modo Salve o Mundo consiste em você montar uma base para se proteger de ordas de zumbis, que vão ficando cada vez mais fortes."] },
    { keywords: ["battle royale", "Battle Royale"], responses: ["O modo Battle Royale é um modo de jogo onde você cai em uma ilha com mais 99 pessoas e quem sobreviver por último ganha."] },
    { keywords: ["o que é fortnite", "sobre fortnite", "Sobre o jogo", "sobre o jogo"], responses: ["O Fortnite é um jogo criado pela Epic Games, que tem como modo principal o Battle Royale, mas inclui outros modos."] },
    { keywords: ["modos de jogo", "modos"], responses: ["Os modos principais são Battle Royale, Criativo e Salve o Mundo.", "Você pode explorar modos como Battle Royale, Criativo ou ajudar amigos em Salve o Mundo!"] },
    { keywords: ["dicas", "vencer", "como ganhar"], responses: ["Construa rápido e esteja atento à tempestade!", "Use os recursos com sabedoria e fique de olho nos adversários.", "Não se esqueça de coletar bons itens no começo do jogo."] },
    { keywords: ["skins", "roupas"], responses: ["As skins são basicamente roupas ou personagens que você pode equipar e jogar. Além das skins de personagem tem skins de picaretas, asa-deltas e carros."] },
    { keywords: ["armas", "melhores armas"], responses: ["O rifle de assalto tático é uma ótima escolha!", "Armas lendárias sempre fazem diferença, procure por baús raros.", "Explosivos podem virar o jogo, especialmente no final."] },
    { keywords: ["eventos", "show"], responses: ["Os eventos/shows são coisas que o Fortnite usa para contar um pouco mais da história do jogo para os jogadores e para divertir, como foi o caso do show do Travis Scott."] },
    { keywords: ["mapa", "locais", "lugares"], responses: ["O mapa do Fortnite muda muito, toda temporada o mapa sofre modificações, então os locais nunca são os mesmo."] },
    { keywords: ["danças", "emoções"], responses: ["As danças são icônicas! Os jogadores usam as danças para provocar os seus adversários após mata-los, mas também para de divertir nos eventos de show."] },
    { keywords: ["temporada", "temporadas", "novidades"], responses: ["Cada temporada traz novas mecânicas! A temporada atual tem ótimas novidades. Já conferiu o passe de batalha?"] },
    { keywords: ["gosto", "meu favorito", "minha favorita", "gostei"], responses: ["Que legal! Me conta mais sobre o que você gosta no jogo. Adoro saber o que os jogadores curtem!"] },
    { keywords: ["não gosto", "não entendo", "não sei"], responses: ["Tudo bem! Posso te ajudar a entender melhor o jogo.", "Fortnite tem muita coisa, mas você pode encontrar algo divertido!", "Nem todo mundo gosta de tudo. Qual parte você acha mais difícil?"] },
    { keywords: ["sim", "claro", "com certeza", "pode ser", "boa ideia", "vamos fazer isso"], responses: ["Então tá, oque você quer saber sobre o jogo?"] },
    { keywords: ["como o jogo funciona",], responses: ["É basicamente um jogo battle royale que diferente dos outros você pode contruir, arrecadando materias e procurando melhorar o seu armamento durante a partida. Mas também inclui outros modos."] },
    { keywords: ["estou animado", "estou legal","to legal", "estou bem", "to bem", "to animado", "vou bem",], responses: ["Que bom! Oque você quer saber sobre Fortnite?"] },
    { keywords: ["estou triste", "estou mal","to mal", "estou desanimado", "to desanimado", "to triste", "triste", "desaminado"], responses: ["Que droga cara. Oque você acha de falar um pouco de fortnite, para se animar?"] },
];

// Função para encontrar a melhor resposta com base nas palavras-chave
function getBotResponse(userMessage) {
    userMessage = userMessage.toLowerCase();

    for (let entry of botData) {
        if (entry.keywords.some(keyword => userMessage.includes(keyword))) {
            const randomIndex = Math.floor(Math.random() * entry.responses.length);
            return entry.responses[randomIndex];
        }
    }

    // Resposta padrão
    return "Hmm, não entendi muito bem. Pode explicar melhor ou fazer outra pergunta?";
}

// Função para exibir mensagens no chat
function appendMessage(content, sender) {
    const message = document.createElement("div");
    message.className = `message ${sender}`;
    message.textContent = content;
    chatBox.appendChild(message);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Função para processar mensagens enviadas pelo usuário
function sendMessage() {
    const userMessage = userInput.value.trim();
    if (userMessage) {
        appendMessage(userMessage, "user");
        const botResponse = getBotResponse(userMessage);
        appendMessage(botResponse, "bot");
        userInput.value = "";
    }
}

// Mensagem inicial do bot
appendMessage("Bem-vindo ao chatbot Fortnite! Diga olá ou algo assim para começar. Estou aqui para ajudar!", "bot");
