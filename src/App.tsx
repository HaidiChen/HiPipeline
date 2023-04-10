import { useState } from "react";

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Unstable_Grid2';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

import NavigationBar from './components/NavigationBar';
import RepositorySelect from './components/repository/RepositorySelect';
import RepositoryStack from './components/repository/RepositoryStack';
import WorkflowDefStack from './components/gitactions/workflows/WorkflowDefStack';


export default function App() {

  const [repositoryNames, setRepositoryNames] = useState<string[]>([]);
  const [selectedRepo, setSelectedRepo] = useState<string>("");

  return (
    <>
      <NavigationBar headline="My Git Actions Workflows" />

      <Grid container sx={{ marginLeft: 3 }} spacing={4}>
        <Grid xs={12}>
          <RepositorySelect onSelect={setRepositoryNames} />
        </Grid>

        <Grid>
          <RepositoryStack repositoryNames={repositoryNames} onSelect={setSelectedRepo} />
        </Grid>

        <Grid>
          <WorkflowDefStack repositoryName={selectedRepo} />
        </Grid>

      </Grid>
    </>
  );
}
