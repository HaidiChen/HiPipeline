import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


interface NavigationBarProperties {
  headline: string,
}

export default function NavigationBar(props: NavigationBarProperties) {
  return (
    <Box sx={{ flexGrow: 1, marginBottom: 15 }}>
      <AppBar>
        <Typography variant="h2" sx={{ marginLeft: 5 }}>{props.headline}</Typography>
      </AppBar>
    </Box>
  );
}

