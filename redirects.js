// Scroll to .panamint section
document.querySelectorAll("#scrollpanamint").forEach(function(element) {
    element.addEventListener("click", function() {
        document.querySelector(".panamint").scrollIntoView({ behavior: 'smooth' });
    });
});

// Scroll to .landingpage section
document.querySelectorAll("#scrollameos").forEach(function(element) {
    element.addEventListener("click", function() {
        document.querySelector(".landingpage").scrollIntoView({ behavior: 'smooth' });
    });
});

//go to ame12OS in figma
function ame12OS() {
    console.log('hello world')
    window.open('https://bit.ly/Ame12OS-direct');
}
