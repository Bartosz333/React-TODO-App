import Container from './components/Container/Container.js';
import NavBar from './NavBar/NavBar.js';
import { Home } from './Home/Home.js';
import { About } from './components/About/About.js';
import { Favorite } from './components/Favorite/Favorite.js';

const App = () => {
  return (
    <main>
      <NavBar />
      <Container>
        <Home />
        <About />
        <Favorite />
      </Container>
    </main>
  );
};
export default App;
