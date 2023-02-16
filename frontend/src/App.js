import { BrowserRouter, Route, Routes } from "react-router-dom"
import ProtectedRoutesComponent from "./components/ProtectedRoutesComponent";
import FooterComponent from "./components/footercomponent";
import HeaderComponent from "./components/headercomponent";
import RoutesWithUserChatComponent from "./components/user/routeswithuserchatcomponent";

import AdminEditProductPage from "./pages/admin/admineditproductpage";
import AdminAnalyticsPage from "./pages/admin/adminanalyticspage";
import AdminChatPage from "./pages/admin/adminchatspage";
import AdminCreateProductPage from "./pages/admin/admincreateproductpage";
import AdminEditUserPage from "./pages/admin/adminedituserpage";
import AdminOrderDetailPage from "./pages/admin/adminorderdetailpage";
import AdminOrderPage from "./pages/admin/adminorderpage";
import AdminProductPage from "./pages/admin/adminproductpage";
import AdminUserPage from "./pages/admin/adminuserpage";

import CartPage from "./pages/cartpage";
import HomePage from "./pages/homepage";
import LoginPage from "./pages/loginpage";
import ProductDetailPage from "./pages/productdetailpage";
import ProductListPage from "./pages/ProductListPage";
import RegisterPage from "./pages/registerpage";

import UserCartDetailPage from "./pages/user/usercartdetailspage";
import UserOrderDetailPage from "./pages/user/userorderdetailpage";
import UserOrderPage from "./pages/user/userorderpage";
import UserProfilePage from "./pages/user/userprofilepage";
import ScrollToTop from "./utils/scrolltotop";
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <HeaderComponent />
      <Routes>
        <Route element={<RoutesWithUserChatComponent />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/productlist/category/:categoryName" element={<ProductListPage />} />
          <Route path="/productlist/category/:categoryName/search/:searchQuery" element={<ProductListPage />} />
          <Route path="/productlist/category/:categoryName/search/:searchQuery/:pageNumParam" element={<ProductListPage />} />
          <Route path="/productlist/category/:categoryName/:pageNumParam" element={<ProductListPage />} />
          <Route path="/productlist/search/:searchQuery" element={<ProductListPage />} />
          <Route path="/productlist/search/:searchQuery/:pageNumParam" element={<ProductListPage />} />
          <Route path="/productlist/:pageNumParam" element={<ProductListPage />} />
          <Route path="/productlist" element={<ProductListPage />} />
          <Route path="/product-detail/:id" element={<ProductDetailPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* user pages routes */}
          <Route element={<ProtectedRoutesComponent admin={false} />}>
            <Route path="/user" element={<UserProfilePage />} />
            <Route path="/user/myorder" element={<UserOrderPage />} />
            <Route path="/user/cartdetail" element={<UserCartDetailPage />} />
            <Route path="/user/orderdetail/:id" element={<UserOrderDetailPage />} />
          </Route>
        </Route>




        {/* admin pages routes  */}
        <Route element={<ProtectedRoutesComponent admin={true} />}>
          <Route path="/admin/users" element={<AdminUserPage />} />
          <Route path="/admin/edit-user/:id" element={<AdminEditUserPage />} />
          <Route path="/admin/product" element={<AdminProductPage />} />
          <Route path="/admin/create-product" element={<AdminCreateProductPage />} />
          <Route path="/admin/edit-product/:id" element={<AdminEditProductPage />} />
          <Route path="/admin/orders" element={<AdminOrderPage />} />
          <Route path="/admin/order-detail/:id" element={<AdminOrderDetailPage />} />
          <Route path="/admin/chat" element={<AdminChatPage />} />
          <Route path="/admin/analytics" element={<AdminAnalyticsPage />} />

        </Route>




        <Route path="*" element="Page not found 404" />
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;
