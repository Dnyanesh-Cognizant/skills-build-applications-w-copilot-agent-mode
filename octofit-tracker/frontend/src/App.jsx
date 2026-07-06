import './App.css'

function App() {
  return (
    <main className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-sm border-0">
            <div className="card-body p-5">
              <h1 className="display-5 fw-bold">OctoFit Tracker</h1>
              <p className="lead text-muted mt-3">
                A modern multi-tier fitness application with activity tracking, team management,
                and a competitive leaderboard.
              </p>
              <div className="d-flex gap-3 mt-4">
                <a className="btn btn-primary" href="http://localhost:8000/api/health">
                  Check API Health
                </a>
                <span className="badge bg-success align-self-center">Frontend on 5173</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
