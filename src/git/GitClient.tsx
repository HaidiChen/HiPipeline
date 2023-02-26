import { Octokit } from "octokit";


const GIT_REPOS_OWNER = "haidichen";

const octokit = new Octokit({
  auth: process.env.REACT_APP_GIT_ACCESS_TOKEN,
});

class GitClient {

  async listOwnedPublicRepositories() {
      const response = await octokit.request("GET /users/{owner}/repos", {
        owner: GIT_REPOS_OWNER,
      });

      return response.data;
  }

  async getRepositoryDetails(repoName: string) {
      const response = await octokit.request("GET /repos/{owner}/{repo}", {
        owner: GIT_REPOS_OWNER,
        repo: repoName,
      });

      return response.data;
  }

  async getLatestCommit(repoName: string) {
      const response = await octokit.request("GET /repos/{owner}/{repo}/commits", {
        owner: GIT_REPOS_OWNER,
        repo: repoName,
      });

      return response.data[0];
  }

}

export const GIT_CLIENT = new GitClient();
