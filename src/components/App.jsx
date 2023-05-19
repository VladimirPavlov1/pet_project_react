import { lazy } from "react";
import { Route,Routes } from "react-router-dom";
import { SharedLayout } from "./SharedLayout";

const MainPage = lazy(() => import('../pages/MainPage/MainPage'));
const NewsPage = lazy(() => import('../pages/NewsPage/NewsPage'));
const NoticesPage = lazy(() => import('../pages/NoticesPage/NoticesPage'));
const OurFriendsPage = lazy(() => import('../pages/OurFriendsPage/OurFriendsPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const UserPage = lazy(() => import('../pages/UserPage/UserPage'));

export const App = () => {
  return (
      
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="main" element={<MainPage />}/>
        <Route path="news" element={<NewsPage />}/>
        <Route path="notices" element={<NoticesPage />}/>
         <Route path="friends" element={<OurFriendsPage />}/>
        <Route path="login" element={<LoginPage />}/>
        <Route path="register" element={<RegisterPage />}/>
        <Route path="user" element={<UserPage />}/>       

      </Route>
    </Routes>
  )
    
  
};
