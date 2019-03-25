import mkdirp from 'mkdirp';
import { DEFAULT_WORKFLOW, DEFAULT_FOLDERS } from '../config';
const { execFile } = require('child_process');

export function createDirectory(projectTags, projectName, projectLocation) {

  const projectDirectory =
    projectLocation + '/' +
    projectName + '/';

  if (!projectName) {
    console.log('Please name your project')
  }
  else if (projectTags.length === 0) {
    console.log('Please select a project type')
  }
  else {
    DEFAULT_WORKFLOW.map(workflow => {
      const projectWorkflow = '[' + workflow + ']';
      projectTags.map(tag => {
        const projectTag = '[' + tag + ']';

        mkdirp(
          projectDirectory +
          'Design-' +
          tag + '/' +
          projectWorkflow + ' ' +
          projectTag + ' ' +
          projectName + '/' +
          'Exported'
        );

      });
    });

    DEFAULT_FOLDERS.map(folder => {
      mkdirp(
        projectDirectory +
        folder
      );
    })

    execFile('open', ['-R', projectDirectory], (error, stdout, stderr) => {
      if (error) {
        throw error;
      }
    });

  }
};
