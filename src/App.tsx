import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Layout } from "./components/layouts/Layout";
import Main from "./pages/Main";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Countries from "./pages/Countries";
import Country from "./pages/Country";
import SearchGuides from "./pages/SearchGuides";
import SelectGuideArea from "./pages/SelectGuideArea";
import SelectGuideCountry from "./pages/SelectGuideCountry";
import GuidesArea from "./pages/GuidesArea";
import Message from "./pages/Message";
import ChatRoom from "./pages/ChatRoom";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/countries" component={Countries} />
          <Route exact path="/country/:id" component={Country} />
          <Route exact path="/search_guides" component={SearchGuides} />
          <Route exact path="/guides_area" component={SelectGuideArea} />
          <Route exact path="/guides/:area" component={GuidesArea} />
          <Route exact path="/guides_country" component={SelectGuideCountry} />
          {/* <Route exact path="/guides_country/:country" component={GuidesCountry} /> */}
          <Route exact path="/message" component={Message} />
          <Route exact path="/chatroom/:id" component={ChatRoom} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
