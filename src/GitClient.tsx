import { Octokit } from "octokit";


const GIT_REPO_OWNER = "haidichen";

const octokit = new Octokit({
  auth: process.env.REACT_APP_GIT_ACCESS_TOKEN,
});

export default class GitClient {

  async getRepositoryDetails(repoName: string) {

      const response = await octokit.request("GET /repos/{owner}/{repo}", {
        owner: GIT_REPO_OWNER,
        repo: repoName,
      });

      return response.data;
  }

  async getLatestCommit(repoName: string) {

      const response = await octokit.request("GET /repos/{owner}/{repo}/commits", {
        owner: GIT_REPO_OWNER,
        repo: repoName,
      });

      return response.data[0];
  }

}
