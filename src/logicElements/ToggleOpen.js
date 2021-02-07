export default function toggleOpen(i) {
  const cards = document.querySelectorAll('.js-card');
  cards.forEach((item) => {
    // eslint-disable-next-line eqeqeq
    if (i == item.dataset.card) {
      let wrapper = item.querySelector('.js-content-wrap');
      wrapper.classList.toggle('is-open');
    }
  });
}
