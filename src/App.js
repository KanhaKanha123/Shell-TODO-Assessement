import './App.css';
import Header from './components/header/Header';
import Routing from './routing/Routing';
import ErrorBoundary from './error-boundries/ErrorBoundry';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>
      <Routing></Routing>
    </div>
  );
}

export default App;
