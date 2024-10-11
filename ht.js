document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.form-slide');
    const nextButtons = document.querySelectorAll('.next-button');

    nextButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            slides[index].classList.remove('active');
            slides[index + 1].classList.add('active');
        });
    });

    document.getElementById('profileForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const experience = document.querySelector('input[name="experience"]:checked').value;
        const background = document.getElementById('background').value;
        const employed = document.getElementById('employed').checked ? 'Yes' : 'No';
        const career = document.getElementById('career').value;

        const profileDisplay = document.getElementById('profileDisplay');
        profileDisplay.innerHTML = `
            <h3>User Profile</h3>
            <p><strong>Years of Experience:</strong> ${experience}</p>
            <p><strong>Professional Background:</strong> ${background}</p>
            <p><strong>Currently Employed:</strong> ${employed}</p>
            <p><strong>Desired Career Track:</strong> ${career}</p>
        `;
    });
});
