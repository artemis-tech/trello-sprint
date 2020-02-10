const Promise = TrelloPowerUp.Promise;
const t = TrelloPowerUp.iframe();

const sprintLifecycle = document.getElementById('lifecycle');

t.render(function () {
  return t.get('board', 'shared', 'lifecycle').then(function (savedLifecycle) {
    if (savedLifecycle && /[0-9]+/.test(savedLifecycle)) {
      sprintLifecycle.value = savedLifecycle;
    }
  }).then(function () {
    t.sizeTo('#content')
      .done();
  })
});

document.getElementById('save').addEventListener('click', function () {
  return t.set('board', 'shared', 'lifecycle', sprintLifecycle.value).then(function () {
    t.closePopup();
  })
})
