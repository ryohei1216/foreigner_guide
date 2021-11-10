import React, { useEffect, useState } from "react";
// import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { API } from "aws-amplify";

const myInit = {
  // // OPTIONAL
  // headers: {}, // OPTIONAL
  // response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
  // queryStringParameters: {
  //   // OPTIONAL
  //   name: "param",
  // },
};

function App() {
  const [greeting, setGreeting] = useState("loading");
  useEffect(() => {
    fetchGreeting();
  }, []);

  async function fetchGreeting() {
    const greetingData = await API.get("myapi", "/greeting", myInit);
    setGreeting(greetingData.message);
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Foreigner Guide
        </a>
        <h1>{greeting}</h1>
      </header>
      {/* <AmplifySignOut /> */}
    </div>
  );
}

// export default withAuthenticator(App);
export default App;
