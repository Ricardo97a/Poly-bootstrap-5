const app = document.getElementById('typewriter');

var typewriter = new Typewriter(app, {
    loop: true,
    delay: 75

});

typewriter
    .typeString('La Capital de Guanacaste')
    .pauseFor(200)
    .start();
