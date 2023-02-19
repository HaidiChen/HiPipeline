import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';

import NavigationBar from './NavigationBar';


export default function App() {
  return (
    <>
      <NavigationBar headline="HiPipeline" />

      <Grid container sx={{ marginLeft: 2 }}>
        <Grid xs={2}>
          <Container>
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
          </Container>
        </Grid>
      </Grid>
    </>
  );
}
