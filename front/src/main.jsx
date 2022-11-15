import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AuthProvider } from './context/AuthContext'
import Theme from './theme/Theme'

ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthProvider>
        <Theme>
            <App />
        </Theme>
    </AuthProvider>
)
