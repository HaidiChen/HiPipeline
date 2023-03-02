import { useState, useEffect} from "react";

import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

import { GIT_CLIENT } from '../../git/GitClient';


interface RepositorySelectProperties {
  onSelect: any,
}

export default function RepositorySelect(props: RepositorySelectProperties) {

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

  return (
    <Autocomplete
      multiple
      sx={{ width: 600 }}
      autoHighlight
      options={repositoryNames}
      onChange={(event: any, newValue:string[] | null) => {
        props.onSelect(newValue);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose a repository"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password'
          }}
          placeholder="Hello World"
        />
      )}
    />
  );
}
