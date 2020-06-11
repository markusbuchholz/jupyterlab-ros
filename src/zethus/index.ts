import { JupyterFrontEnd, JupyterFrontEndPlugin } from '@jupyterlab/application';
import { ICommandPalette } from '@jupyterlab/apputils';

//import { ZethusWidget } from './zethus_widget';

export const rosZethus: JupyterFrontEndPlugin<void> = {
  id: "jupyterlab-ros/zethus",
  autoStart: true,
  requires: [ICommandPalette],
  activate: (app: JupyterFrontEnd, palette: ICommandPalette) => {

    const { commands } = app;

    let command = 'jupyterlab-ros/zethus:open';
    commands.addCommand(command, {
      label: 'Open Zethus',
      caption: 'Open a new Zethus view.',
      execute: (args: any) => {
        //const widget = new ZethusWidget();
        //app.shell.add(widget, 'main');
      }
    });

    palette.addItem({ command, category: 'ROS' });
  }
};