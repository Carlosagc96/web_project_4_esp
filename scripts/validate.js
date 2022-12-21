const errorShowup = (form, inputElement, messageError) => {
  const errorElement = form.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add("popup__valid");
  errorElement.textContent = messageError;
  errorElement.classList.remove("popup__active-error")
}

const hideError = (form, inputElement) => {
  const errorElement = form.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove("popup__valid");
  errorElement.classList.add("popup__active-error");
  errorElement.textContent = "";
};

const validityCheck = (form, inputElement) => {
  if (!inputElement.validity.valid) {
      errorShowup(form, inputElement, inputElement.validationMessage);
  }else {
      hideError( form, inputElement);
  }
};

const invalidElement = (inputList) => {
  return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
  });
};

const newEvents = (inputList, buttonElement, other) => {
  if(other === "profile") {
      if (invalidElement(inputList)) {
          buttonElement.classList.add("button-active");
          buttonElement.disabled = true;
      }
      else {
          buttonElement.classList.remove("button-active");
          buttonElement.disabled = false;
      }
  } else if (other === "element") {
      if (invalidElement(inputList)) {
          buttonElement.classList.add("button-active");
          buttonElement.disabled = true;
      }
      else {
          buttonElement.classList.remove("button-active");
          buttonElement.disabled = false;
      }
  }
};

function PopupAddEvents(form, other = "profile"){
  let inputList = null
  let buttonElement = null

  if (other === "profile"){
      inputList = Array.from(form.querySelectorAll(".form-input-popup"));
      buttonElement = form.querySelector(".popup__info-button");
  }
  else if (other === "element"){
      inputList = Array.from(form.querySelectorAll(".form-input-photo"));
      buttonElement = form.querySelector(".add__form-info-button")
  }

  newEvents(inputList, buttonElement);

  inputList.forEach(function (inputElement){
      inputElement.addEventListener("input", function (){
          validityCheck(form, inputElement);

          newEvents(inputList, buttonElement, other);
      });
  });
};

const enableValidation = () => {
  let formItems = Array.from(document.querySelectorAll(".popup__form"));
  formItems.forEach((form) => {
      form.addEventListener("submit", (evt) => {
          evt.preventDefault();
      });
      PopupAddEvents(form);
  });

  formItems = Array.from(document.querySelectorAll(".add__form"));
  formItems.forEach((form) => {
      form.addEventListener("submit", (evt) => {
          evt.preventDefault();
      });
      PopupAddEvents(form, "element");
  });
};

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".form-input-popup",
  submitButtonSelector: ".popup__info-button",
  inactiveButtonClass: "button-active",
  inputErrorClass: "popup__active-error",
  errorClass: "popup__valid"
});






