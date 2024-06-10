import React, { lazy } from 'react'
import { HashRouter as Router,Routes, Route } from 'react-router-dom'
import Spinner from '../baseComponent/spinner/Spinner'

const Home = lazy(() => import('../../components/gallery/Gallery'))
const ContactUs = lazy(() => import('../../pages/contactus/ContactUs'))
const MyAccount = lazy(() => import('../../pages/myAccount/MyAccount'))
const RefundReturn = lazy(() => import('../../pages/refundReturn/RefundandReturn'))
const WishList = lazy(() => import('../../pages/wishList/WishList'))
const Product = lazy(() => import('../../pages/product/Product'))


function RoutesFile() {
  return (
    <React.Suspense fallback={<Spinner/>}>
      <Router>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/account" element={<MyAccount />} />
        <Route path="/refund" element={<RefundReturn />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/product" element={<Product />} />
      </Router>
    </React.Suspense>
  )
}

export default RoutesFile