import Loadable from '../utils/Loadable';

const HomePage = Loadable(() => import(/* webpackChunkName: "js/home" */ '@Views/pages/Home'));
const ResearchPage = Loadable(() => import(/* webpackChunkName: "js/home" */ '@Views/pages/Research'));
const MenuPage = Loadable(() => import(/* webpackChunkName: "js/home" */ '@Views/pages/Menu'));
const PromotionPage = Loadable(() => import(/* webpackChunkName: "js/home" */ '@Views/pages/Promotion'));
const NewsPage = Loadable(() => import(/* webpackChunkName: "js/home" */ '@Views/pages/News'));
const ContactPage = Loadable(() => import(/* webpackChunkName: "js/home" */ '@Views/pages/Contact'));
const CardDetailPage = Loadable(() => import(/* webpackChunkName: "js/home" */ '@Views/pages/CardDetail'));

const routers = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/research',
        component: ResearchPage
    },
    {
        path: '/menu',
        component: MenuPage
    },
    {
        path: '/promotion',
        component: PromotionPage
    },
    {
        path: '/news',
        component: NewsPage
    },
    {
        path: '/contact',
        component: ContactPage
    },
    {
        path: '/menu/:slug',
        component: CardDetailPage
    }
];

export default routers;
