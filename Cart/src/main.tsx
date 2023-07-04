import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { AppProvider } from './context.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <AppProvider>
        <App />
    </AppProvider>
)
