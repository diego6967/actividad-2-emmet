const header = '<p class="encabezado">Recetas de Cocina</p>';

const nav = `
  <div class="menu-container">
    <button class="menu-btn">Menú</button>
    <ul class="nav-list">
      <li><a href="index.html"><i class="fa-solid fa-utensils">Inicio</a></i></li>
      <li><a href="pagina1.html"><i class="fa-solid fa-burger">Postres</a></i>Postres</a></li>
      <li><a href="pagina2.html"><i class="fa-solid fa-pizza-slice">Comida Salada</a></i></li>
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