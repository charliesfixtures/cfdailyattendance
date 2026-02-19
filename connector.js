/* connector.js — CF Daily Attendance Power-Up */

(function() {

  var BASE_URL = 'https://charliesfixtures.github.io/cfdailyattendance/';

  TrelloPowerUp.initialize({

    'card-buttons': function(t, options) {
      return [{
        icon: BASE_URL + 'icon.svg',
        text: 'Daily Attendance',
        callback: function(t) {
          return t.popup({
            title: 'CF Daily Attendance',
            url: BASE_URL + 'index.html',
            height: 500,
          });
        }
      }];
    },

    'board-buttons': function(t, options) {
      return [{
        icon: {
          dark:  BASE_URL + 'icon.svg',
          light: BASE_URL + 'icon.svg',
        },
        text: 'Attendance',
        callback: function(t) {
          return t.popup({
            title: 'CF Daily Attendance',
            url: BASE_URL + 'index.html',
            height: 500,
          });
        }
      }];
    },

    'authorization-status': function(t, options) {
      return t.get('member', 'private', 'token').then(function(token) {
        return { authorized: !!token };
      });
    },

    'show-authorization': function(t, options) {
      return t.popup({
        title: 'Authorize Attendance',
        url: BASE_URL + 'authorize.html',
        height: 250,
      });
    },

  }, {
    appKey:  '53abc1f4686798eadbeb8f91ea79c9bb',
    appName: 'CF Daily Attendance',
  });

})();
