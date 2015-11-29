class PersonMainView extends Marionette.ItemView {
  constructor(model) {
    super(model);
    this.template = require('../templates/person_main.ejs');
  }
}

export default PersonMainView;
