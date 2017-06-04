import { Router, RouterConfiguration } from 'aurelia-router';

export class App {
  public router: Router;

  public configureRouter(config: RouterConfiguration, router: Router) {
    config.map([
      { route: ['', 'estimate/:id'], name: 'estimator', moduleId: 'estimator', nav: true, title: 'Estimator' }
    ]);

    this.router = router;
  }
}
