import { Grid, Stack } from '@mui/material'
import groups from '../assets/groups.json'
import RoutesCard from './RoutesCard'

const RoutesContainer = () => {
    return (
        <Grid
            display="grid"
            gridTemplateColumns="1fr 1fr 1fr"
            width="100%"
            item
            marginTop="2rem"
            gap="2rem"
        >
            {groups.map((item) => (
                <RoutesCard key={item.id} item={item} />
            ))}
        </Grid>
    )
}

export default RoutesContainer
