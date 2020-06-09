import '../services/mini-cart/app';
import navigation, { addSubMenuListeners } from '../src/Common/navigation';
import { enableToasts } from '../services/notifications'
import { renderSearchBar } from '../services/search-bar/app'

export default {
  init() {
    enableToasts();
    renderSearchBar();
  },

  finalize() {
    // Javascript that fires on all pages. after page specific JS is fires.
    new navigation;
    addSubMenuListeners();
  },
};

