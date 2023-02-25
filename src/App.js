import Login from "./components/Login";
import Signup from "./components/Signup";
import{
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Layout from "./components/shared/Layout";
import Dashboard from "./components/Dashboard";
import Services from "./components/Services";
import Packages from "./components/Packages";
import Subscription from "./components/Subscription";
import Membership from "./components/Membership";
import Employees from "./components/Employees";
import Customers from "./components/Customers";
import Products from "./components/Products";
import Branch from "./components/Branch";
import ClientMemberships from "./components/ClientMemberships";
import Sales from "./components/Sales";
import Resources from "./components/Resources";
import Appointment from "./components/Appointment";
import ForgotPassword from "./components/ForgotPassword";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Layout/>}>
          <Route path="dashboard" element={<Dashboard/>}/>
          <Route path="services" element={<Services/>}/>
          <Route path="packages" element={<Packages/>}/>
          <Route path="subscription" element={<Subscription/>}/>
          <Route path="membership" element={<Membership/>}/>
          <Route path="employees" element={<Employees/>}/>
          <Route path="customers" element={<Customers/>}/>
          <Route path="products" element={<Products/>}/>
          <Route path="branch" element={<Branch/>}/>
          <Route path="clientmemberships" element={<ClientMemberships/>}/>
          <Route path="sales" element={<Sales/>}/>
          <Route path="resources" element={<Resources/>}/>
          <Route path="appointment" element={<Appointment/>}/>
          <Route path="profile" element={<Profile/>}/>
          <Route path="settings" element={<Settings/>}/>
          </Route>
          <Route path="login" element={<Login/>}/>
          <Route path="signup" element={<Signup/>}/>
          <Route path="forgotpassword" element={<ForgotPassword/>}/>
        </Routes>
        
      </BrowserRouter>
      
    </div>
  );
}

export default App;
