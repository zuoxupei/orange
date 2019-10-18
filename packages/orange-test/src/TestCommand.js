import puremvc from 'puremvc';

export class TestCommand extends puremvc.SimpleCommand {

  execute(notification) {
    console.log("***",notification);
  }
}