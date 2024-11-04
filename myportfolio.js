let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('active');
}


//dark mode
//let darkmode = document.querySelector('#darkmode');

//darkmode.onclick = () =>{
  //  if(darkmode.classList.contains('bx-moon')){
    //    darkmode.classList.replace('bx-moon', 'bx-sun');
      //  document.body.classList.add('active');
    //}
    //else{
      //  darkmode.classList.replace('bx-sun', 'bx-moon');
        //document.body.classList.remove('active');
    //}
//} 
let darkmode = document.querySelector('#darkmode');

// Check for saved mode in localStorage and apply it on page load
if (localStorage.getItem("theme") === "dark") {
    darkmode.classList.replace('bx-moon', 'bx-sun');
    document.body.classList.add('active');
} else {
    darkmode.classList.replace('bx-sun', 'bx-moon');
    document.body.classList.remove('active');
}

// Toggle theme and save preference in localStorage
darkmode.onclick = () => {
    if (darkmode.classList.contains('bx-moon')) {
        // Switch to dark mode
        darkmode.classList.replace('bx-moon', 'bx-sun');
        document.body.classList.add('active');
        localStorage.setItem("theme", "dark"); // Save dark mode in localStorage
    } else {
        // Switch to light mode
        darkmode.classList.replace('bx-sun', 'bx-moon');
        document.body.classList.remove('active');
        localStorage.setItem("theme", "light"); // Save light mode in localStorage
    }
};

// Smooth scrolling for navigation links
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default link behavior
        const targetId = this.getAttribute('href').substring(1); // Get the target section's ID
        const targetSection = document.getElementById(targetId);

        // Smooth scroll to the target section
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default link behavior
        const targetId = this.getAttribute('href').substring(1); // Get the target section's ID
        const targetSection = document.getElementById(targetId);

        // Smooth scroll to the target section
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });

            // Update the browser history without adding #section to the URL
            history.pushState(null, null, ' ');
        }
    });
});


