const header = '<p class="encabezado">Recetas de Cocina</p>';

const nav = `
  <div class="menu-container">
    <button class="menu-btn">Menú</button>
    <ul class="nav-list">
      <li><a href="index.html">Inicio</a></li>
      <li><a href="pagina1.html">Postres</a></li>
      <li><a href="pagina2.html">Comida Salada</a></li>
    </ul>
  </div>
`;

const footer = '<p class="pie">&copy; 2025 Recetas de Cocina - Todos los derechos reservados</p>';

document.querySelector('header').innerHTML = header;
document.querySelector('nav').innerHTML = nav;
document.querySelector('footer').innerHTML = footer;

// Función para mostrar/ocultar el menú
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-btn");
  const navList = document.querySelector(".nav-list");
  
  menuBtn.addEventListener("click", () => {
    navList.classList.toggle("active");
  });
});