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

//Open and Close Popup Form with Escape and click outside
const openPopup =document.querySelector(".popup");
const profileBtn =document.querySelector(".profile__info-button-image");
const closePopup =document.querySelector(".popup__form-button");
const popupForm = document.querySelector(".popup__form");
const popupTitle = openPopup.querySelector(".popup__title");

const popupBtn = document.querySelector(".popup__info-button");
const popupInfoName =document.querySelector(".popup__info-name");
const popupInfoText = document.querySelector(".popup__info-text");
const profileInfoName = document.querySelector(".profile__info-name");
const profileInfoText = document.querySelector(".profile__text");

function  formAdd(open){
    open.style.display = "flex";
}

function close(closed){
    closed.style.display = "none";
}

function popupSave(evt){
    evt.preventDefault();

    close(openPopup);
    profileInfoName.textContent = popupInfoName.value;
    profileInfoText.textContent = popupInfoText.value;
}
function esc(evt){
    if (evt.key === "Escape"){
        close(openPopup);
    }
}

openPopup.addEventListener("click", function (evt){
    if (evt.target === popupForm || evt.target === popupInfoText ||  evt.target === popupInfoName || evt.target === popupTitle) {
        formAdd(openPopup);
    }
    else {
        close(openPopup);
    }
});

document.addEventListener("keydown",  esc);

profileBtn.addEventListener("click", () => {
    formAdd(openPopup);
} );
closePopup.addEventListener("click", () =>{
    close(openPopup);
});
popupBtn.addEventListener("click", popupSave);

//Open and Close Images with Escape and click outside
const bigImage = document.querySelector(".bigimage");
const closeBigImage = document.querySelector(".bigimage__open-button-image");

closeBigImage.addEventListener("click", function(){
  bigImage.classList.remove("bigimage__opened");
});

bigImage.addEventListener("click", function (){
  bigImage.classList.remove("bigimage__opened");
});

document.addEventListener("keydown", function (evento){
    if (evento.key === "Escape"){

      bigImage.classList.remove("bigimage__opened");
    }
});

//Open and Close Add Image Form with Escape and click outside
const openAdd =document.querySelector(".add");
const profileAdd = document.querySelector(".profile__add-image");
const closeAdd = document.querySelector(".add__form-button-image");
const closeAddForm = openAdd.querySelector(".add__form");
const addTitle = openAdd.querySelector(".add__form-title");

const addFormTitle =document.querySelector(".add__form-info-title");
const addFormLink = document.querySelector(".add__form-info-link");

document.addEventListener("keydown", function (event){
    if (event.key === "Escape") {
        close(openAdd);
    }
});

openAdd.addEventListener("click", function (evt){
    if (evt.target === closeAddForm || evt.target === addTitle || evt.target === addFormTitle || evt.target === addFormLink){
        formAdd(openAdd);
    }
    else {
        close(openAdd);
    }
});

profileAdd.addEventListener("click", () =>{
    formAdd(openAdd);
});
closeAdd.addEventListener("click", () => {
    close(openAdd);
});
