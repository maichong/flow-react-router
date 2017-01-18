declare module 'react-router' {

  /* components */
  declare export var Router: Class<React$Component<any, any, any>>;
  declare export var Link: Class<React$Component<any, any, any>>;
  declare export var IndexLink: Class<React$Component<any, any, any>>;
  declare export var withRouter: (component: Class<React$Component<any, any, any>>,
                                  options: ?{ withRef:boolean }) => Class<React$Component<any, any, any>>;

  /* components (configuration) */
  declare export var IndexRedirect: Class<React$Component<any, any, any>>;
  declare export var IndexRoute: Class<React$Component<any, any, any>>;
  declare export var Redirect: Class<React$Component<any, any, any>>;
  declare export var Route: Class<React$Component<any, any, any>>;

  /* utils */
  declare export var createRoutes: (routes: React$Element<any>) => Array<Object>;
  declare export var RouterContext: Class<React$Component<any, any, any>>;
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
