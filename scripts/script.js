//Initial Cards
const initialCards = [
    {
      name: "Valle de Yosemite",
      link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
    },
    {
      name: "Lago Louise",
      link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
    },
    {
      name: "Montañas Calvas",
      link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
    },
    {
      name: "Latemar",
      link: "https://code.s3.yandex.net/web-code/latemar.jpg",
    },
    {
      name: "Parque Nacional de la Vanoise",
      link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
    },
    {
      name: "Lago di Braies",
      link: "https://code.s3.yandex.net/web-code/lago.jpg",
    },
  ];

  const initialElements = document.querySelector(".elements");
  const imageBig = document.querySelector(".bigimage");

  initialCards.forEach((item) => {
    const info = {
      name: item.name,
      link: item.link,
      formulario: false,
    };

    createElement(info);
  });

  //Open Popup
  const editBtn = document.querySelector(".profile__info-button");
  const editPopup = document.querySelector(".popup");
  const profileName = document.querySelector(".profile__info-name");
  const profileText = document.querySelector(".profile__text");
  const formName = document.querySelector(".popup__info-name");
  const formText = document.querySelector(".popup__info-text");

  editBtn.addEventListener("click", function () {
    editPopup.classList.toggle("popup__open");
    formName.value = profileName.textContent;
    formText.value = profileText.textContent;
  });

  //Close Popup
  const editCloseBtn = editPopup.querySelector(".popup__form-button");

  editCloseBtn.addEventListener("click", function () {
    editPopup.classList.toggle("popup__open");
  });

  //Popup Button
  const editForm = document.querySelector(".popup__form");

  editForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    profileName.textContent = formName.value;
    profileText.textContent = formText.value;
    editPopup.classList.toggle("popup__open");
  });

  //Add Form
  const addBtn = document.querySelector(".profile__add");
  const addPopup = document.querySelector(".add");
  const formTitle = document.querySelector(".add__form-info-title");
  const formLink = document.querySelector(".add__form-info-link");

  addBtn.addEventListener("click", function () {
    addPopup.classList.toggle("add__open");
  });

  //Close Add form
  const addCloseBtn = addPopup.querySelector(".add__form-button");

  addCloseBtn.addEventListener("click", function () {
    addPopup.classList.toggle("add__open");
  });

  //Close Big Image
  const imageCloseBtn = imageBig.querySelector(".bigimage__open-button");
  imageCloseBtn.addEventListener("click", function () {
    imageBig.classList.toggle("bigimage__opened");
  });

  //Add New Element
  const addForm = document.querySelector(".add__form");

  addForm.addEventListener("submit", function (evt) {
    evt.preventDefault();

    const info = {
      name: formTitle.value,
      link: formLink.value,
      formulario: true,
    };

    createElement(info);

    addPopup.classList.toggle("add__open");
  });

  //Create new Element
  function createElement(info) {
    const elementTemplate = document.querySelector("#element-template").content;
    const element = elementTemplate.querySelector(".elements__card").cloneNode(true);

    //Heart function
    element.querySelector(".elements__card-info-heart").addEventListener("click", function (evt) {
      evt.target.classList.toggle("elements__card-info-heart-active");
    });

    //Remove Element
    element.querySelector(".elements__card-removebtn").addEventListener("click", function (evt) {
      evt.target.closest(".elements__card").remove();
    });

    //Open Image
    const elementImage = element.querySelector(".elements__card-image");

    elementImage.addEventListener("click", function (evt) {
      imageBig.classList.toggle("bigimage__opened");
      const elementOpen = document.querySelector(".bigimage__open-image");
      const elementTitle = document.querySelector(".bigimage__open-title");
      elementOpen.src = elementUrl.src;
      elementTitle.textContent = elementName.textContent;
    });

    //Add ELement
    if (info.formulario) {
      initialElements.prepend(element);
    } else {
      initialElements.append(element);
    }

    //Element Info
    const elementName = element.querySelector(".elements__card-info-name");
    const elementUrl = element.querySelector(".elements__card-image");

    elementName.textContent = info.name;
    elementUrl.src = info.link;
  }