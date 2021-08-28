import Loadable from '../utils/Loadable';

const HomePage = Loadable(() => import(/* webpackChunkName: "js/home" */ '@Views/pages/Home'));
const ResearchPage = Loadable(() => import(/* webpackChunkName: "js/home" */ '@Views/pages/Research'));
const MenuPage = Loadable(() => import(/* webpackChunkName: "js/home" */ '@Views/pages/Menu'));
const PromotionPage = Loadable(() => import(/* webpackChunkName: "js/home" */ '@Views/pages/Promotion'));
const NewsPage = Loadable(() => import(/* webpackChunkName: "js/home" */ '@Views/pages/News'));
const ContactPage = Loadable(() => import(/* webpackChunkName: "js/home" */ '@Views/pages/Contact'));
const CardDetailPage = Loadable(() => import(/* webpackChunkName: "js/home" */ '@Views/pages/CardDetail'));
const CartPage = Loadable(() => import(/* webpackChunkName: "js/home" */ '@Views/pages/Cart'));
const LoginPage = Loadable(() => import(/* webpackChunkName: "js/home" */ '@Views/pages/Login'));
const DashBroadPage = Loadable(() => import(/* webpackChunkName: "js/home" */ '@Views/pages/DashBroad'));
const ProductsPage = Loadable(() => import(/* webpackChunkName: "js/home" */ '@Views/pages/Products'));
const OrdersPage = Loadable(() => import(/* webpackChunkName: "js/home" */ '@Views/pages/Orders'));
const AddProductPage = Loadable(() => import(/* webpackChunkName: "js/home" */ '@Views/pages/AddProduct'));
const EditProductPage = Loadable(() => import(/* webpackChunkName: "js/home" */ '@Views/pages/EditProduct'));

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
    },
    {
        path: '/cart',
        component: CartPage
    },
    {
        path: '/login',
        component: LoginPage
    },
    {
        path: '/dashBroad',
        component: DashBroadPage
    },
    {
        path: '/products',
        component: ProductsPage
    },
    {
        path: '/orders',
        component: OrdersPage
    },
    {
        path: '/products/add',
        component: AddProductPage
    },
    {
        path: '/products/edit/:slug',
        component: EditProductPage
    }

];

export default routers;
