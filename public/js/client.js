var Promise = TrelloPowerUp.Promise;

// We need to call initialize to get all of our capability handles set up and registered with Trello
TrelloPowerUp.initialize({
  'board-buttons': function (t) {
    return t.get('board', 'shared', 'sprint').then((sprint) => JSON.parse(sprint)).then(function ({ number }) {
      return [{
        text: `Sprint ${number}`,
        callback: function (t) {
          return t.popup({
            title: 'Sprint',
            url: './sprint.html',
            height: 184 // we can always resize later, but if we know the size in advance, its good to tell Trello
          });
        },
        condition: 'signedIn',
        target: `Sprint ${number}`
      }];
    });
  },
  'card-badges': function (t) {
    return t.card('idList').get('idList').then(function (idList) {
      console.log('We just loaded the card name for fun: ' + idList);

      return [{
        dynamic: function () {
          return {
            text: `Sprint ${idList}`,
            color: 'green',
            refresh: 10 // in seconds
          };
        }
      }];
    });
  },
  'show-settings': function (t) {
    return t.popup({
      title: 'Settings',
      url: './settings.html',
      height: 184 // we can always resize later, but if we know the size in advance, its good to tell Trello
    });
  }
});
