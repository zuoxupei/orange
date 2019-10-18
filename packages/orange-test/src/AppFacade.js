import puremvc from 'puremvc';
import * as controller from './TestCommand';

export default class AppFacade extends puremvc.Facade {

  initializeController() {
    super.initializeController();
    this.registerCommand("TestCommand",controller.TestCommand);
  }

  initializeModel() {
    super.initializeModel();
  }

  initializeView() {
    super.initializeView();
  }

  static getInstance(multitonKey) {
    const instanceMap = puremvc.Facade.instanceMap;
    if (!instanceMap[multitonKey]) {
      instanceMap[multitonKey] = new AppFacade(multitonKey);
    }
    return instanceMap[multitonKey];
  }
}
