import './App.css';
import { Route, Routes } from 'react-router';
import Header from './components/Header';
import Nav from './components/Nav';
import CurrentMovies from './pages/CurrentMovies';
import PopMovies from './pages/PopularMovies';
import Trending from './pages/Trending';
import TVShows from './pages/TVShows';


function App() {
  return (
    <div className="App">
      <header>
        <Header/>
      </header>
      <main>
        <section>
          <Nav/>
          <section style={styles.container}>
            <Routes>
              <Route exact path='/' element={<CurrentMovies />} />
              <Route path='/Dashboard' element={<CurrentMovies />} />
              <Route path='/Reports' element={<PopMovies/>} />
              <Route path='/Income' element={<TVShows/>} />
              <Route path='/Spending' element={<Trending/>} />
            </Routes>
    </section>
        </section>
        <section>
          {/* Data printed out */}
        </section>
      </main>
      <footer>
        {/* black bar/ copyright? */}
      </footer>
    </div>
  );
}

export default App;
