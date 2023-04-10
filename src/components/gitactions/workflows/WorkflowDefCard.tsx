import { useState, useEffect } from "react";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import { GIT_CLIENT } from '../../../git/GitClient';


const MAX_COMMIT_MSG_LEN = 30;

interface WorkflowDefinitionProperties {
  name?: string,
  state?: string,
  htmlUrl?: string,
}

const DEFAULT_WF_DEF = {
  htmlUrl: "#",
  name: "Unknown Workflow",
  state: "Unknown state",
};

interface WorkflowDefCardProperties {
  repositoryName: string,
  workflowId: number,
}

export default function WorkflowDefCard(props: WorkflowDefCardProperties) {

  const repoName = props.repositoryName;
  const id = props.workflowId;
  const [workflowDef, setWorkflowDef] = useState<WorkflowDefinitionProperties>(DEFAULT_WF_DEF);

  useEffect(() => {
    GIT_CLIENT.getWorkflowDefinition(repoName, id).then((workflowDefinition) => {
      const workflowName = workflowDefinition.name;
      const workflowState = workflowDefinition.state;
      const workflowHtmlUrl = workflowDefinition.html_url;

      setWorkflowDef({
        htmlUrl: workflowHtmlUrl,
        name: workflowName,
        state: workflowState,
      });
    });
  }, [repoName, id]);

  return (
        <Card sx={{ width: 320, background: "#e1f5fe" }}>
          <CardContent>

            <List disablePadding>
              <ListItem disablePadding>
                <Typography variant="h5">
                  <Link href={workflowDef.htmlUrl} underline="hover" target="blank">
                    {workflowDef.name}
                  </Link>
                </Typography>
              </ListItem>

              <hr />

              <ListItem disablePadding>
                <ListItemText>
                  <Grid container>
                    <Grid>
                      <Typography variant="caption">
                        {workflowDef.state}
                      </Typography>
                    </Grid>
                  </Grid>
                </ListItemText>
              </ListItem>
            </List>

          </CardContent>
        </Card>

  );
}
