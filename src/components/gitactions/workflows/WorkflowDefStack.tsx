import { useState, useEffect} from "react";

import Stack from '@mui/material/Stack';

import WorkflowDefCard from './WorkflowDefCard';
import { GIT_CLIENT } from '../../../git/GitClient';


interface WorkflowDefStackProperties {
  repositoryName: string,
}

export default function WorkflowDefStack(props: WorkflowDefStackProperties) {

  const repoName = props.repositoryName;
  const [workflowIds, setWorkflowIds] = useState<number[]>([]);

  useEffect(() => {
    GIT_CLIENT.listRepositoryWorkflows(repoName).then((workflowDefs) => {
      const ids = workflowDefs.map(item => item.id);

      setWorkflowIds(ids); 
    });

  }, [repoName]);

  const renderedWorkflowDefStack = workflowIds.map((workflowId: number) => {
    return (
      <WorkflowDefCard repositoryName={repoName} workflowId={workflowId} />
    );
  });

  return (
    <Stack spacing={1}>{renderedWorkflowDefStack}</Stack>
  );
}
