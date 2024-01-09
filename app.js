const button = document.getElementById('submit');
const containerThankYou = document.querySelector('.thank-you');
const containerRating = document.querySelector('.rating');
const rating = document.getElementById('rating');
const rates = document.querySelectorAll('.btn');

button.addEventListener('click', () => {
  containerThankYou.classList.remove('hidden');
  containerRating.style.display="none";
})


rates.forEach ((element) => {
  element.addEventListener('click', () => {
    rating.innerHTML = element.innerHTML;
  })
});
