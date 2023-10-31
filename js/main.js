let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");
closeBtn.addEventListener("click", () =>{
    sidebar.classList.toggle("open");
    menuBtnChange(); /*calling the funtion (optional) = llamar a la función (opcional)*/
});

searchBtn.addEventListener("click", () =>{
    //sidebar open when you click on the search icon = barra lateral abierta al hacer clic en el icono de búsqueda
    sidebar.classList.toggle("open");
    menuBtnChange(); /*calling the funtion (optional) = llamar a la función (opcional)*/
});

//following are the code to change sidebar button (optional) = A continuación se muestra el código para cambiar el botón de la barra lateral (opcional).
function menuBtnChange(){
    if (sidebar.classList.contains("open")) {
        closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
    } else {
        closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
    }
}