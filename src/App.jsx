

import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';

import { Dock, Home, Navbar, Welcome } from '#components';
import { Contact, Finder, Image, Resume, Safari, Terminal } from '#windows';
import Text from '#windows/text';

gsap.registerPlugin(Draggable);

const App = () => {
  return (
   <main>
    <Navbar />
    <Welcome />
    <Dock />

    <Terminal />
    <Safari />
    <Resume />
    <Finder />
    <Text />
    <Image />
    <Contact />
    <Home />
   </main>
  )
}

export default App