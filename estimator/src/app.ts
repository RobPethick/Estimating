import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
  public router: Router;

  public configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Estimator';
    config.map([
      { route: ['', 'estimator'], name: 'estimator',      moduleId: 'estimator', nav: true, title: 'Estimator' }
    ]);

    this.router = router;
  }
}
