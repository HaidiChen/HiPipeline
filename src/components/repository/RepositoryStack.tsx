import Stack from '@mui/material/Stack';

import RepositoryCard from './RepositoryCard';


interface RepositoryStackProperties {
  repositoryNames: string[],
  onSelect: any,
}

export default function RepositoryStack(props: RepositoryStackProperties) {

  const renderedRepositoryStack = props.repositoryNames.map((repoName: string) => {
    return (
      <RepositoryCard repositoryName={repoName} onSelect={props.onSelect} />
    );
  });

  return (
    <Stack spacing={1}>{renderedRepositoryStack}</Stack>
  );
}
