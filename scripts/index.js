const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

/* ELEMENTS */

const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
const addCardModal = document.querySelector("#add-card-modal");
const addCardModalButton = document.querySelector(".profile__add-button");
const profileCloseModalButton = document.querySelector(
  "#profile-modal-close-button"
);
const addCardModalCloseButton = document.querySelector("#add-card-modal-close-button");



const profileTitle = document.querySelector("#profile-title");
const profileDescription = document.querySelector("#profile-description");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);

const profileEditForm = profileEditModal.querySelector(".modal__form");
const addCardFormElement = addCardModal.querySelector(".modal__form");
const addCardTitleInput = addCardFormElement.querySelector("#add-card-title-input");
const addCardImageInput = addCardFormElement.querySelector("#add-card-image-url");
const cardListElement = document.querySelector(".cards__list");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;



/* FUNCTIONS */

function getCardElement(data) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageElement = cardElement.querySelector(".card__image");
  const cardTitleElement = cardElement.querySelector(".card__title");
  const likeButton = cardElement.querySelector(".card__like-button");
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button_active");
  });
  //5 - find delete button
  //add event listener to the delete button
  //cardElement.remove();

  //6 - open picture modal
  //add click listener to card image element
  //openModal with previewImageModal



  cardTitleElement.textContent = data.name;
  cardImageElement.setAttribute("alt", data.name);
  cardImageElement.setAttribute("src", data.link);
  return cardElement;
}

function openPopup(modal) {
  modal.classList.add("modal_opened");
}

function closePopup(modal) {
  modal.classList.remove("modal_opened");
}

function renderCard(data, wrapper) {
const cardElement = getCardElement(data);
wrapper.prepend(cardElement);
}

/* EVENT HANDLERS */

function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopup(profileEditModal);
}

function handleAddCardFormSubmit(e) {
  e.preventDefault();
  const name = addCardTitleInput.value;
  const link = addCardImageInput.value;
  renderCard({name, link}, cardListElement);
  closePopup(addCardModal);
}

/* EVENT LISTENERS */

profileEditButton.addEventListener("click", () => openPopup(profileEditModal));
profileCloseModalButton.addEventListener("click", () => 
closePopup(profileEditModal));

profileEditForm.addEventListener("submit", handleProfileEditSubmit);
addCardFormElement.addEventListener("submit", handleAddCardFormSubmit);
addCardModalButton.addEventListener("click", () => openPopup(addCardModal));
addCardModalCloseButton.addEventListener("click", () => closePopup(addCardModal));

initialCards.forEach((data) => renderCard(data, cardListElement));

