const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","logo.jpg","sitemap.txt","welcome1.png","welcome2.gif"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".txt":"text/plain",".gif":"image/gif"},
	_: {
		client: {"start":"_app/immutable/entry/start.C7wN9rTC.js","app":"_app/immutable/entry/app.ZCJJ8lP-.js","imports":["_app/immutable/entry/start.C7wN9rTC.js","_app/immutable/chunks/entry.FLlzqz6F.js","_app/immutable/chunks/scheduler.BWOwpdHh.js","_app/immutable/chunks/index.CQyEyRbW.js","_app/immutable/entry/app.ZCJJ8lP-.js","_app/immutable/chunks/scheduler.BWOwpdHh.js","_app/immutable/chunks/index.MrXRJrN0.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-CKtVT0Fr.js')),
			__memo(() => import('./chunks/1-2WwlHwT_.js')),
			__memo(() => import('./chunks/2-BrIqYYBc.js')),
			__memo(() => import('./chunks/3-BbHXrraW.js')),
			__memo(() => import('./chunks/4-CXDGcDc0.js')),
			__memo(() => import('./chunks/5-B0wenqdo.js')),
			__memo(() => import('./chunks/6-CWM6uaaL.js')),
			__memo(() => import('./chunks/7-BOjvrQH4.js')),
			__memo(() => import('./chunks/8-BhCFvFnW.js')),
			__memo(() => import('./chunks/9-DQTEHP77.js')),
			__memo(() => import('./chunks/10-CMLUR8qa.js')),
			__memo(() => import('./chunks/11-CmwJybHK.js')),
			__memo(() => import('./chunks/12-Dbj-B-Xq.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/create",
				pattern: /^\/create\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/dashbord",
				pattern: /^\/dashbord\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/disconnect",
				pattern: /^\/disconnect\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/discover",
				pattern: /^\/discover\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/profile",
				pattern: /^\/profile\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/profile/[id]",
				pattern: /^\/profile\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/search",
				pattern: /^\/search\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/[id]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/[id]/edit",
				pattern: /^\/([^/]+?)\/edit\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
