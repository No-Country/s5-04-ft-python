import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AuthProvider } from './context/AuthContext'

import { BrowserRouter } from 'react-router-dom'
import Theme from './theme/Theme'
import { RouteProvider } from './context/RouteContext'
import { GroupProvider } from './context/GroupContext'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <AuthProvider>
        <GroupProvider>
        <RouteProvider>
            <Theme>
                <App />
            </Theme>
        </RouteProvider>
        </GroupProvider>
        </AuthProvider>
    </BrowserRouter>
)
