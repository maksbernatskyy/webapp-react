import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./components/DefaultLayout"
import HomePage from "./pages/HomePage"
import SingleCard from "./pages/SingleCard"
import PageNotFound from "./pages/PageNotFound"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/:id" element={<SingleCard />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
