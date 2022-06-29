import React from 'react';
import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './components/Landing';
import Checkout from './components/Checkout/Checkout';
import Recipes from './components/Recipes/Recipes';
import RecipeDetail from './components/Recipes/RecipeDetail';
import NotFound from './components/NotFound/NotFound';
import { ReactQueryDevtools } from 'react-query/devtools';
import HandleCheckoutStripePayment from './components/Checkout/HandleCheckoutStripePayment';
import CheckoutSuccess from './components/Checkout/CheckoutSuccess';
import Orders from './components/Order/Orders';
import Profile from './components/Profile/Profile';
import Privacy from './components/Privacy';
import Cgu from './components/Cgu';
import ResetPassword from './components/Authentication/ResetPassword';
import {Streaming} from "./components/Streaming/Streaming";

function App() {
  const queryClient = new QueryClient();

  return (
    <div className="wrapper transition duration-500 dark:bg-gray-600 h-screen bg-gray-50">
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route
              path="/checkout/success/:orderId"
              element={<CheckoutSuccess />}
            />
            <Route
              path="/checkout/:orderId"
              element={<HandleCheckoutStripePayment />}
            />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/recipes/:id" element={<RecipeDetail />} />
            <Route path="/user/profile" element={<Profile />} />
            <Route path="/user/order" element={<Orders />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/cgu" element={<Cgu />} />
            <Route path="/reset-password/:token" element={<ResetPassword />} />
            <Route path="/streaming" element={<Streaming />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
