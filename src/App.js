import React from 'react';
import Header from "./Header.js";
import Sidebar from "./Sidebar.js";
import "./App.css";

function App() {
    return (
        <div className="app">
            <Header />

            <div className="app__body">
                <Sidebar />

                {/* <Switch>
                  <Route path="/room/:roomId">
                    <Chat />
                  </Route>
                  <Route path="/">
                     <Welcome />
                  </Route>
                </Switch> */}
              </div>
        </div>
    )
}

export default App;