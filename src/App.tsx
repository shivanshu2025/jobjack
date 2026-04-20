import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import JobDetails from './pages/JobDetails';
import Employers from './pages/Employers';
import EmployerPostJob from './pages/EmployerPostJob';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Loader from './components/Loader';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Keep loader visible for 2.5s (animation duration)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <Loader key="loader" onComplete={() => setIsLoading(false)} />
      ) : (
        <Routes key="routes">
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/jobs/:id" element={<JobDetails />} />
            <Route path="/employers" element={<Employers />} />
            <Route path="/employers/post-job" element={<EmployerPostJob />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      )}
    </AnimatePresence>
  );
}
