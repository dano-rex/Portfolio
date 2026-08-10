import { Layout } from './components/layout/Layout';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Project } from './components/sections/Project';
import { Contact } from './components/sections/Contact';
import { Cv } from './components/sections/Cv';

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Cv />
    </Layout>
  );
}

export default App;
