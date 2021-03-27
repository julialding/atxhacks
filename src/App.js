import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navigation'
import { Parallax, Background } from 'react-parallax';

function App() {
  const Container = () => (
    <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={require('./temp_picture.jpg')}
        bgImageAlt="the dog"
        strength={-200}
    >
        Blur transition from min to max
        <div style={{ height: '200px' }} />
    </Parallax>
);
  return (
    <div className="App">
      <Navbar />
     {Container}
    </div>
  );
}

export default App;
