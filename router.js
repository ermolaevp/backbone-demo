import PersonMainView from './views/person_main_view.js';

class Router extends Marionette.AppRouter {
  routes() {
    return {
      'persons/:id': 'persons',
    };
  }

  initialize(app) {
    this.app = app;
    this.app.pagination.on('change:page', this.persons.bind(this));
  }

  persons(id) {
    this.app.personCollection.where({ active: true }).forEach(person => person.set('active', false));
    const personModel = this.app.personCollection.get(id);
    personModel.set('active', true);
    const personMainView = new PersonMainView({ model: personModel });
    this.app.rootView.person.show(personMainView);
    this.app.pagination.setPage(id);
  }
}

export default Router;
