document.getElementById('copy-email').addEventListener('click', function() {
    // Get the text input element

    navigator.clipboard.writeText("ankit2100as@gmail.com");
    
    alert("Email address copied")
});
AOS.init({
    duration: 1000, // Duration of the animation in milliseconds
});

const moreProjects = `
        <div class="project-card">
                        <img src="img/Project8.png" alt="project" class="project-image">
                        <div class="overlay">
                            <div class="icons">
                                <a href="https://github.com/AnkitSheokeen/TextUtils" target="_blank" class="icon-link">
                                    <i class="fa-brands fa-github"></i>
                                </a>
                                <a href="https://ankitsheokeen.github.io/TextUtils/" target="_blank" class="icon-link">
                                    <i class="fa-solid fa-square-arrow-up-right"></i>
                                </a>
                            </div>
                        </div>
                        <div class="bottom-text">
                            <div class="line1">TextUTil</div>
                            <div class="line2">ReactJS  Bootstrap</div>
                        </div>
                    </div>
    `;

    // Handle the "Load More" button click
    document.getElementById('load-more').addEventListener('click', function() {
        const projectGrid = document.querySelector('.project-grid');
        projectGrid.innerHTML += moreProjects; // Append new projects
    });

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    console.log('Form submitted with:', { name, email, message });

    // Clear the form
    this.reset();
});
