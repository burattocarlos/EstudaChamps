import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Info from './components/Info';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <MainContent />
        <Info />
      </main>
    </div>
  );
}

export default App;
