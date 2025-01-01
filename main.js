// variables

const themeBar = document.getElementById('themeBar');
const themeToggler = document.getElementById('themeToggler');
const summaryBoxes = document.querySelectorAll(".summary-box");
const todayBoxes = document.querySelectorAll('.today-box');
const summaryHeading = document.getElementById('summaryHeading');
const todayHeading = document.getElementById('todayHeading');
const follNums = document.querySelectorAll('.follower-number');

// state
const theme = localStorage.getItem('theme');

// on mount - happens on first visit and during reloading
theme && document.body.classList.add(theme);

// handlers 
const addClass = (element) => {
	element.classList.toggle("active");
};

const themeSwitcher = () => {
    addClass(themeToggler);
    addClass(document.body);
    addClass(todayHeading);
    addClass(summaryHeading);
    
    summaryBoxes.forEach(box => {
        addClass(box);
    })
    todayBoxes.forEach(box => {
        addClass(box);
    })
    
    follNums.forEach(follNum => {
        addClass(follNum);
    })
    
    if (document.body.classList.contains('active')) {
        localStorage.setItem('theme', 'light-mode');
    } else {
        localStorage.removeItem("theme");
        document.body.removeAttribute('class');
    }
}

// events
themeBar.addEventListener('click', themeSwitcher)