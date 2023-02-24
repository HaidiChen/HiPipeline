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

import GitClient from './GitClient';


const MAX_COMMIT_MSG_LEN = 35;

const gitClient = new GitClient();

interface RepositoryCardProperties {
  repositoryName: string,
  owner: string,
}

export default function RepositoryCard(props: RepositoryCardProperties) {

  const repoName = props.repositoryName;
  const owner = props.owner;

  gitClient.getRepositoryDetails(owner, repoName).then((repoDetails) => {
    const linkElement = document.getElementById("repository-" + repoName);

    if (linkElement) {
      linkElement.setAttribute("href", repoDetails.html_url);
      linkElement.innerHTML = repoName;
    }
  });

  gitClient.getLatestCommit(owner, repoName).then((latestCommit) => {
    const commitLink = document.getElementById("commit-" + repoName);

    if (commitLink) {
      commitLink.setAttribute("href", latestCommit.html_url);
      const message = latestCommit.commit.message;
      let suffix = "";
      if (message.length > MAX_COMMIT_MSG_LEN) {
        suffix = "...";
      }
      commitLink.innerHTML = message.slice(0, MAX_COMMIT_MSG_LEN) + suffix;
    }

    const committer = document.getElementById("committer-" + repoName);

    if (committer && latestCommit.committer) {
      committer.setAttribute("href", latestCommit.committer.html_url);
      committer.innerHTML = latestCommit.committer.login;
    }

    const commitDate = document.getElementById("date-" + repoName);

    if (commitDate && latestCommit.commit.committer) {
      commitDate.innerHTML = "" + latestCommit.commit.committer.date;
    }
  });

  return (
      <Card sx={{ minWidth: 240, background: "#e1f5fe" }}>
        <CardContent>

          <Typography variant="h5">
            <Link id={"repository-" + repoName} href="#" underline="hover" target="blank">
              repository-name
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
                    <Link id={"commit-" + repoName} href="#" underline="hover" target="blank">
                      commit-id
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
                  <Link id={"committer-" + repoName} href="#" underline="hover" target="blank">
                    committer
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
                    <Typography variant="caption" id={"date-" + repoName}>
                      datetime : 3 min ago
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
