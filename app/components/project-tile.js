import Ember from 'ember';

export default Ember.Component.extend({
  wishlist: Ember.inject.service(),

  percentage: Ember.computed('project.current_amount', 'project.goal_amount', function() {
    var per = (this.get('project.current_amount') / this.get('project.goal_amount')) * 100;
    return per.toFixed(2);
  }),

  actions: {
    addToWishlist(item) {
      this.get('wishlist').add(item); //adds to wishlist
      $('.ui.small.modal').modal('show'); //pops up modal
    }
  }
});
