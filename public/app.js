var App = window.App = Ember.Application.create({
  LOG_TRANSITIONS: true,
  LOG_TRANSITIONS_INTERNAL: true
});

App.IndexRoute = Ember.Route.extend({
  model: function () {
    return Ember.$.getJSON('/me');
  }
});

App.PageRoute = Ember.Route.extend({});

App.Router.map(function () {
  this.route('page');
  this.route('badRoute', { path: 'test.txt'} );
});

App.Router.reopen({
  location: 'history'
});
