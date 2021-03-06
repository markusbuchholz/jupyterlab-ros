import { JupyterFrontEndPlugin } from '@jupyterlab/application';

import { launch } from './launch';
import { logConsole } from './logconsole';
import { master } from './master';
import { menu } from './menu';
import { settings } from './settings';
import { zethus } from './zethus';

const ros: JupyterFrontEndPlugin<any>[] = [
  launch,
  logConsole,
  master,
  menu,
  settings,
  zethus
];

export default ros;