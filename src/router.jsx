import Home from "./pages/home/Home"
import Singin from "./pages/Singin"
import Login from "./pages/Login"
import Product from "./pages/product"
import ShoppingCart from "./pages/ShoppingCart"

const routes = [
    {path: '/' , element:<Home/>},
    {path: '/signin', element:<Singin/>},
    {path: 'login', element:<Login/>},
    {path:'/product', element:<Product/>},
    {path:'/shoppingcart', element:<ShoppingCart/>}
]

export default routes