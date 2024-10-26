import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//PAGES
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';
import { ScrollToTop } from './utils/ScrollToTop';
import { useTexts } from './context/AppContext';
import { Loading } from './components/Loading';

function App() {

  const { loading } = useTexts();

  if (loading) {
    return <Loading />
  }

  return (
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
  )
}

export default App
