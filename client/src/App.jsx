import Canvas from './canvas';
import Customizer from './pages/Customizer';
import Home from './pages/Home';
import { render } from '@react-three/fiber';

function App() {
  return (
    <main className="app transition-all ease-in">
      <Home />
      <Canvas />
      <Customizer />
    </main>
  )
}


export default App
