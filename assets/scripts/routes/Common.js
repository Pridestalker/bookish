import '../services/mini-cart/app';
import '../services/notifications/toasts/ToastWrapper';
import navigation from '../src/Common/navigation';

export default {
  init() {
    new navigation;
  },

  finalize() {
    // Javascript that fires on all pages. after page specific JS is fires.
  },
};
