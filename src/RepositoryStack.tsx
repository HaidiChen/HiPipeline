import { useState, useEffect} from "react";

import Stack from '@mui/material/Stack';

import RepositoryCard from './RepositoryCard';
import { GIT_CLIENT } from './GitClient';


export default function RepositoryStack() {

  const [repositoryNames, setRepositoryNames] = useState<string[]>([]);

  useEffect(() => {
    GIT_CLIENT.listOwnedPublicRepositories().then((repositories) => {
      const repoNames: string[] = [];

      repositories.forEach((repositoryDetail: any) => {
        repoNames.push(repositoryDetail.name);
      });

      setRepositoryNames(repoNames);
    });
  }, []);

  const renderedRepoStack = repositoryNames.map((repoName: string) => {
    return (
      <RepositoryCard repositoryName={repoName} />
    );
  });

  return (
    <Stack spacing={1}>{renderedRepoStack}</Stack>
  );
}
