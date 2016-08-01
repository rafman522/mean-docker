(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'device-app',
      template: '<h1>IOT Device Manager</h1>'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));