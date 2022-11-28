import { Grid, Stack } from '@mui/material'
import groups from '../assets/groups.json'
import CardGroups from './CardGroups'

const ContainerGroups = () => {
    console.log(groups)
    return (
        <Grid
            container
            display="grid"
            gridTemplateColumns="1fr 1fr 1fr"
            width="100%"
            item
            spacing={2}
            padding={3}
            gap="2rem"
        >
            {groups.map((item) => (
                <CardGroups key={item.id} item={item} />
            ))}
        </Grid>
    )
}

export default ContainerGroups
