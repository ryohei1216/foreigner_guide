import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Layout } from "./components/layouts/Layout";
import Main from "./pages/Main";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </BrowserRouter>
    </Layout>
  );
}

// export default withAuthenticator(App);
export default App;
