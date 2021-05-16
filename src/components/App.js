import Navbar from "./common/navbar/Navbar";
import Header from "./common/header/Header";
import InventoryDetails from "./InventoryManager/InventoryDetails";
import Favorites from "./InventoryManager/favs-list";
import Footer from "./common/footer/Footer";
import NotFoundPage from "./common/navbar/NotFoundPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const AppRouter = () => (
  <BrowserRouter>
      <Navbar />
      <Header />
      <Switch>
        <Route path="/inventory-ui-v2-addDB" component={InventoryDetails} />
        <Route path="/home" component={InventoryDetails} />
        <Route path="/favs" component={Favorites} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
  </BrowserRouter>
)

export default AppRouter
