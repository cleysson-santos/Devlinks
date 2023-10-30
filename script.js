function toggleMode (){
  //Alterar modo de visualização da página
  const html = document.documentElement;

  html.classList.toggle('light');

  //Alterar imagem

  // pegar a tag img
  //const img = document.querySelector("#profile img");

  // substituir a imagem
  //if (html.classList.contains("light")){
  //  img.setAttribute("src", "./assets/avatar-light.png")
  //} else {
    // se tiver sem light mode, manter a imagem normal
  //  img.setAttribute("src", "./assets/cley.png")
  //}
}