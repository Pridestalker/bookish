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

const routes = new Router({
    common: common(),
    home: home(),
    singleProduct: singleProduct()
});

Ready(() => routes.loadEvents());
