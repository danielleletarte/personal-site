import OnScreen from 'onscreen';

$(document).ready( function() {

    const os = new OnScreen({
        debounce: -5,
    });

    os.on('leave', '.landing-page', (element, event) => {
        var menu = document.getElementById('menu');
        menu.className = "menu-fixed";
    });

    os.on('enter', '.landing-page', (element, event) => {
        var menu = document.getElementById('menu');
        menu.className = "";
    });

    os.on('enter', '.about-page', (element, event) => {
        var about = document.getElementById('nav-about');
        about.className = "nav-about-active";
    });

    os.on('leave', '.about-page', (element, event) => {
        var about = document.getElementById('nav-about');
        about.className = "";
    });

    os.on('enter', '.experience-page', (element, event) => {
        var experience = document.getElementById('nav-experience');
        experience.className = "nav-experience-active";
    });

    os.on('leave', '.experience-page', (element, event) => {
        var experience = document.getElementById('nav-experience');
        experience.className = "";
    });

    os.on('enter', '.social-page', (element, event) => {
        var social = document.getElementById('nav-social');
        social.className = "nav-social-active";
    });

    os.on('leave', '.social-page', (element, event) => {
        var social = document.getElementById('nav-social');
        social.className = "";
    });

});
