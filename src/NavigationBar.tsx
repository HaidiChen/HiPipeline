import AccountTreeIcon from '@mui/icons-material/AccountTree';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


interface NavigationBarProperties {
  headline: string,
}

export default function NavigationBar(props: NavigationBarProperties) {
  return (
    <Box sx={{ flexGrow: 1, marginBottom: 15 }}>
      <AppBar>
        <Grid container>
          <Grid>
            <AccountTreeIcon sx={{ fontSize: 70 }} />
          </Grid>
          <Grid>
            <Typography variant="h2" sx={{ marginLeft: 5 }}>{props.headline}</Typography>
          </Grid>
        </Grid>
      </AppBar>
    </Box>
  );
}
