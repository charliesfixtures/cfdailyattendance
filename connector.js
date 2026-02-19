/* connector.js — Trello Power-Up Connector
   This is the file Trello loads first. It registers what the Power-Up can do
   and tells Trello where to find the UI (index.html).
*/

var Promise = TrelloPowerUp.Promise;

TrelloPowerUp.initialize({

  // ── Adds a button inside every card ──────────────────────────────────────
  'card-buttons': function(t, options) {
    return [{
      icon: 'https://cdn-icons-png.flaticon.com/512/747/747310.png',
      text: 'Daily Attendance',
      condition: 'edit',
      callback: function(t) {
        return t.popup({
          title: 'Daily Attendance',
          url: './index.html',
          height: 600,
        });
      }
    }];
  },

  // ── Adds a button on the board toolbar ───────────────────────────────────
  'board-buttons': function(t, options) {
    return [{
      icon: {
        dark:  'https://cdn-icons-png.flaticon.com/512/747/747310.png',
        light: 'https://cdn-icons-png.flaticon.com/512/747/747310.png',
      },
      text: 'Attendance',
      callback: function(t) {
        return t.popup({
          title: 'Daily Attendance',
          url: './index.html',
          height: 600,
        });
      }
    }];
  },

  // ── Adds a section on the back of the card ────────────────────────────────
  'card-back-section': function(t, options) {
    return {
      title: 'Daily Attendance',
      icon:  'https://cdn-icons-png.flaticon.com/512/747/747310.png',
      content: {
        type: 'iframe',
        url:  t.signUrl('./index.html'),
        height: 600,
      }
    };
  },

  // ── Authorization ─────────────────────────────────────────────────────────
  'authorization-status': function(t, options) {
    return t.get('member', 'private', 'token').then(function(token) {
      return { authorized: !!token };
    });
  },

  'show-authorization': function(t, options) {
    return t.popup({
      title: 'Authorize Attendance Power-Up',
      url:   './authorize.html',
      height: 200,
    });
  },

});
