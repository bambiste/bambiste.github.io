import { onMount, onCleanup } from '@fluixi/core';
import Header from '../ui/Header.js';
import Hero from '../ui/Hero.js';
import Work from '../ui/Work.js';
import Stack from '../ui/Stack.js';
import Closing from '../ui/Closing.js';
import { initAmbient } from '../effects.js';

export default function Home() {
  onMount(() => {
    const dispose = initAmbient();
    onCleanup(dispose);
  });

  return (
    <div class="page">
      <div class="spotlight" />
      <div class="scanlines" />
      <Header />
      <main>
        <Hero />
        <Work />
        <Stack />
        <Closing />
      </main>
    </div>
  );
}
