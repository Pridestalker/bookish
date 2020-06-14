import '../services/mini-cart/app';
import navigation, { addSubMenuListeners } from '../src/Common/navigation';
import { enableToasts } from '../services/notifications'
import { renderSearchBar } from '../services/search-bar/app'
import { enableMailchimpForm } from '../services/mailchimp-subscribe/app'
import { renderMiniCart } from '../services/mini-cart/app'

export default {
  init() {
    enableToasts();

  },

  finalize() {
    // Javascript that fires on all pages. after page specific JS is fires.
    new navigation;
    addSubMenuListeners();
    renderSearchBar();
    enableMailchimpForm();
    renderMiniCart();
  },
};

