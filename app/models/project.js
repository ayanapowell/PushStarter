import DS from 'ember-data';

export default DS.Model.extend({
  current_amount: DS.attr('number'),
  detail: DS.attr(),
  email: DS.attr(),
  funded: DS.attr('boolean'),
  goal_amount: DS.attr('number'),
  goal_date: DS.attr('date'),
  image: DS.attr(),
  location: DS.attr(),
  name: DS.attr(),
  owner: DS.attr()
});
