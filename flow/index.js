declare module 'react-router' {

  /* components */
  declare export var Router: React$Component<any, any, any>;
  declare export var Link: React$Component<any, any, any>;
  declare export var IndexLink: React$Component<any, any, any>;
  declare export var withRouter: (component: React$Component<any, any, any>,
                                  options: ?{ withRef:boolean }) => React$Component<any, any, any>;

  /* components (configuration) */
  declare export var IndexRedirect: React$Component<any, any, any>;
  declare export var IndexRoute: React$Component<any, any, any>;
  declare export var Redirect: React$Component<any, any, any>;
  declare export var Route: React$Component<any, any, any>;

  /* utils */
  declare export var createRoutes: (routes: React$Element<any>) => Array<Object>;
  declare export var RouterContext: React$Component<any, any, any>;
  declare export var locationShape: Function;
  declare export var routerShape: Function;
  declare export var match: Function;
  declare export var useRouterHistory: (historyFactory: Function) => (options: ?Object) => Object;
  declare export var formatPattern: (pattern: string, params: Object) => string;
  declare export var applyRouterMiddleware: Function;

  /* histories */
  declare export var browserHistory: any;
  declare export var hashHistory: any;
  declare export var createMemoryHistory: Function;
}

declare module 'react-router/lib/PatternUtils' {
  declare var exports: any;
}
