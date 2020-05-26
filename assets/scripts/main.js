import './vendor';
import './bootstrap';
import Ready from './tools/Ready';
import Router from './tools/Router';

const common = async () =>
    (await import(/* webpackChunkName: "dist/scripts/routes/common" */'./routes/Common')).default;
const home = async () =>
    (await import(/* webpackChunkName: "dist/scripts/routes/home" */ './routes/Home')).default;
const singleProduct = async () =>
    (await import(/* webpackChunkName: "dist/scripts/routes/single-product" */ './routes/SingleProduct')).default;
const woocommerceCheckout = async () =>
    (await import(/* webpackChunkName: "dist/scripts/routes/woocommerce/checkout" */ './routes/WoocommerceCheckout')).default;
const wooStore = async () =>
    (await import(/* webpackChunkName: "dist/scripts/routes/woocommerce/store" */ './routes/WoocommerceCheckout')).default;

const routes = new Router({
    common: common(),
    home: home(),
    singleProduct: singleProduct(),
    woocommerceCheckout: woocommerceCheckout(),
    wooStore: wooStore()
});

Ready(() => routes.loadEvents());
