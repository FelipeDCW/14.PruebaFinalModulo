const audio = async (animales)=>{
    let boton = document.querySelector(".reproductor")
    let audioEtiqueta = document.querySelector(".audio")
    console.log(boton);
    console.log(animales.sonido);

    boton.addEventListener("click", () => {
      audioEtiqueta.setAttribute("src", `/pruebaFinalProgramacionAvanzadaJS22-08-2024/assets/sounds/${animales.sonido}`)
      audioEtiqueta.play()
      console.log(`Reproduciendo: ${animales.src}`)
    })
}

export{
    audio
}