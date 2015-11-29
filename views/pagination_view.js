class Pagination extends Marionette.ItemView {
  constructor(options) {
    super({
      model: new Backbone.Model({ page: options.page }),
    });
    this.template = require('../templates/pagination.ejs');
  }
  initialize() {
    this.model.on('change', this.render);
  }
  events() {
    return {
      'click button.prev': 'goPrevious',
      'click button.next': 'goNext',
    };
  }
  goPrevious() {
    this.trigger('change:page', parseInt(this.model.get('page'), 10) - 1);
  }
  goNext() {
    this.trigger('change:page', parseInt(this.model.get('page'), 10) + 1);
  }
  setPage(number) {
    this.model.set('page', number);
  }
}

export default Pagination;
