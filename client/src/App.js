import './index.css';
import React, { lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { CartProvider } from 'context/LocalCartContext.js';
import { SideNavMenuProvider } from 'context/SideNavMenuContext';

import { ProductPage, CollectionPage, CategoryPage, SubcategoryPage, HomePage, ErrorFallbackPage } from 'pages/index';
import { Header, Footer } from 'components/common/index';
import { Spinner } from 'components/Icons';
import { AdminPageLayout } from 'components/Layout/index';
import ProtectedAdminRoute from 'routes/ProtectedAdminRoute';
import ProtectedUserRoute from 'routes/ProtectedUserRoute';

const WishlistPage = lazy(() => import('pages/WishlistPage'));
const UserProfilePage = lazy(() => import('pages/UserProfilePage'));
const AdminProductsPage = lazy(() => import('pages/AdminProductsPage'));
const HandleProductPage = lazy(() => import('pages/HandleProductPage'));
const AdminCollectionsPage = lazy(() => import('pages/AdminCollectionsPage'));
const AdminCategoriesPage = lazy(() => import('pages/AdminCategoriesPage'));
const AdminSubcategoriesPage = lazy(() => import('pages/AdminSubcategoriesPage'));
const AuthPage = lazy(() => import('pages/AuthPage'));
const HandleBannerPage = lazy(() => import('pages/HandleBannerPage'));
const CheckOutPage = lazy(() => import('pages/CheckOutPage'));
const CompletedCheckOutPage = lazy(() => import('pages/CompletedCheckOutPage'));
const AdminOrdersPage = lazy(() => import('pages/AdminOrdersPage'));

const SuspenseLayout = () => (
  <React.Suspense fallback={<div className='flex items-center justify-center h-screen'><Spinner /></div>}>
    <Outlet />
  </React.Suspense>
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
                    <Route exact path='/admin/products' element={<AdminProductsPage />} />
                    <Route path='/admin/productCollections' element={<AdminCollectionsPage />} />
                    <Route path='/admin/categories' element={
                      <AdminCategoriesPage />
                    } />
                    <Route path='/admin/subcategories' element={<AdminSubcategoriesPage />} />
                    <Route path='/admin/addProduct' element={<HandleProductPage />} />
                    <Route path='/admin/:productId/update' element={<HandleProductPage />} />
                    <Route path='/admin/orders' element={<AdminOrdersPage />} />
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
              <Route path={'/productCollections/:productCollectionId'} element={<CollectionPage />} />
              <Route path={'/categories/:categoryId'} element={<CategoryPage />} />
              <Route path={'/subcategories/:subcategoryId'} element={<SubcategoryPage />} />
            </Routes>

            <Footer />
          </Router>
        </ ErrorBoundary>
      </CartProvider>
    </SideNavMenuProvider>
  );
}

export default App;
