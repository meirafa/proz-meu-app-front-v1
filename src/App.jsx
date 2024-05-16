import React, {useState} from "react";

import { RouterProvider } from 'react-router-dom'
import { router } from "./routes/Router";
import { createStore } from "./redux/store";
import { Provider } from "react-redux";

function App() {
  const [store] = useState(createStore);

  return <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
}

export default App;