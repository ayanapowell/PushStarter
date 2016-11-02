import Ember from 'ember';

export default Ember.Component.extend({
  wishlist: Ember.inject.service(),

  actions: {
    addToWishlist(item) {
      this.get('wishlist').add(item); //adds to wishlist
      $('.ui.small.modal').modal('show'); //pops up modal
    }
  }
});
