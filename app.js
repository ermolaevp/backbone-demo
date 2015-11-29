import RootView from './views/root_view.js';
import PersonMainView from './views/person_main_view.js';
import PersonsView from './views/persons_view.js';
import PersonModel from './models/person_model.js';
import PersonCollection from './collections/person_collection.js';
import Pagination from './views/pagination_view.js';

const data = require('./data.json');

class Application extends Marionette.Application {
  initialize(options) {
    this.rootView = new RootView(options);
    this.personCollection = new PersonCollection(data, { model: PersonModel });
    this.personsView = new PersonsView({ collection: this.personCollection });
    this.personMainView = new PersonMainView({ model: this.personCollection.first() });
    this.pagination = new Pagination({ page: this.personCollection.first().id });
  }
  start() {
    this.rootView.render();
    this.rootView.persons.show(this.personsView);
    this.rootView.person.show(this.personMainView);
    this.rootView.pagination.show(this.pagination);
  }
}

export default Application;
