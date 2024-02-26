import Pages from "./components/Home/pages/Pages";
import "../src/style/main.scss"
import { store } from "./Redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Pages />
      </div>
    </Provider>
  );
}

export default App;
