import React from 'react';
import ReactDOM from 'react-dom/client';
import MealPlanner from './MealPlanner';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <MealPlanner />
  </React.StrictMode>
);
