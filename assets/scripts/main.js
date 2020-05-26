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
    (await import(/* webpackChunkName: "dist/scripts/routes/woocommerce/store" */ './routes/WooStore')).default;

const routes = new Router({
    common,
    home,
    singleProduct,
    woocommerceCheckout,
    wooStore
});

Ready(() => routes.loadEvents());
