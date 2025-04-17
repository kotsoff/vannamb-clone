document.addEventListener('DOMContentLoaded', function() {
    // Accordion functionality
    const accordionButtons = document.querySelectorAll('.accordion__button');
    
    accordionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const content = this.nextElementSibling;
            
            // Toggle active class on button
            this.classList.toggle('active');
            
            // Toggle active class on content
            content.classList.toggle('active');
            
            // Close other accordion items
            accordionButtons.forEach(otherButton => {
                if (otherButton !== button) {
                    otherButton.classList.remove('active');
                    otherButton.nextElementSibling.classList.remove('active');
                }
            });
        });
    });
    
    // Contact form validation
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const phoneInput = document.getElementById('phone');
            const agreementCheckbox = document.getElementById('agreement');
            
            let isValid = true;
            
            // Simple validation
            if (!nameInput.value.trim()) {
                isValid = false;
                showError(nameInput, 'Пожалуйста, введите ваше имя');
            } else {
                removeError(nameInput);
            }
            
            if (!emailInput.value.trim() || !isValidEmail(emailInput.value)) {
                isValid = false;
                showError(emailInput, 'Пожалуйста, введите корректный email');
            } else {
                removeError(emailInput);
            }
            
            if (!phoneInput.value.trim() || !isValidPhone(phoneInput.value)) {
                isValid = false;
                showError(phoneInput, 'Пожалуйста, введите корректный номер телефона');
            } else {
                removeError(phoneInput);
            }
            
            if (!agreementCheckbox.checked) {
                isValid = false;
                showError(agreementCheckbox, 'Вы должны согласиться с обработкой персональных данных');
            } else {
                removeError(agreementCheckbox);
            }
            
            if (isValid) {
                // In a real application, you would send the form data to a server here
                alert('Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в течение 30 минут.');
                contactForm.reset();
            }
        });
    }
    
    // File upload button
    const fileUploadBtn = document.querySelector('.file-upload');
    
    if (fileUploadBtn) {
        fileUploadBtn.addEventListener('click', function() {
            // In a real application, this would trigger a file upload dialog
            alert('В реальном приложении здесь откроется диалог выбора файла.');
        });
    }
    
    // Calculate cost button
    const calculateCostBtn = document.querySelector('.hero .btn--primary');
    
    if (calculateCostBtn) {
        calculateCostBtn.addEventListener('click', function() {
            // In a real application, this would open a calculator form
            alert('В реальном приложении здесь откроется форма расчета стоимости.');
        });
    }
    
    // Get consultation button
    const getConsultationBtn = document.querySelector('.process .btn--primary');
    
    if (getConsultationBtn) {
        getConsultationBtn.addEventListener('click', function() {
            // Scroll to contact form
            const contactSection = document.querySelector('.contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
    
    // Helper functions
    function showError(input, message) {
        // Remove any existing error
        removeError(input);
        
        // Create error message
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        
        // Add error styling to input
        input.classList.add('error');
        
        // Insert error message after input
        const parent = input.parentElement;
        parent.insertBefore(errorDiv, input.nextElementSibling);
    }
    
    function removeError(input) {
        // Remove error styling
        input.classList.remove('error');
        
        // Remove error message if exists
        const parent = input.parentElement;
        const errorDiv = parent.querySelector('.error-message');
        if (errorDiv) {
            parent.removeChild(errorDiv);
        }
    }
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function isValidPhone(phone) {
        // Simple validation for Russian phone numbers
        const phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phone.replace(/\D/g, ''));
    }
});

// Add styles for form validation
document.head.insertAdjacentHTML('beforeend', `
    <style>
        .error {
            border-color: #ff0000 !important;
        }
        
        .error-message {
            color: #ff0000;
            font-size: 1.2rem;
            margin-top: 5px;
        }
    </style>
`);