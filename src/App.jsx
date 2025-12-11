import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./components/DefaultLayout"
import HomePage from "./pages/HomePage"
import SingleCard from "./pages/SingleCard"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/:id" element={<SingleCard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
