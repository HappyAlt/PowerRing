import './App.css';
import { Main } from '../main/main';
import { About } from '../about/about';
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <nav>
          <NavLink to='/'>Main</NavLink>
          <NavLink to='/About/'>About</NavLink>
          </nav>
        </header>

        <main>
          <Routes>
            <Route index element={<Main/>} />
            <Route path='/About/' element={<About/>} /> 
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
