import { useState, useEffect } from "react";

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CommitIcon from '@mui/icons-material/Commit';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

import { GIT_CLIENT } from './GitClient';


const MAX_COMMIT_MSG_LEN = 35;

interface RepositoryCardProperties {
  repositoryName: string,
}

interface CommitInfoProperties {
  repositoryUrl?: string,
  message?: string,
  htmlUrl?: string,
  date?: string,
  committer?: string,
  committerUrl?: string,
}

const DEFAULT_COMMIT_INFO = {
  repositoryUrl: "#",
  message: "commit message",
  htmlUrl: "#",
  date: "commit date",
  committer: "committer name",
  committerUrl: "#",
};

export default function RepositoryCard(props: RepositoryCardProperties) {

  const repoName = props.repositoryName;
  const [commitInfo, setCommitInfo] = useState<CommitInfoProperties>(DEFAULT_COMMIT_INFO);

  useEffect(() => {
    GIT_CLIENT.getRepositoryDetails(repoName).then((repoDetails) => {
      setCommitInfo({
        ...commitInfo,
        repositoryUrl: repoDetails.html_url,
      });
    });

    GIT_CLIENT.getLatestCommit(repoName).then((latestCommit) => {
      const commitMessage = latestCommit.commit.message;
      const commitMessageSuffix = commitMessage.length > MAX_COMMIT_MSG_LEN ? "..." : "";

      setCommitInfo({
        ...commitInfo,
        htmlUrl: latestCommit.html_url,
        message: commitMessage.slice(0, MAX_COMMIT_MSG_LEN) + commitMessageSuffix,
        committerUrl: latestCommit.committer ? latestCommit.committer.html_url : "#",
        committer: latestCommit.committer ? latestCommit.committer.login : "committer name",
        date: latestCommit.commit.committer ? latestCommit.commit.committer.date : "commit date",
      });
    });
  }, [repoName]);

  return (
      <Card sx={{ minWidth: 240, background: "#e1f5fe" }}>
        <CardContent>

          <Typography variant="h5">
            <Link href={commitInfo.repositoryUrl} underline="hover" target="blank">
              {repoName}
            </Link>
          </Typography>

          <hr />

          <List disablePadding>
            <ListItem disablePadding>
              <ListItemText>
                <Grid container>
                  <Grid>
                    <CommitIcon />&nbsp;
                  </Grid>
                  <Grid>
                    <Link href={commitInfo.htmlUrl} underline="hover" target="blank">
                      {commitInfo.message}
                    </Link>
                  </Grid>
                </Grid>
              </ListItemText>
            </ListItem>

            <ListItem disablePadding>
              <ListItemText>
              <Grid container>
                <Grid>
                  <AccountCircleIcon />&nbsp;
                </Grid>
                <Grid>
                  <Link href={commitInfo.committerUrl} underline="hover" target="blank">
                    {commitInfo.committer}
                  </Link>
                </Grid>
              </Grid>
              </ListItemText>
            </ListItem>

            <ListItem disablePadding>
              <ListItemText>
                <Grid container>
                  <Grid>
                    <CalendarMonthIcon  />&nbsp;
                  </Grid>
                  <Grid>
                    <Typography variant="caption">
                      {commitInfo.date}
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
