class RootView extends Marionette.LayoutView {
  constructor(options) {
    super({
      el: options.container,
      template: require('../templates/layout.ejs'),
      regions: {
        person: '#person',
        persons: '#persons',
        pagination: '#pagination',
      },
    });
  }
}

export default RootView;
