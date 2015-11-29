class PersonModel extends Backbone.Model {
  defaults() {
    return {
      active: false,
      first_name: '',
      last_name: '',
      age: 0,
      location: '',
    };
  }
}

export default PersonModel;
