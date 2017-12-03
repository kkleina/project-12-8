$(function() {

  // animations ScrollReveal
  window.sr = ScrollReveal();
  sr.reveal('.jumbotron, .wedo img, .btn', {
    duration: '1000',
    reset: true
  });
  sr.reveal('section .container p:nth-of-type(odd), footer p', {
    origin: 'left',
    distance: '100%',
    duration: '1000',
    reset: true
  });
  sr.reveal('.container p:nth-of-type(even), .wedo h2', {
    origin: 'right',
    distance: '100%',
    duration: '1000',
    reset: true
  });
  sr.reveal('section h1', {
    origin: 'right',
    distance: '50%',
    duration: '1000',
    opacity: '1',
    reset: true
  });
  sr.reveal('.works .card', {
    origin: 'bottom',
    distance: '100%',
    duration: '1000',
    reset: true
  }, 200);

});
