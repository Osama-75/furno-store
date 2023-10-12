import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from './webpages/Home';
import Shop from './webpages/MainPages/Shop';
import About from './webpages/MainPages/About';
import Contact from './webpages/MainPages/Contact';
import CardDetailes from './components/Pices/Data/CardDetailes';
import SighUp from './webpages/Auth/SignUp';
import Login from './webpages/Auth/LogIn';
import Err404 from './components/Parts/Err404';
import { AuthContextProvider } from './components/Firebase/Context';
import ProtectRoute from './components/Firebase/ProtectRoute';
import Compartion from './webpages/Customer/Compartion';
import Cart from './webpages/Customer/Cart';
import CheckOut from './webpages/Customer/CheckOut';



function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<ProtectRoute> <CardDetailes /> </ProtectRoute>} />
          <Route path="/compartion" element={<ProtectRoute> <Compartion /> </ProtectRoute>} />
          <Route path="/cart" element={<ProtectRoute> <Cart /> </ProtectRoute>} />
          <Route path="/checkout" element={<ProtectRoute> <CheckOut /> </ProtectRoute>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SighUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<Err404 />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
