if (process.env.NODE_ENV !== 'production') {
    require('preact/debug');
}

import './vendor';
import './bootstrap';
import {ComponentRouter, fullReady as Ready, PageRouter as Router} from "@webreact/webreactor";
import routes from './routes';
import components from './components';

const router = new Router(routes);
const componentLoader = new ComponentRouter(components);

Ready(() => {
    router.loadEvents();
    componentLoader.loadEvents();
});
