const newCardText = document.getElementById('new-card-text');
const content = document.querySelector('.content');

function addCard(context, source) {
  // create new card
  const card = document.createElement('div');
  card.className = 'card';
  card.innerText = source.value;
  context.appendChild(card);
  source.value = '';
}
