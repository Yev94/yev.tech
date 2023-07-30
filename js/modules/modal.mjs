export default class Modal {
  constructor() {
    let initialImages = document.querySelectorAll('main img:not(.exlude_modal)');

    //For each initialImg create onclick function
    initialImages.forEach(initialImage => {
      //Usamos la función con flecha para preservar el contexto de la clase
      initialImage.onclick = () => {
        this.openModal(initialImage.src, initialImage.alt);
      };
    });
  };

  // Function to create the modal dynamically
  createModal(src, alt) {
    let modal = document.createElement("div");
    modal.classList.add("modal");

    let closeBtn = document.createElement("span");
    closeBtn.classList.add("close");
    closeBtn.textContent = "×";

    let modalImg = document.createElement("img");
    modalImg.classList.add("modal-content");

    // modalImg.addEventListener('click', function() {
    //     this.classList.toggle('zoom');
    // });

    modalImg.src = src;

    // modalImg.style.background = "url(" + src + ")";
    // modalImg.style.backgroundPosition = 'center';
    // modalImg.style.backgroundSize = 'cover';
    // this.addZoom(modalImg, src);

    modal.appendChild(closeBtn);
    modal.appendChild(modalImg);

    document.body.appendChild(modal);

    return modal;
  }

  // Function to handle the click event on images
  openModal(src, alt) {
    let modal = this.createModal(src, alt);

    // Un botón de cerrar por si la imagen está perfectamente ajustada a la pantalla
    let closeBtn = modal.getElementsByClassName("close")[0];
    closeBtn.onclick = function () {
      document.body.removeChild(modal);
    };

    modal.addEventListener('click', function (event) {
      if (event.target === this) {
        // Acción a ejecutar cuando se hace clic en el contenedor padre
        this.style.display = "none";
        document.body.removeChild(modal);
      }
    });

  }

  addZoom(target, srce) {
    // (A) GET CONTAINER + IMAGE SOURCE
    let container = target;
    let imgsrc = srce;
      
    // (B) LOAD IMAGE + ATTACH ZOOM
    let img = new Image();
    img.src = imgsrc;
    img.onload = () => {
      // (B1) CALCULATE ZOOM RATIO
      let ratio = img.naturalHeight / img.naturalWidth,
        percentage = ratio * 100 + "%";

      // (B2) ATTACH ZOOM ON MOUSE MOVE
      container.onmousemove = e => {
        let rect = e.target.getBoundingClientRect(),
          xPos = e.clientX - rect.left,
          yPos = e.clientY - rect.top,
          xPercent = xPos / (container.clientWidth / 100) + "%",
          yPercent = yPos / ((container.clientWidth * ratio) / 100) + "%";

        Object.assign(container.style, {
          backgroundPosition: xPercent + " " + yPercent,
          backgroundSize: img.naturalWidth + "px"
        });
      };

      // (B3) RESET ZOOM ON MOUSE LEAVE
      container.onmouseleave = e => {
        Object.assign(container.style, {
          backgroundPosition: "center",
          backgroundSize: "cover"
        });
      };
    }
  };

}