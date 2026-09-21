import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Hud } from './components/Hud';
import { ScrollToTop } from './components/ScrollToTop';
import { ThemeProvider } from './theme/ThemeProvider';
import { HomePage } from './pages/HomePage';
import { DesignPage } from './pages/DesignPage';

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="relative bg-paper text-ink transition-colors duration-500">
          <Hud />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/design" element={<DesignPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
