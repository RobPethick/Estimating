import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
  public router: Router;

  public configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'estimator'], name: 'estimator',      moduleId: 'estimator',      nav: true, title: 'Estimating' }
    ]);

    this.router = router;
  }
}
