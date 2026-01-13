// DOM Elements
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');
const chatMessages = document.getElementById('chatMessages');

// Sample responses for demonstration
const responses = {
    'photosynthesis': 'Photosynthesis is the process by which plants convert sunlight, water, and carbon dioxide into oxygen and glucose (energy). It occurs in two stages: the light-dependent reactions in the thylakoids and the light-independent reactions (Calvin cycle) in the stroma. This process is essential for life on Earth as it produces oxygen and forms the base of most food chains.',
    'quadratic': 'To solve quadratic equations (ax² + bx + c = 0), you can use: 1) Factoring, 2) Completing the square, or 3) The quadratic formula: x = (-b ± √(b² - 4ac)) / 2a. The discriminant (b² - 4ac) tells you the nature of roots: if positive, two real roots; if zero, one real root; if negative, no real roots.',
    'world war 2': 'World War 2 (1939-1945) was fought between the Axis powers (Germany, Italy, Japan) and the Allied powers (Britain, Soviet Union, USA). Key events: Germany\'s invasion of Poland started the war, the Holocaust, Pearl Harbor attacked by Japan, D-Day invasion, and atomic bombs on Japan. It resulted in approximately 70-85 million deaths and reshaped the global order.',
    'study tips': 'Effective study tips: 1) Use active recall - test yourself repeatedly, 2) Spaced repetition - review material at increasing intervals, 3) Teach others - explain concepts in your own words, 4) Break into chunks - study in focused 25-30 minute sessions, 5) Eliminate distractions, 6) Get adequate sleep (7-9 hours), 7) Create practice problems, 8) Join study groups for peer learning.'
};

// Enhanced Response Bank
const responses_extended = {
    default: 'That\'s a great question! Could you provide more details or try asking about a specific topic? I can help with science, math, history, literature, and more!',
    greeting: 'Hello! 👋 I\'m happy to help you with your studies. What topic would you like to explore today?',
    homework: 'I\'d be happy to help with homework! To give you the best guidance, please share what specific concept or problem you\'re working on.',
    physics: 'Physics is the study of matter, energy, and motion. Whether you\'re interested in mechanics, thermodynamics, electricity, or modern physics, I can help break down complex concepts!',
    chemistry: 'Chemistry is fascinating! From atomic structure and bonding to reactions and equilibrium, I\'m here to explain chemical concepts clearly.',
    biology: 'Biology covers the study of living organisms. Whether it\'s cells, genetics, evolution, or ecology, feel free to ask!',
    math: 'Math is everywhere! From algebra and geometry to calculus and statistics, I can help solve problems and explain concepts.',
    help: 'I can help you with: studying for exams, understanding difficult concepts, writing essays, solving math problems, historical facts, scientific theories, language learning, and much more!'
};

// Study Notes Database
const studyNotes = {
    'photosynthesis': {
        title: '📚 Photosynthesis - Complete Study Notes',
        content: `
PHOTOSYNTHESIS - COMPREHENSIVE NOTES

📌 Definition:
Photosynthesis is the process by which plants, algae, and certain bacteria convert light energy (sunlight) into chemical energy stored in glucose.

🔬 Equation:
6CO₂ + 6H₂O + Light Energy → C₆H₁₂O₆ + 6O₂

📋 Two Main Stages:

1. LIGHT-DEPENDENT REACTIONS (Light Reactions)
   • Location: Thylakoid membranes in chloroplasts
   • Time: Occurs only in presence of light
   • Produces: ATP and NADPH
   • Process:
     - Light is absorbed by chlorophyll
     - Water molecules are split (photolysis)
     - Electrons are energized
     - Electron transport chain generates energy

2. LIGHT-INDEPENDENT REACTIONS (Calvin Cycle)
   • Location: Stroma of chloroplasts
   • Time: Can occur with or without light
   • Requires: ATP and NADPH from light reactions
   • Process:
     - Carbon fixation: CO₂ is converted to 3-PG
     - Reduction: 3-PG is reduced to G3P
     - Regeneration: G3P regenerates RuBP
   • Produces: Glucose (C₆H₁₂O₆)

🌟 Importance:
• Produces oxygen for respiration
• Produces glucose for energy
• Forms base of food chains
• Prevents CO₂ buildup in atmosphere
• Sustains most life on Earth

💡 Key Points to Remember:
✓ Chlorophyll absorbs light energy
✓ Water is split to release oxygen
✓ Occurs mainly in leaves
✓ Temperature, CO₂, and light affect rate
✓ C3 plants (most) vs C4 plants (adapted to heat)`
    },
    'quadratic': {
        title: '📚 Quadratic Equations - Complete Study Notes',
        content: `
QUADRATIC EQUATIONS - COMPREHENSIVE NOTES

📌 Definition:
A quadratic equation is a polynomial equation of second degree with the general form:
ax² + bx + c = 0 (where a ≠ 0)

🔢 Methods to Solve:

1. FACTORING METHOD
   • Write equation in standard form: ax² + bx + c = 0
   • Factor the expression: (px + q)(rx + s) = 0
   • Set each factor = 0: px + q = 0 or rx + s = 0
   • Solve for x
   Example: x² + 5x + 6 = 0 → (x + 2)(x + 3) = 0 → x = -2 or x = -3

2. COMPLETING THE SQUARE
   • Move constant to right side
   • Divide by coefficient of x²
   • Add (b/2)² to both sides
   • Factor perfect square trinomial
   • Take square root of both sides
   • Solve for x

3. QUADRATIC FORMULA (Most Reliable)
   x = (-b ± √(b² - 4ac)) / 2a
   
   Steps:
   • Identify a, b, c values
   • Calculate discriminant: Δ = b² - 4ac
   • Substitute in formula
   • Simplify

📊 DISCRIMINANT (Δ = b² - 4ac)
   • If Δ > 0: Two distinct real roots
   • If Δ = 0: One real root (repeated)
   • If Δ < 0: No real roots (complex roots)

✏️ Example Problems:
   Problem 1: x² - 5x + 6 = 0
   Solution: (x - 2)(x - 3) = 0 → x = 2 or x = 3
   
   Problem 2: 2x² + 3x - 2 = 0
   Using quadratic formula: x = (-3 ± √(9 + 16)) / 4 = (-3 ± 5) / 4
   x = 0.5 or x = -2

💡 Tips to Remember:
✓ Always write in standard form first
✓ Check discriminant for real/complex roots
✓ Verify answers by substituting back
✓ Practice with different coefficient values`
    }
};

