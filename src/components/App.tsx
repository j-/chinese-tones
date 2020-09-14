import * as React from 'react';
import Convert from './Convert';

const App: React.FC = () => (
  <div className="App container my-5">
    <a href="https://skeoh.com/" className="text-secondary">&larr; skeoh.com</a>
    <h1>Chinese tones</h1>
    <section className="my-5">
      <Convert />
    </section>
  </div>
);

export default App;
