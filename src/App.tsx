import React from 'react';
import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './components/Landing';
import Checkout from "./components/Checkout/Checkout";
import Recipes from "./components/Recipes/Recipes";

function App() {
  const queryClient = new QueryClient();

  return (
    <div className="wrapper transition duration-500 dark:bg-gray-600 h-screen bg-gray-50">
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/recipes" element={<Recipes />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
