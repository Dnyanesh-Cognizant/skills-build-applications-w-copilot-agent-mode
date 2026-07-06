import { useEffect, useState } from 'react';
import { getApiUrl } from '../utils/api';

export default function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadWorkouts = async () => {
      try {
        const response = await fetch(getApiUrl('workouts'));
        if (!response.ok) throw new Error('Failed to fetch workouts');
        const data = await response.json();
        setWorkouts(Array.isArray(data) ? data : data.results || []);
      } catch (err) {
        setError(err.message || 'Unable to load workouts');
      } finally {
        setLoading(false);
      }
    };

    loadWorkouts();
  }, []);

  if (loading) return <p className="text-muted">Loading workouts...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div className="card shadow-sm border-0">
      <div className="card-body">
        <h2 className="h4 mb-3">Workouts</h2>
        <ul className="list-group">
          {workouts.map((workout) => (
            <li className="list-group-item" key={workout._id || workout.id || workout.name}>
              <strong>{workout.name}</strong>
              <div className="text-muted small">Category: {workout.category || '—'}</div>
              <div className="text-muted small">Duration: {workout.duration || 0} min</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
