import '../services/mini-cart/app';
import navigation from '../src/Common/navigation';
import { enableToasts } from '../services/notifications'

export default {
  init() {
    new navigation;
    enableToasts()
  },

  finalize() {
    // Javascript that fires on all pages. after page specific JS is fires.
  },
};

