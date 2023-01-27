
window.counter = function() {
    var span = this.querySelector('span');
    var current = parseInt(span.textContent);
    
    span.textContent = current + 1;
};
document.addEventListener('DOMContentLoaded', function(){
ScrollTrigger.init();
});