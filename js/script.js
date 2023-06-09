const button_el = document.getElementById("icon");
const menu_el = document.getElementById("menu");
const menu_list_el = document.getElementById("menu_list");
const nav_items_el = document.getElementById("nav_items");
console.log(menu_el);
console.log(button_el);
button_el.addEventListener("click", () => {
  if (menu_el.style.display === "block") {
    menu_el.style.display = "none";
  } else {
    menu_el.style.display = "block";
  }
});
menu_list_el.addEventListener("click", () => {
  menu_el.style.display = "none";
});
