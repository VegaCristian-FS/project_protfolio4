import './App.scss';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import MyHeader from './components/MyHeader';
import MyNav from './components/MyNav';
import CurrentMovies from './pages/CurrentMovies';
import PopMovies from './pages/PopularMovies';
import Trending from './pages/Trending';
import TVShows from './pages/TVShows';

function App() {
  return (    
    <div className="App">
      <MyHeader/>
      <section style={styles.container}>
        <Router>
          <MyNav/>
          <Routes>
            <Route exact path='/' element={<CurrentMovies />} />
            <Route path='/CurrentMovies' element={<CurrentMovies />} />
            <Route path='/PopularMovies' element={<PopMovies/>} />
            <Route path='/TVShows' element={<TVShows/>} />
            <Route path='/Trending' element={<Trending/>} />
          </Routes>
        </Router>
      </section>
    </div>
  );
}

export default App;

const styles = {
  container: {   
    padding: '100px 0 0 80px'
  }
}