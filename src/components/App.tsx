import * as React from 'react';
import Convert from './Convert';

const App: React.FC = () => (
  <div className="App container mt-5 mb-5">
    <a href="https://skeoh.com/" className="text-secondary">&larr; skeoh.com</a>
    <h1>Chinese Tones</h1>
    <section className="mt-5 mb-5">
      <Convert />
    </section>
  </div>
);

export default App;
