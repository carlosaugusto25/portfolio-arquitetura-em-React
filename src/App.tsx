import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>omi</h1>} />
        <Route path="/about" element={<h1>about</h1>} />
        <Route path="/projects" element={<h1>projects</h1>} />
        <Route path="/contact" element={<h1>contact</h1>} />
      </Routes>
    </Router>
  )
}

export default App
