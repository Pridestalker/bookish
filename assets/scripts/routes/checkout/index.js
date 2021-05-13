import {
    checkForDifferentShipping,
    openLoginForm,
    openCreateAccount,
    addSelectChangeListeners
} from '../../src/Woocommerce/Checkout';
import {addListenToAddressFillRequest, insertModalButton, renderPostCodeModal} from "../../services/checkout/app";

export default {
    init() {
        insertModalButton();
        renderPostCodeModal();
        addListenToAddressFillRequest();
    },
    finalize() {
        checkForDifferentShipping();
        openLoginForm();
        openCreateAccount();
        addSelectChangeListeners();
    },
};
