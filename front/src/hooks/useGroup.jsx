import { useContext } from 'react'
import { GroupContext } from '../context/GroupContext'


export const useGroup = () => {
    const context = useContext(GroupContext)

    if (!context) {
        throw new Error('useGroup must be used within an GroupProvider')
    }

    return context
}
