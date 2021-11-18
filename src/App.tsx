import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Layout } from "./components/layouts/Layout";
import Main from "./pages/Main";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

// export default withAuthenticator(App);
export default App;
