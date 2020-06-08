import '../services/mini-cart/app';
import navigation, { addSubMenuListeners } from '../src/Common/navigation';
import { enableToasts } from '../services/notifications'

export default {
  init() {
    enableToasts();
  },

  finalize() {
    // Javascript that fires on all pages. after page specific JS is fires.
    new navigation;
    addSubMenuListeners();
  },
};

