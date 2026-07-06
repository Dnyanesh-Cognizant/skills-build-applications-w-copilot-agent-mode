import { useEffect, useState } from 'react';

const getApiUrl = () => {
  const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim().replace(/\s+/g, '-');
  return codespaceName
    ? `https://${codespaceName}-8000.app.github.dev/api/teams/`
    : `http://localhost:8000/api/teams/`;
};

export default function Teams() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadTeams = async () => {
      try {
        const response = await fetch(getApiUrl('teams'));
        if (!response.ok) throw new Error('Failed to fetch teams');
        const data = await response.json();
        setTeams(Array.isArray(data) ? data : data.results || []);
      } catch (err) {
        setError(err.message || 'Unable to load teams');
      } finally {
        setLoading(false);
      }
    };

    loadTeams();
  }, []);

  if (loading) return <p className="text-muted">Loading teams...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div className="card shadow-sm border-0">
      <div className="card-body">
        <h2 className="h4 mb-3">Teams</h2>
        <ul className="list-group">
          {teams.map((team) => (
            <li className="list-group-item" key={team._id || team.id || team.name}>
              <strong>{team.name}</strong>
              <div className="text-muted small">Sport: {team.sport || '—'}</div>
              <div className="text-muted small">Members: {team.members?.length || 0}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
