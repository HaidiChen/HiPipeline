import { Octokit } from "octokit";


const octokit = new Octokit({
  auth: process.env.REACT_APP_GIT_ACCESS_TOKEN,
});

export default class GitClient {

  async getRepositoryDetails(owner: string, repoName: string) {

      const response = await octokit.request("GET /repos/{owner}/{repo}", {
        owner: owner,
        repo: repoName,
      });

      return response.data;
  }

  async getLatestCommit(owner: string, repoName: string) {

      const response = await octokit.request("GET /repos/{owner}/{repo}/commits", {
        owner: owner,
        repo: repoName,
      });

      return response.data[0];
  }

}
