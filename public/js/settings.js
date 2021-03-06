const Promise = TrelloPowerUp.Promise;
const t = TrelloPowerUp.iframe();

const sprintNumber = document.getElementById('number');

t.render(function () {
  return t.get('board', 'shared', 'sprint')
    .then((sprint) => JSON.parse(sprint))
    .then(({ number }) => {
      if (number && /[0-9]+/.test(number)) {
        sprintNumber.value = number;
      }
    }).then(function () {
      t.sizeTo('#content')
        .done();
    });
});

document.getElementById('save').addEventListener('click', function () {
  return t.set('board', 'shared', 'sprint', JSON.stringify({
    number: sprintNumber.value
  })).then(function () {
    t.closePopup();
  });
});
