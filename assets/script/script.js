var navItems = document.querySelectorAll('.navbar-nav .nav-item');

function onScroll() {
  var currentPosition = window.scrollY;

  navItems.forEach(function(navItem) {
    var sectionId = navItem.querySelector('a').getAttribute('href');
    var section = document.querySelector(sectionId);
    var offset = window.innerHeight * 0.5; // Modifica questo valore per regolare l'offset

    if (section.offsetTop - offset <= currentPosition && section.offsetTop + section.offsetHeight > currentPosition) {
      navItems.forEach(function(item) {
        item.querySelector('a').classList.remove('active');
      });
      navItem.querySelector('a').classList.add('active');
    } else {
      navItem.querySelector('a').classList.remove('active');
    }
  });
}

function onNavLinkClick(event) {
  event.preventDefault();
  var targetId = event.target.getAttribute('href');
  var targetSection = document.querySelector(targetId);
  window.scrollTo({
    top: targetSection.offsetTop,
    behavior: 'smooth'
  });
}

window.addEventListener('scroll', onScroll);

var navLinks = document.querySelectorAll('.navbar-nav .nav-link');
navLinks.forEach(function(navLink) {
  navLink.addEventListener('click', onNavLinkClick);
});

//animazioni allo scroll
window.addEventListener('scroll', function() {
  var windowHeight = window.innerHeight;
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  // var textItems = document.getElementsByClassName('text');
  var chiSiamoSection = document.getElementById('chi-siamo');

  // for (var i = 0; i < textItems.length; i++) {
  //   var textItem = textItems[i];
  //   var textItemOffset = textItem.offsetTop;

  //   if (scrollTop > textItemOffset - windowHeight + 200) {
  //     textItem.classList.add('animate');
  //   }
  // }

  var chiSiamoOffset = chiSiamoSection.offsetTop;

  if (scrollTop > chiSiamoOffset - windowHeight + 200) {
    chiSiamoSection.classList.add('animate');
  }
});

// Email configuration
window.onload = function() {
  document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Ottieni i valori del form
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var form = document.getElementById("form");
    var error = document.getElementById('error');

    // Configura il tuo servizio di posta elettronica e il modello di email preimpostato
    var serviceID = "service_8suzwjy"; // Sostituisci con l'ID del tuo servizio EmailJS
    var templateID = "template_fjbl2zn"; // Sostituisci con l'ID del tuo modello di email EmailJS
    var params = { from_name: name, reply_to: email, message: message }

    // Invia l'email utilizzando EmailJS
    emailjs.send(serviceID, templateID, params)
      .then(function(response) {
        console.log("Email inviata con successo", response);
        form.reset();
        // Aggiungi qui il tuo codice per gestire la conferma dell'invio dell'email
      }, function(error) {
        console.log("Errore durante l'invio dell'email", error);
        error.innerHTML = "Errore durante l'invio dell'email";
        // Aggiungi qui il tuo codice per gestire gli errori nell'invio dell'email
      });
    console.log(params);
    })
}