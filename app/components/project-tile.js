import Ember from 'ember';

export default Ember.Component.extend({
  wishlist: Ember.inject.service(),

  actions: {
    addToWishlist(item) {
      this.get('wishlist').add(item);
    },

    // removeFromWishlist(item) {
    //   console.log('remove: '+item);
    //   this.get('wishlist').remove(item);
    // }
  }
});
