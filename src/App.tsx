import * as React from 'react';
import Popover from '@mui/material/Popover';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Tooltip from '@mui/material/Tooltip';
import Paper from '@mui/material/Paper';

import NavigationBar from './NavigationBar';


export default function App() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <NavigationBar headline="HiPipeline" />

      <Grid container sx={{ marginLeft: 3 }} spacing={4}>
        <Grid>
          <Stack spacing={1}>

            <Card sx={{ minWidth: 240, background: "#e1f5fe" }}>
              <CardContent>
                <Typography variant="h5">
                  <Link href="https://google.com" underline="hover" target="blank">
                    Repo-1/branch
                  </Link>
                </Typography>
                <hr />
                <List disablePadding>
                  <ListItem disablePadding>
                    <ListItemText>
                        latest commit : <Link href="#" underline="hover">commit-id</Link>
                    </ListItemText>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemText>
                      by author : <Link href="#" underline="hover">author</Link>
                    </ListItemText>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemText>
                      datetime : 3 min ago
                    </ListItemText>
                  </ListItem>
                </List>
              </CardContent>
            </Card>

            <Card sx={{ minWidth: 240, background: "#e1f5fe" }}>
              <CardContent>
                <Typography variant="h5">
                  <Link href="https://google.com" underline="hover" target="blank">
                    Repo-1/branch
                  </Link>
                </Typography>
                <hr />
                <List disablePadding>
                  <ListItem disablePadding>
                    <ListItemText>
                      latest commit : <Link href="#" underline="hover">commit-id</Link>
                    </ListItemText>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemText>
                      by author : <Link href="#" underline="hover">author</Link>
                    </ListItemText>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemText>
                      datetime : 3 min ago
                    </ListItemText>
                  </ListItem>
                </List>
              </CardContent>
            </Card>

            <Card sx={{ minWidth: 240, background: "#e1f5fe" }}>
              <CardContent>
                <Typography variant="h5">
                  <Link href="https://google.com" underline="hover" target="blank">
                    Repo-1/branch
                  </Link>
                </Typography>
                <hr />
                <List disablePadding>
                  <ListItem disablePadding>
                    <ListItemText>
                      latest commit : <Link href="#" underline="hover">commit-id</Link>
                    </ListItemText>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemText>
                      by author : <Link href="#" underline="hover">author</Link>
                    </ListItemText>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemText>
                      datetime : 3 min ago
                    </ListItemText>
                  </ListItem>
                </List>
              </CardContent>
            </Card>

            <Card sx={{ minWidth: 240, background: "#e1f5fe" }}>
              <CardContent>
                <Typography variant="h5">
                  <Link href="https://google.com" underline="hover" target="blank">
                    Repo-1/branch
                  </Link>
                </Typography>
                <hr />
                <List disablePadding>
                  <ListItem disablePadding>
                    <ListItemText>
                      latest commit : <Link href="#" underline="hover">commit-id</Link>
                    </ListItemText>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemText>
                      by author : <Link href="#" underline="hover">author</Link>
                    </ListItemText>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemText>
                      datetime : 3 min ago
                    </ListItemText>
                  </ListItem>
                </List>
              </CardContent>
            </Card>

          </Stack>
        </Grid>

        <Grid>
          <Button aria-describedby={id} variant="contained" color="success" onClick={handleClick}>
            &gt;&gt;
          </Button>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
          >
            <Typography sx={{ p: 2 }}>Auto build status :
              <Tooltip title="click to swith auto build status">
                <Button size="small" color="success">on</Button>
              </Tooltip>
            </Typography>
          </Popover>
        </Grid>

        <Grid>
            <Card sx={{ minWidth: 240, background: "#e0ffff" }}>
              <CardContent>
                <Typography variant="h5">Build</Typography>
                <hr />
                <List disablePadding>
                  <ListItem disablePadding>
                    <ListItemText>
                      status :
                      <Button size="small" color="success">
                        succeeded
                      </Button>
                    </ListItemText>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemText>
                      datetime : 3 min ago
                    </ListItemText>
                  </ListItem>
                </List>
              </CardContent>
            </Card>
        </Grid>
      </Grid>
    </>
  );
}
