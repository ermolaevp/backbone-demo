import PersonView from './person_view.js';

class PersonsView extends Marionette.CollectionView {
  constructor(options) {
    super(options);
    this.childView = PersonView;
    this.tagName = 'div';
  }
  initialize() {
    this.$el.addClass('row');
  }
}

export default PersonsView;
