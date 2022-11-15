import { Stack } from '@mui/material'
import { useAuth } from '../hooks/useAuth'

const Home = () => {
    const { authData } = useAuth()
    console.log(authData)

    return (
        <Stack height={'100vh'}>
            <h1>test</h1>
        </Stack>
    )
}

export default Home
