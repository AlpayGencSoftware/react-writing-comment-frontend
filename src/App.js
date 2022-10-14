import React from "react"; 
import TextList from "./components/TextList"; 
import TextDetails from "./components/TextDetails";
import {BrowserRouter as Router, Route} from "react-router-dom";

function App() {  
  return (
    <Router>
      <div className="main_wrapper">
        <header> </header>
        <div className="ui raised very padded text container segment">  
            <Route path="/" exact component={TextList} />
            <Route path="/posts/:id" component={TextDetails}/>
        </div>
      </div>
    </Router>
  );
} 
export default App;
