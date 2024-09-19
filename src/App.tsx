import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import router from "./shared/routes/RouterModel";
import { store } from "./redux/store"; 

function App() {
  return (
    <Provider store={store}>  
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
