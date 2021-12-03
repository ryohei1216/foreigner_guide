import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Layout } from "./components/layouts/Layout";
import Main from "./pages/Main";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Countries from "./pages/Countries";
import Country from "./pages/Country";
import Guides from "./pages/Guides";
import SelectGuideArea from "./pages/SelectGuideArea";
import SelectGuideCountry from "./pages/SelectGuideCountry";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
          <Route path="/countries" component={Countries} />
          <Route path="/country/:id" component={Country} />
          <Route path="/guides" component={Guides} />
          <Route path="/guides_area" component={SelectGuideArea} />
          {/* <Route path="/guides_area/:area" component={GuidesArea} /> */}
          <Route path="/guides_country" component={SelectGuideCountry} />
          {/* <Route path="/guides_country/:country" component={GuidesCountry} /> */}
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
