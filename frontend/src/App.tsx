import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Landing from './pages/Landing';
import AppLayout from './components/AppLayout';
import Dashboard from './pages/Dashboard';
import BukuBesar from './pages/BukuBesar';
import NeracaSaldo from './pages/NeracaSaldo';
import NeracaLajur from './pages/NeracaLajur';
import JurnalPenyesuaian from './pages/JurnalPenyesuaian';
import LaporanKeuangan from './pages/LaporanKeuangan';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected App Routes */}
        <Route path="/app" element={<AppLayout />}>
          <Route index element={<Navigate to="/app/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="buku-besar" element={<BukuBesar />} />
          <Route path="neraca-saldo" element={<NeracaSaldo />} />
          <Route path="neraca-lajur" element={<NeracaLajur />} />
          <Route path="jurnal-penyesuaian" element={<JurnalPenyesuaian />} />
          <Route path="laporan" element={<LaporanKeuangan />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
