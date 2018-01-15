import OnScreen from 'onscreen';

$(document).ready( function() {

    $(this).scrollTop(0);

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

    os.on('enter', '.about-text', (element, event) => {
        var about = document.getElementById('nav-about');
        about.className = "nav-about-active";
    });

    os.on('leave', '.about-text', (element, event) => {
        var about = document.getElementById('nav-about');
        about.className = "";
    });

    os.on('enter', '.experience-list', (element, event) => {
        var experience = document.getElementById('nav-experience');
        experience.className = "nav-experience-active";
    });

    os.on('leave', '.experience-list', (element, event) => {
        var experience = document.getElementById('nav-experience');
        experience.className = "";
    });

    os.on('enter', '.social-list', (element, event) => {
        var social = document.getElementById('nav-social');
        social.className = "nav-social-active";
    });

    os.on('leave', '.social-list', (element, event) => {
        var social = document.getElementById('nav-social');
        social.className = "";
    });

});
