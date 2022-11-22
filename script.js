/*Open Form*/
const openFormButton = document.querySelector('#editButton');
const popup = document.querySelector('.popup');
const popupContainer = document.querySelector('.form__admin');
const popupCloseIcon = document.querySelector('#popup_close');

/*Profile Main Page */
const profileTitle = document.querySelector('.profile__title');
const profileText = document.querySelector('.profile__text');

/*New Profile Form */
const inputTitle = document.querySelector('.form__admin-container-item-title');
const inputText = document.querySelector('.form__admin-container-item-subtitle');

/*FUNCTIONS*/

/*Open Form Function */
function openForm() {
	inputTitle.value = profileTitle.textContent;
  inputText.value = profileText.textContent;
  popup.classList.remove('popup_visible');
}

function closeForm () {
	popup.classList.add('popup_visible');
}

openFormButton.addEventListener('click', openForm);
popupCloseIcon.addEventListener('click', closeForm);

/*New Profile Function*/
function handleFormSubmit(event) {
  event.preventDefault();
  profileTitle.textContent = inputTitle.value;
  profileText.textContent = inputText.value;
	popup.classList.add('popup_visible');
}

popupContainer.addEventListener('submit', handleFormSubmit);