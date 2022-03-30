import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
    QueryClient,
    QueryClientProvider,
} from 'react-query'
import 'bootstrap/dist/css/bootstrap.css';

// Create a client
const queryClient = new QueryClient()

ReactDOM.render(
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
        <App />
    </QueryClientProvider>,
  document.getElementById('root')
);
