import { BrowserRouter, Router, Route } from "react-router-dom"
import DefaultLayout from "./components/DefaultLayout"

function App() {

  return (
    <>
      <BrowserRouter>
        <Router>
          <Route element={<DefaultLayout />}>
            
          </Route>
        </Router>
      </BrowserRouter>
    </>
  )
}

export default App
