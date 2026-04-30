import { APP_VERSION } from './version'
import './App.css'

function App() {
  return (
    <main className="app-container">
      <div className="welcome-card">
        <div className="status-badge">CI/CD Sandbox Active</div>
        <h1 className="welcome-title">
          Welcome to <span className="gradient-text">Real World App</span>
        </h1>
        <p className="welcome-subtitle">
          A controlled environment for experimenting with modern pipelines, 
          automated deployments, and high-performance development strategies.
        </p>
        
        <div className="features-grid">
          <div className="feature-item">
            <span className="feature-icon">🚀</span>
            <h3>Continuous Deployment</h3>
            <p>Automated build and deploy cycles.</p>
          </div>
          <div className="feature-item">
            <span className="feature-icon">🛠️</span>
            <h3>Pipeline Testing</h3>
            <p>Experiment with Jenkins, GitHub Actions, and more.</p>
          </div>
          <div className="feature-item">
            <span className="feature-icon">💎</span>
            <h3>Modern Stack</h3>
            <p>Vite, React, TypeScript, and Premium Design.</p>
          </div>
        </div>
      </div>

      <footer className="app-footer">
        <div className="footer-content">
          <p>© 2024 Real World App Sandbox</p>
          <div className="version-tag">
            Version <span className="version-number">{APP_VERSION}</span>
          </div>
        </div>
      </footer>
    </main>
  )
}

export default App
