import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/home";
import About from "./components/About/about";
import Service from "./components/Services/service";
import Contact from "./components/Contact/contact";
import Auth from "./components/Auth/auth";
import Dashboard from "./components/User/Dashboard/dashboard";
import NotFound from "./components/404/404";
import Quotation from "./components/User/quotation/quotation";
import Reset from "./components/User/Reset/reset";
import Shipment from "./components/shipment/shipment";
import Logistics from "./components/Home/Service/ServicePages/Logistics/Logistics";
import Storage from "./components/Home/Service/ServicePages/Storage/Storage";
import Ocean from "./components/Home/Service/ServicePages/Ocean/Ocean";
import Brokerage from "./components/Home/Service/ServicePages/Brokerage/Brokerage";
import Air from "./components/Home/Service/ServicePages/Air/Air";
import Linkages from "./components/Home/Service/ServicePages/Linkages/Linkages";
import Advisory from "./components/Home/Service/ServicePages/Advisory/Advisory";
import Product from "./components/Product/product";
import ProductQuotation from "./components/Forms/ProductQuotation/ProductQuotation";
import ServiceType from "./components/Forms/ServiceQuotation/ServiceType/ServiceType";
import ServiceQuotation from "./components/Forms/ServiceQuotation/ServiceQuotation";
import LogisticsQuotation from "./components/Forms/LogisticsQuotation/LogisticsQuotation";
import ShipmentTable from "./components/shipment/shipmentTable/ShipmentDataTable/ShipmentTable";
import StorageTable from "./components/shipment/shipmentTable/StorageTable/StorageTable";
import Refining from "./components/Home/Service/ServicePages/Refining/Refining";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navbar/> */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/products" component={Product} />
          <Route path="/services" component={Service} />
          <Route path="/contact" component={Contact} />
          <Route path="/auth" component={Auth} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/shipment" component={Shipment} />
          <Route path="/quotation" component={Quotation} />
          <Route path="/reset" component={Reset} />
          <Route path="/services-logistics" component={Logistics} />
          <Route path="/services-storage" component={Storage} />
          <Route path="/services-customs" component={Brokerage} />
          <Route path="/services-air" component={Air} />
          <Route path="/services-land" component={Linkages} />
          <Route path="/services-trade" component={Advisory} />
          <Route path="/service-type" component={ServiceType} />
          <Route path="/services-ocean" component={Ocean} />
          <Route path="/services-refinery" component={Refining} />
          <Route path="/product-quotation" component={ProductQuotation} />
          <Route path="/storage-quotation" component={ServiceQuotation} />
          <Route path="/logistics-quotation" component={LogisticsQuotation} />
          <Route path="/track-shipment" component={ShipmentTable}/>
          <Route path="/track-storage" component={StorageTable}/>
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
