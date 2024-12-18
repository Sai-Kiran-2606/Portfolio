import ReactDOM from "react-dom/client";
import "../index.css";
import Header from "./components/Header";
import Body from "./components/Body";

const App = () => {
    return(
        <div>
            {/* <Header /> */}
            <Body />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);

export default App;