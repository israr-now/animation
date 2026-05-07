import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

import Hero from "./components/Hero.jsx";
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Hero />
    </main>
  );
};

export default App;
