document.querySelector('.hamburger').addEventListener('click', function() {
    var menu = document.querySelector('.menu-principal');
    if (menu.classList.contains('show')) {
      menu.classList.remove('show'); // Oculta el menú si la clase 'show' está presente
    } else {
      menu.classList.add('show'); // Muestra el menú si la clase 'show' no está presente
    }
  });
  