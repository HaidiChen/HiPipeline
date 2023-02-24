import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import Tooltip from '@mui/material/Tooltip';

import NavigationBar from './NavigationBar';
import RepositoryCard from './RepositoryCard';


export default function App() {

  return (
    <>
      <NavigationBar headline="Haidi Chen's Git Actions Workflows" />

      <Grid container sx={{ marginLeft: 3 }} spacing={4}>
        <Grid>
          <Stack spacing={1}>
            <RepositoryCard repositoryName="SimpleTicTacToe" owner="haidichen" />
            <RepositoryCard repositoryName="HiPipeline" owner="haidichen"/>
            <RepositoryCard repositoryName="Extractor" owner="haidichen"/>
            <RepositoryCard repositoryName="Payroll" owner="haidichen"/>
          </Stack>
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
