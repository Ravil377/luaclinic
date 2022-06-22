const modal = document.querySelector('.modal');
const consultationBtns = document.querySelectorAll(`[data-id='enroll']`);
const questionBtns = document.querySelectorAll(`[data-id='question']`);
const body = document.querySelector('body');
const modalCloseBtn = document.querySelector('.modal__close-js');

const checkKeyPress = (e) => {
  if (e.code === "Escape") {
    closeModal();
  }
};

const checkPressOverlay = (e) => {
  if (e.target === modal) {
    closeModal();
  }
};

const openModal = (id) => {
  const enroll = modal.querySelector('.modal__content-enroll-js');
  const question = modal.querySelector('.modal__content-question-js');
  if(id) {
    enroll.style.display='none';
    question.style.display='block';
  } else {
    enroll.style.display='block';
    question.style.display='none';
  }
  modal.classList.add('modal_opened');
  body.classList.add('body_fixed');
}

const closeModal = () => {
  modal.classList.remove('modal_opened');
  body.classList.remove('body_fixed');
}

document.addEventListener('keydown', (e) => checkKeyPress(e));
modal && modal.addEventListener("click", e => checkPressOverlay(e));
modalCloseBtn && modalCloseBtn.addEventListener("click", closeModal);

questionBtns.forEach(btn => btn.addEventListener("click", (e) => {
  e.preventDefault();
  const id = e.target.closest('a').dataset.id;
  openModal(id);
}));

consultationBtns.forEach(btn => btn.addEventListener("click", (e) => {
    e.preventDefault();
    openModal();
}));