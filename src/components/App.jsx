import { Provider } from "react-redux";
import store from "../redux/store";
import Layout from "./Layout";

function App() {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
}

export default App;
