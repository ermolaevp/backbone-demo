class PersonView extends Marionette.ItemView {
  constructor(model) {
    super(model);
    this.template = require('../templates/person.ejs');
  }
  initialize() {
    this.model.on('change', this.render);
  }
}

export default PersonView;
