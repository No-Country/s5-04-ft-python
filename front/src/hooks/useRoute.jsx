import { useContext } from 'react'
import { RouteContext } from '../context/RouteContext'

export const useRoute = () => {
    const context = useContext(RouteContext)

    if (!context) {
        throw new Error('useRoute must be used within an RouteProvider')
    }

    return context
}
