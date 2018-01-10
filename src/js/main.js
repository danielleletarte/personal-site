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
    
});
    
    

