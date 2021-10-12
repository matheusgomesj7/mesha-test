import React from 'react';
import './App.css';
import MainPage from './pages/MainPage';
import SavedLists from './pages/SavedLists';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/" className="link__nav">Home</Link>
            </li>
            <li>
              <Link to="/saved-songs" className="link__nav">Saved playlists</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/saved-songs">
            <SavedLists />
          </Route>
          <Route path="/">
            <MainPage />
          </Route>
        </Switch>
      </div>
    </Router>
    </>
  )
}

export default App;