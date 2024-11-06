let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let menuOptions = document.querySelectorAll('.navbar a'); // assuming options are links
let darkmode = document.querySelector('#darkmode');

// Navbar toggle on click
menu.onclick = () => {
    navbar.classList.toggle('active');
};

// Close the navbar when any option is clicked
menuOptions.forEach(option => {
    option.onclick = () => {
        navbar.classList.remove('active');
    };
});

// Apply saved theme on page load
if (localStorage.getItem("theme") === "dark") {
    darkmode.classList.replace('bx-moon', 'bx-sun');
    document.body.classList.add('active');
} else {
    darkmode.classList.replace('bx-sun', 'bx-moon');
    document.body.classList.remove('active');
}

// Dark mode toggle with localStorage save
darkmode.onclick = () => {
    if (darkmode.classList.contains('bx-moon')) {
        darkmode.classList.replace('bx-moon', 'bx-sun');
        document.body.classList.add('active');
        localStorage.setItem("theme", "dark");
    } else {
        darkmode.classList.replace('bx-sun', 'bx-moon');
        document.body.classList.remove('active');
        localStorage.setItem("theme", "light");
    }
};

// Smooth scrolling and update browser history
menuOptions.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default behavior
        const targetId = this.getAttribute('href').substring(1); // Get target section ID
        const targetSection = document.getElementById(targetId);

        // Smooth scroll to target section
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });

            // Update browser history without #section in the URL
            history.pushState(null, null, ' ');
        }
    });
});
