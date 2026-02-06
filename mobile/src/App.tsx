import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen text-white safe-top safe-bottom">
        <Routes>
          <Route path="/" element={<div className="p-6 text-center"><h1 className="text-2xl font-bold">Hard2Book</h1><p className="text-white/50 mt-2">Mobile app coming soon</p></div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
