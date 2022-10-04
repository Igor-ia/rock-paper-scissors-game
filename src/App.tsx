import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Header } from "./components/Header"
import { Home } from "./pages/Home"
import { Picked } from "./pages/Picked"


import { RulesModal } from "./components/RulesModal"
import { createContext, useState } from "react"

export const ScoreContext = createContext({
  score: 0,
  setScore: (score: number) => { },
});

function App() {
  const [score, setScore] = useState(0);


  function handleOpenModal() {
    const modal = document.querySelector('#modal');
    modal?.classList.remove('hidden');
  }
  return (
    <ScoreContext.Provider value={{ score, setScore }}>

      <Router>

        <section className="w-full h-screen flex flex-col  items-center mx-auto pt-10 px-4 overflow-hidden">
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/picked" element={<Picked />} />
          </Routes>

          <button
            onClick={handleOpenModal}
            className="absolute bottom-5 right-auto left-auto md:right-5 px-10 py-2 text-white rounded-lg border-solid border-2 border-white "
          >
            RULES
          </button>

          <RulesModal />
        </section>

      </Router>

    </ScoreContext.Provider>
  )
}

export default App
