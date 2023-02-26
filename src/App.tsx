import { useState } from "react";

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Unstable_Grid2';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

import NavigationBar from './NavigationBar';
import RepositorySelect from './repository/RepositorySelect';
import RepositoryStack from './repository/RepositoryStack';


export default function App() {

  const [repositoryNames, setRepositoryNames] = useState<string[]>([]);

  return (
    <>
      <NavigationBar headline="Haidi Chen's Git Actions Workflows" />

      <Grid container sx={{ marginLeft: 3 }} spacing={4}>
        <Grid xs={12}>
          <RepositorySelect onSelect={setRepositoryNames} />
        </Grid>

        <Grid>
          <RepositoryStack repositoryNames={repositoryNames} />
        </Grid>

        <Grid>
          <Button variant="outlined">
            <Typography sx={{ p: 2 }}>Auto build status : on
            </Typography>
          </Button>
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
