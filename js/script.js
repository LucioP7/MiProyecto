// Elementos del DOM
const postText = document.getElementById("post-text");
const postButton = document.getElementById("post-button");
const postsContainer = document.getElementById("posts");

// Función para crear una nueva publicación
function createPost() {
    const text = postText.value;
    if (text) {
        const post = document.createElement("div");
        post.className = "post";
        post.innerHTML = text;
        postsContainer.appendChild(post);
        postText.value = "";
    }
}

// Manejo de clic en el botón de publicación
postButton.addEventListener("click", createPost);

// Manejo de la tecla Enter en el área de texto
postText.addEventListener("keydown", function (event) {
    if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault(); // Evitar el salto de línea
        createPost();
    }
});
