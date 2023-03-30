const menu = [
  {
    name: "Home",
    link: "/",
    items: [],
  },
  {
    name: "About",
    link: "/about",
    items: [],
  },
  {
    name: "Products",
    link: "/products",
    items: [
      {
        name: "Product 1",
        link: "/products/1",
        items: [],
      },
      {
        name: "Product 2",
        link: "/products/2",
        items: [
          {
            name: "Product 2.1",
            link: "/products/2/1",
            items: [],
          },
        ],
      },
    ],
  },
  {
    name: "Services",
    link: "/services",
    items: [
      {
        name: "Service 1",
        link: "/services/1",
        items: [
          {
            name: "Service 1.1",
            link: "/services/1/1",
            items: [],
          },
        ],
      },
      {
        name: "Service 2",
        link: "/services/2",
        items: [
          {
            name: "Service 2.1",
            link: "/services/2/1",
            items: [],
          },
          {
            name: "Service 2.2",
            link: "/services/2/2",
            items: [],
          },
        ],
      },
    ],
  },
];
console.log(menu);

function buildMenu(menu) {
  const ul = document.createElement("ul");

  menu.forEach((items) => {
    const li = document.createElement("li");
    li.textContent = items.name;

    if (items.items && items.items.length > 0) {
      li.appendChild(buildMenu(items.items));
    }

    ul.appendChild(li);
  });

  return ul;
}

const menuContainer = document.getElementById("menucontainer");
menuContainer.appendChild(buildMenu(menu));

var menuItems = document.getElementById("menucontainer");

function activateMenuItem() {
  // Eliminar la clase activa de todos los elementos del menú
  for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].classList.remove("active");
  }

  // Agregar la clase activa al elemento seleccionado
  this.classList.add("active");
}

// Agregar el controlador de eventos "click" a cada elemento del menú
for (var i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("click", activateMenuItem);
}
