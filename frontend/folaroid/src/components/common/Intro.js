import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';

const Intro = ({ icon, children }) => {
    return (
        <Grid
            container
            spacing={1}
            style={{ display: 'flex', alignItems: 'center' }}
        >
            <Grid item xs={4} md={4}>
                {children.icon}
                <Typography>{children.value}</Typography>
            </Grid>
            <Grid item xs={8} md={8}>
                <Typography align="left">데이터받을곳</Typography>
            </Grid>
        </Grid>
    );
};
export default Intro;
