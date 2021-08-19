import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Aside from "./components/Aside";
import Container from "./components/Container";
import DisplayContextProvider from "./Context/Context";


function App() {

    return (
        <div className="App">
            <div className="global-container">
                <Router>
                    <DisplayContextProvider>
                        <Navbar/>
                        <Switch>
                            <Route exact path="/">
                                <div className="main-container">
                                    <Aside

                                    />
                                    <Container

                                    />
                                </div>
                            </Route>
                            {/*<Route exact path="/organiser"></Route>*/}
                        </Switch>
                    </DisplayContextProvider>
                </Router>
            </div>
        </div>
    );
}

export default App;
