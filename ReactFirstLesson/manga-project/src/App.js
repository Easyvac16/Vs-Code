import logo from './logo.svg';
import './App.css';
import GetImage from './load-image/get-img';
import GetMangas from './get-mangas/get-mangas'

export default function App() {
  return (
    <div className="App">
      {/* <GetImage /> */}
      <GetMangas />
    </div>
  );
}

