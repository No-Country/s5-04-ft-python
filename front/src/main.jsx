import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AuthProvider } from './context/AuthContext'

import { BrowserRouter } from 'react-router-dom'
import Theme from './theme/Theme'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <AuthProvider>
            <Theme>
                <App />
            </Theme>
        </AuthProvider>
    </BrowserRouter>
)
