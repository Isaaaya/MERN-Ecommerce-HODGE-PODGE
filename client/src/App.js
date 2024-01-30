import './index.css';
import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { CartProvider } from 'context/LocalCartContext.js';
import { SideNavMenuProvider } from 'context/SideNavMenuContext';

import { ProductPage, HomePage, ErrorFallbackPage, NotFoundPage } from 'pages/index';

import InstanceGroupPage from 'pages/InstanceGroupPage';
import { Spinner } from 'assets/icons';
import { AdminPageLayout, Footer, Header } from 'layout/index';
import { ProtectedAdminRoute, ProtectedUserRoute } from 'protectedRoutes'

const WishlistPage = lazy(() => import('pages/WishlistPage'));
const UserProfilePage = lazy(() => import('pages/UserProfilePage'));
const AdminProductPage = lazy(() => import('pages/AdminProductPage'));
const AdminInstanceGroupPage = lazy(() => import('pages/AdminInstanceGroupPage'));
const AuthPage = lazy(() => import('pages/AuthPage'));
const HandleBannerPage = lazy(() => import('pages/HandleBannerPage'));
const CheckOutPage = lazy(() => import('pages/CheckOutPage'));
const CompletedCheckOutPage = lazy(() => import('pages/CompletedCheckOutPage'));

const SuspenseLayout = () => (
  <Suspense fallback={<div className='flex items-center justify-center h-screen'><Spinner width="25" height="25" /></div>}>
    <Outlet />
  </Suspense>
);

function App() {
  return (
    <SideNavMenuProvider>
      <CartProvider>
        <ErrorBoundary fallback={<ErrorFallbackPage />}>
          <Router>
            <Header />

            <Routes>
              <Route element={<SuspenseLayout />}>
                <Route element={<ProtectedUserRoute />}>
                  <Route path='/profile' element={<UserProfilePage />} />
                  <Route path='/wishlist' element={<WishlistPage />} />
                </Route>

                <Route element={<AdminPageLayout />}>
                  <Route element={<ProtectedAdminRoute />}>
                    <Route exact path='/admin/:instanceType' element={<AdminInstanceGroupPage />} />
                    <Route path='/admin/addProduct' element={<AdminProductPage />} />
                    <Route path='/admin/:productId/update' element={<AdminProductPage />} />
                    <Route path={'/admin/productCollections/:productCollectionId/banner'} element={<HandleBannerPage />} />
                  </Route>
                </Route>

                <Route path='/auth/signin' element={<AuthPage />} />
                <Route path='/auth/signup' element={<AuthPage />} />
                <Route path='/checkout' element={<CheckOutPage />} />
                <Route path='/checkout/success' element={<CompletedCheckOutPage />} />
              </Route>

              <Route path='/' element={<HomePage />} />
              <Route path='/products/:productId' element={<ProductPage />} />
              <Route path={'/:instanceType/:instanceId'} element={<InstanceGroupPage />} />

              <Route path='*' element={<NotFoundPage />} />
            </Routes>

            <Footer />
          </Router>
        </ ErrorBoundary>
      </CartProvider>
    </SideNavMenuProvider>
  );
}

export default App;
