import "./App.css";
import { useState } from "react";
import NewOrderPage from "./pages/NewOrderPage";
import AuthPage from "./pages/AuthPage";
import OrderHistoryPage from "./pages/OrderHistoryPage";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  const [user, setUser] = useState(null)


  return (
    <main className="App">
      {/* Ternary Expression 
    What we are doing is if/ else 
    User ? - if user doesnt exist do this...
    : - if the user does exist do this ... */}
    <NavBar/>
      {user ? (

        <Routes>
          <Route path="/orders/new/" element={<NewOrderPage />} />
          <Route path="/orders" element={<OrderHistoryPage />} />
        </Routes>
    
      ) : (
        <AuthPage />
      )}
    </main>
  );
}

export default App;
