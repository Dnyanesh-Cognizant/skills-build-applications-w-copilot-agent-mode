import { useEffect, useState } from 'react';

const getApiUrl = (resource) => {
  const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim().replace(/\s+/g, '-');
  return codespaceName
    ? `https://${codespaceName}-8000.app.github.dev/api/${resource}/`
    : `http://localhost:8000/api/${resource}/`;
};

export default function Activities() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadActivities = async () => {
      try {
        const response = await fetch(getApiUrl('activities'));
        if (!response.ok) throw new Error('Failed to fetch activities');
        const data = await response.json();
        setActivities(Array.isArray(data) ? data : data.results || []);
      } catch (err) {
        setError(err.message || 'Unable to load activities');
      } finally {
        setLoading(false);
      }
    };

    loadActivities();
  }, []);

  if (loading) return <p className="text-muted">Loading activities...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div className="card shadow-sm border-0">
      <div className="card-body">
        <h2 className="h4 mb-3">Activities</h2>
        <ul className="list-group">
          {activities.map((activity) => (
            <li className="list-group-item" key={activity._id || activity.id || activity.date}>
              <strong>{activity.type}</strong>
              <div className="text-muted small">Duration: {activity.duration} min</div>
              <div className="text-muted small">Calories: {activity.calories || '—'}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
