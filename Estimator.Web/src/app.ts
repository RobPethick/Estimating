import { Router, RouterConfiguration } from 'aurelia-router';

export class App {
  public router: Router;

  public configureRouter(config: RouterConfiguration, router: Router) {
    config.map([
      { route: ['', 'estimate/:id'], name: 'estimator', moduleId: 'estimator', nav: true, title: 'Estimator' },
      { route: ['customers'], name: 'customers', moduleId: 'customers', nav: true, title: 'Edit Customers' }
    ]);

    this.router = router;
  }
}
