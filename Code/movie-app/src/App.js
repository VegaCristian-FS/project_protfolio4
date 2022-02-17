import './App.css'
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
      <body style={styles.body}>
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
      </body>
    </div>
  );
}

export default App;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    
    paddingTop: '5rem',
  },
  body:{
    backgroundColor: '#313131',
  }
}