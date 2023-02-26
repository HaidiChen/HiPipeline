import Stack from '@mui/material/Stack';

import RepositoryCard from './RepositoryCard';


interface RepositoryStackProperties {
  repositoryNames: string[],
}

export default function RepositoryStack(props: RepositoryStackProperties) {

  const renderedRepositoryStack = props.repositoryNames.map((repoName: string) => {
    return (
      <RepositoryCard repositoryName={repoName} />
    );
  });

  return (
    <Stack spacing={1}>{renderedRepositoryStack}</Stack>
  );
}
