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

    let imageContainer = document.createElement("div");
    imageContainer.style.display = "flex";
    imageContainer.style.flexWrap = "wrap";
    imageContainer.style.marginTop = "20px";

    document.body.appendChild(imageContainer);
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
    modalImg.src = src;

    modal.appendChild(closeBtn);
    modal.appendChild(modalImg);

    document.body.appendChild(modal);

    return modal;
  }

  // Function to handle the click event on images
  openModal(src, alt) {
    let modal = this.createModal(src, alt);

    let closeBtn = modal.getElementsByClassName("close")[0];
    closeBtn.onclick = function () {
      modal.style.display = "none";
      document.body.removeChild(modal);
    };
  }
}