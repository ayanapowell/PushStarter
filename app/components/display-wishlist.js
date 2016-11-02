import Ember from 'ember';

export default Ember.Component.extend({
  wishlist: Ember.inject.service(),

  // actions: {
  //   removeFromWishlist(item) {
  //     console.log('remove: '+item);
  //     this.get('wishlist').remove(item);
  //   }
  // }
});
