import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { QueryClientProvider } from 'react-query';
import queryClient from './queryClient';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </QueryClientProvider>
);
