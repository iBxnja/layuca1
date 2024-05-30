import './App.css';
import { Footer } from './components/footer/Footer.js';
import { Header } from './components/header/Header.js';
import { Banner } from './components/main/Banner.js';
import { Contacto } from './components/main/Contacto.js';
import { Nosotros } from './components/main/Nosotros.js';
import { Productos } from './components/main/Productos.js';
import { Promociones } from './components/main/Promociones.js';

function App() {
  return (
    <div className="App">
      <Header />
      <main class="w-full h-full">
      <Banner />
      <Nosotros />
      <Productos />
      <Promociones />
      <Contacto />
      </main>
      <Footer />
    </div>
  );
}

export default App;