// MCQ Database
const mcqDatabase = {
    'photosynthesis': {
        title: '❓ Photosynthesis - Multiple Choice Questions',
        questions: [
            {
                q: '1. Where does the light-dependent reaction occur?',
                options: ['A) Stroma', 'B) Thylakoid membrane', 'C) Mitochondria', 'D) Ribosome'],
                answer: 'B',
                explanation: 'Light-dependent reactions occur in the thylakoid membrane where chlorophyll absorbs light energy.'
            },
            {
                q: '2. What is the primary product of the Calvin cycle?',
                options: ['A) ATP', 'B) NADPH', 'C) Glucose', 'D) Oxygen'],
                answer: 'C',
                explanation: 'The Calvin cycle produces glucose (C₆H₁₂O₆) which is used for energy storage.'
            },
            {
                q: '3. Which pigment primarily absorbs light in photosynthesis?',
                options: ['A) Xanthophyll', 'B) Carotene', 'C) Chlorophyll a', 'D) Anthocyanin'],
                answer: 'C',
                explanation: 'Chlorophyll a is the primary photosynthetic pigment that absorbs light energy.'
            },
            {
                q: '4. The byproduct of photosynthesis that we breathe is:',
                options: ['A) CO₂', 'B) N₂', 'C) O₂', 'D) H₂O'],
                answer: 'C',
                explanation: 'Oxygen is produced during photolysis (water splitting) in light reactions.'
            },
            {
                q: '5. What is required for the light-independent reaction (Calvin cycle) to occur?',
                options: ['A) Only CO₂', 'B) ATP and NADPH', 'C) Light energy', 'D) Chlorophyll'],
                answer: 'B',
                explanation: 'The Calvin cycle requires ATP and NADPH produced by light reactions to fix CO₂.'
            }
        ]
    },
    'quadratic': {
        title: '❓ Quadratic Equations - Multiple Choice Questions',
        questions: [
            {
                q: '1. What is the standard form of a quadratic equation?',
                options: ['A) ax + b = 0', 'B) ax² + bx + c = 0', 'C) ax³ + bx² + c = 0', 'D) ax² + bx = 0'],
                answer: 'B',
                explanation: 'The standard form is ax² + bx + c = 0, where a ≠ 0.'
            },
            {
                q: '2. The quadratic formula is: x = (-b ± √(b² - 4ac)) / 2a. What is (b² - 4ac) called?',
                options: ['A) Coefficient', 'B) Roots', 'C) Discriminant', 'D) Factor'],
                answer: 'C',
                explanation: 'The discriminant (b² - 4ac) determines the nature of the roots.'
            },
            {
                q: '3. If discriminant = 0, then the quadratic has:',
                options: ['A) No real roots', 'B) One repeated root', 'C) Two distinct roots', 'D) Three roots'],
                answer: 'B',
                explanation: 'When discriminant = 0, there is one repeated real root.'
            },
            {
                q: '4. Solve: x² - 4 = 0',
                options: ['A) x = ±1', 'B) x = ±2', 'C) x = 0', 'D) x = ±4'],
                answer: 'B',
                explanation: '(x - 2)(x + 2) = 0, so x = 2 or x = -2'
            },
            {
                q: '5. For equation 2x² + 5x + 3 = 0, what are the values of a, b, c?',
                options: ['A) a=2, b=5, c=3', 'B) a=5, b=2, c=3', 'C) a=3, b=5, c=2', 'D) a=2, b=3, c=5'],
                answer: 'A',
                explanation: 'In ax² + bx + c = 0, comparing with 2x² + 5x + 3 = 0: a=2, b=5, c=3'
            }
        ]
    }
};

