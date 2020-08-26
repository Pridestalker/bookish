import { addSubMenuListeners, openMiniMenu } from '../src/Common/navigation';
import { enableToasts } from '../services/notifications'
import { renderSearchBar } from '../services/search-bar/app'
import { enableMailchimpForm } from '../services/mailchimp-subscribe/app'
import { renderMiniCart } from '../services/mini-cart/app'
import { renderProducts } from '../services/product-card/app'
import { Heading } from '../src/Elements/Common/Heading/Heading';


export default {
  init() {
    enableToasts();
    customElements.define('bookish-heading', Heading);
  },

  finalize() {
    // Javascript that fires on all pages. after page specific JS is fires.
    openMiniMenu();
    addSubMenuListeners();
    renderSearchBar();
    renderProducts();
    enableMailchimpForm();
    renderMiniCart();
  },
};

