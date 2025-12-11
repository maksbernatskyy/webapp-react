import { BrowserRouter, Router, Route } from "react-router-dom"
import DefaultLayout from "./components/DefaultLayout"
import HomePage from "./pages/HomePage"

function App() {

  return (
    <>
      <BrowserRouter>
        <Router>
          <Route element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
          </Route>
        </Router>
      </BrowserRouter>
    </>
  )
}

export default App
