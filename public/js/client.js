var Promise = TrelloPowerUp.Promise;

const showSettings = function (t) {
  return t.popup({
    title: 'Settings',
    url: './settings.html',
    height: 184 // we can always resize later, but if we know the size in advance, its good to tell Trello
  });
};

// We need to call initialize to get all of our capability handles set up and registered with Trello
TrelloPowerUp.initialize({
  'board-buttons': function (t) {
    return t.get('board', 'shared', 'lifecycle').then(function (lifecycle) {
      return [{
        text: `Sprint ${lifecycle}`,
        callback: showSettings,
        condition: 'signedIn',
        target: `Sprint ${lifecycle}`
      }];
    });
  },
  'card-badges': function (t) {
    return t.card('name').get('name').then(function (cardName) {
      console.log('We just loaded the card name for fun: ' + cardName);

      return [{
        dynamic: function () {
          return {
            text: 'Dynamic ' + (Math.random() * 100).toFixed(0).toString(),
            color: 'green',
            refresh: 10 // in seconds
          };
        }
      }];
    });
  },
  'show-settings': function (t) {
    return showSettings(t);
  }
});
