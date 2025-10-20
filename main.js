// Main JavaScript functionality
document.addEventListener('DOMContentLoaded', function () {
    // Initialize the application
    initializeApp();
});

function initializeApp() {
    // Set up event listeners
    setupEventListeners();

    // Initialize language selector
    initializeLanguageSelector();

    // Show welcome message
    showWelcomeMessage();
}

function setupEventListeners() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Language selector change event
    document.getElementById('languageSelect').addEventListener('change', function () {
        changeLanguage(this.value);
    });
}

function initializeLanguageSelector() {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    document.getElementById('languageSelect').value = savedLanguage;
    changeLanguage(savedLanguage);
}

function changeLanguage(languageCode) {
    localStorage.setItem('selectedLanguage', languageCode);

    // Update UI text based on selected language
    const translations = {
        'en': {
            greeting: "Hello! I'm your AI farming assistant. How can I help you today?",
            voiceStatus: "Ready to help you"
        },
        'hi': {
            greeting: "नमस्ते! मैं आपका AI कृषि सहायक हूं। आज मैं आपकी कैसे मदद कर सकता हूं?",
            voiceStatus: "आपकी सहायता के लिए तैयार"
        },
        'pa': {
            greeting: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ! ਮੈਂ ਤੁਹਾਡਾ AI ਖੇਤੀਬਾੜੀ ਸਹਾਇਕ ਹਾਂ। ਅੱਜ ਮੈਂ ਤੁਹਾਡੀ ਕਿਵੇਂ ਮਦਦ ਕਰ ਸਕਦਾ ਹਾਂ?",
            voiceStatus: "ਤੁਹਾਡੀ ਮਦਦ ਲਈ ਤਿਆਰ"
        },
        'te': {
            greeting: "నమస్కారం! నేను మీ AI వ్యవసాయ సహాయకుడను. ఈరోజు నేను మీకు ఎలా సహాయం చేయగలను?",
            voiceStatus: "మీకు సహాయం చేయడానికి సిద్ధం"
        },
        'ta': {
            greeting: "வணக்கம்! நான் உங்கள் AI விவசாய உதவியாளர். இன்று நான் உங்களுக்கு எப்படி உதவ முடியும்?",
            voiceStatus: "உங்களுக்கு உதவ தயார்"
        }
    };

    const translation = translations[languageCode] || translations['en'];

    // Update greeting message
    const greetingElement = document.querySelector('.ai-message span');
    if (greetingElement) {
        greetingElement.textContent = translation.greeting;
    }

    // Update voice status
    const statusElement = document.getElementById('voiceStatus');
    if (statusElement) {
        statusElement.textContent = translation.voiceStatus;
    }
}

function showWelcomeMessage() {
    // Animate the hero section
    const heroContent = document.querySelector('.hero-content');
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(50px)';

    setTimeout(() => {
        heroContent.style.transition = 'all 1s ease';
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
    }, 100);
}

function scrollToFeatures() {
    document.getElementById('features').scrollIntoView({
        behavior: 'smooth'
    });
}

function startVoiceCall() {
    // This will be handled by voice-call.js
    toggleVoiceCall();
}

// Utility functions
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Add CSS for notification animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
`;
document.head.appendChild(style);
