import { Grid, Stack } from '@mui/material'
import groups from '../assets/groups.json'
import CardGroups from './CardGroups'

const ContainerGroups = () => {
    console.log(groups)
    return (
        <Grid
            display="grid"
            gridTemplateColumns="1fr 1fr 1fr"
            width="100%"
            item
            paddingTop="2rem"
            paddingRight="1.5rem"
            gap="2rem"
        >
            {groups.map((item) => (
                <CardGroups key={item.id} item={item} />
            ))}
        </Grid>
    )
}

export default ContainerGroups
