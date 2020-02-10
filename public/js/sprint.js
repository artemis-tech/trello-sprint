const Promise = TrelloPowerUp.Promise;
const t = TrelloPowerUp.iframe();

const sprintNumber = document.getElementById('number');

t.render(function () {
  return t.get('board', 'shared', 'sprint')
    .then((sprint) => JSON.parse(sprint))
    .then(function ({ number }) {
      if (number && /[0-9]+/.test(number)) {
        sprintNumber.value = number;
      }
    }).then(function () {
      t.sizeTo('#content')
        .done();
    })
});