// Initialize event listeners
document.addEventListener('DOMContentLoaded', () => {
    sendBtn.addEventListener('click', sendMessage);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
});

// Send message function
function sendMessage() {
    const message = userInput.value.trim();
    
    if (!message) return;
    
    // Display user message
    addMessage(message, 'user');
    userInput.value = '';
    
    // Simulate typing effect and generate response
    setTimeout(() => {
        const response = generateResponse(message);
        addMessage(response, 'assistant');
    }, 500);
}

// Add message to chat
function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    contentDiv.textContent = text;
    
    messageDiv.appendChild(contentDiv);
    chatMessages.appendChild(messageDiv);
    
    // Auto scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Generate AI response
function generateResponse(userMessage) {
    const messageLower = userMessage.toLowerCase();
    
    // Check for notes requests
    if (messageLower.includes('notes') || messageLower.includes('study notes')) {
        if (messageLower.includes('photosynthesis')) {
            return generateNotes('photosynthesis');
        }
        if (messageLower.includes('quadratic')) {
            return generateNotes('quadratic');
        }
        return 'Which topic would you like notes for? Available topics: photosynthesis, quadratic equations';
    }
    
    // Check for MCQ requests
    if (messageLower.includes('mcq') || messageLower.includes('questions') || messageLower.includes('quiz')) {
        if (messageLower.includes('photosynthesis')) {
            return generateMCQ('photosynthesis');
        }
        if (messageLower.includes('quadratic')) {
            return generateMCQ('quadratic');
        }
        return 'Which topic would you like MCQs for? Available topics: photosynthesis, quadratic equations';
    }
    
    // Check for answers requests
    if (messageLower.includes('show answers') || messageLower.includes('answers')) {
        if (messageLower.includes('photosynthesis')) {
            return showMCQAnswers('photosynthesis');
        }
        if (messageLower.includes('quadratic')) {
            return showMCQAnswers('quadratic');
        }
    }
    
    // Check for specific keywords
    for (const [key, response] of Object.entries(responses)) {
        if (messageLower.includes(key)) {
            return response;
        }
    }
    
    // Check extended responses
    if (messageLower.includes('hello') || messageLower.includes('hi') || messageLower.includes('hey')) {
        return responses_extended.greeting;
    }
    
    if (messageLower.includes('homework') || messageLower.includes('assignment')) {
        return responses_extended.homework;
    }
    
    if (messageLower.includes('physics')) {
        return responses_extended.physics;
    }
    
    if (messageLower.includes('chemistry')) {
        return responses_extended.chemistry;
    }
    
    if (messageLower.includes('biology')) {
        return responses_extended.biology;
    }
    
    if (messageLower.includes('math')) {
        return responses_extended.math;
    }
    
    if (messageLower.includes('help') || messageLower.includes('what can you do')) {
        return responses_extended.help;
    }
    
    // Default response
    return responses_extended.default;
}

// Generate study notes function
function generateNotes(topic) {
    const topicLower = topic.toLowerCase();
    
    for (const [key, noteData] of Object.entries(studyNotes)) {
        if (topicLower.includes(key)) {
            return noteData.title + '\n\n' + noteData.content;
        }
    }
    
    return 'Study notes not available for this topic yet. Try: photosynthesis or quadratic equations.';
}

// Generate MCQ function
function generateMCQ(topic) {
    const topicLower = topic.toLowerCase();
    
    for (const [key, mcqData] of Object.entries(mcqDatabase)) {
        if (topicLower.includes(key)) {
            let mcqContent = mcqData.title + '\n\n';
            
            mcqData.questions.forEach((q, index) => {
                mcqContent += `${q.q}\n`;
                q.options.forEach(opt => {
                    mcqContent += `${opt}\n`;
                });
                mcqContent += `\n`;
            });
            
            mcqContent += '📝 Answers will be revealed after you submit!\n';
            mcqContent += 'Type "show answers for [topic]" to see the answers and explanations.';
            
            return mcqContent;
        }
    }
    
    return 'MCQs not available for this topic yet. Try: photosynthesis or quadratic equations.';
}

// Show MCQ answers function
function showMCQAnswers(topic) {
    const topicLower = topic.toLowerCase();
    
    for (const [key, mcqData] of Object.entries(mcqDatabase)) {
        if (topicLower.includes(key)) {
            let answersContent = '✅ ANSWERS & EXPLANATIONS\n\n';
            
            mcqData.questions.forEach((q, index) => {
                answersContent += `Question ${q.questions?.indexOf(q) + 1}:\n`;
                answersContent += `${q.q}\n`;
                answersContent += `Correct Answer: ${q.answer}\n`;
                answersContent += `Explanation: ${q.explanation}\n\n`;
            });
            
            return answersContent;
        }
    }
    
    return 'Answers not available for this topic.';
}

// Quick action function
function quickAction(topic) {
    userInput.value = topic;
    sendMessage();
}
