import Logo from './components/Logo.vue';
import LogoSymbol from './components/LogoSymbol.vue';
import Colors from './components/Colors';
import Typography from "./components/Typography";
import Mascot from "./components/Mascot";
import Illustrations from "./components/Illustrations";
import Wallpapers from "./components/Wallpapers";
import SiteStats from "./components/SiteStats";
import NotFound from "./components/NotFound";

let LoadersAndAnimations = () => import(/* webpackChunkName: "loaders-and-animations.bundle" */'./components/LoadersAndAnimations');

export default {
    mode: 'history',

    linkActiveClass: 'font-bold',

    routes: [
        {
            path: '*',
            component: NotFound
        },
        {
            path: '/',
            component: Logo
        },
        {
            path: '/logo-symbol',
            component: LogoSymbol
        },
        {
            path: '/colors',
            component: Colors
        },
        {
            path: '/typography',
            component: Typography
        },
        {
            path: '/mascot',
            component: Mascot
        },
        {
            path: '/illustrations',
            component: Illustrations
        },
        {
            path: '/loaders-and-animations',
            component: LoadersAndAnimations
        },
        {
            path: '/wallpapers',
            component: Wallpapers
        },
        {
            path: '/site-states',
            component: SiteStats
        }
    ]
};
