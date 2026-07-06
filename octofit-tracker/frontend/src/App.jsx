import { NavLink, Route, Routes } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';
import './App.css';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/users', label: 'Users' },
  { path: '/teams', label: 'Teams' },
  { path: '/activities', label: 'Activities' },
  { path: '/leaderboard', label: 'Leaderboard' },
  { path: '/workouts', label: 'Workouts' },
];

function App() {
  return (
    <div className="container py-4">
      <header className="mb-4">
        <h1 className="display-5 fw-bold">OctoFit Tracker</h1>
        <p className="lead text-muted">
          Multi-tier fitness tracking with a hosted API and a React 19 presentation tier.
        </p>
        <p className="small text-muted">
          VITE_CODESPACE_NAME must be defined in .env.local for Codespaces URL support.
        </p>
      </header>

      <nav className="nav nav-pills flex-wrap mb-4">
        {navItems.map((item) => (
          <NavLink key={item.path} to={item.path} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            {item.label}
          </NavLink>
        ))}
      </nav>

      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/users" element={<Users />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/workouts" element={<Workouts />} />
      </Routes>
    </div>
  );
}

export default App;
