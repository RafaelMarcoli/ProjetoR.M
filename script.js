function toggleMode() {
  const html = document.documentElement

  //if(html.classList.contains('light')) {
  //  html.classList.remove('light')
  //} else {
  //  html.classList.add('light')
  //}
  html.classList.toggle('light')

  const img = document.querySelector("#profile img") 
   
  if(html.classList.contains('light')) {

    img.setAttribute('src', './assets/AvatarL.png')
  } 
  else {
    img.setAttribute('src', './assets/AvatarB.png')
  }
  if (html.classList.contains("light")) {
    img.setAttribute("alt", "foto de rafael de oculos escuros e camisa preta ao lado de uma piscina")
  } else {
    img.setAttribute(
      "alt",
      "foto de rafael sorrindo, usando oculos escuro e camisa branca, imagem ao fundo um lago."
    )
  }
} 