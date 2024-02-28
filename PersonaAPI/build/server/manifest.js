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
		client: {"start":"_app/immutable/entry/start.BP-XGciX.js","app":"_app/immutable/entry/app.E-vUWJuS.js","imports":["_app/immutable/entry/start.BP-XGciX.js","_app/immutable/chunks/entry.Cbhw0m9C.js","_app/immutable/chunks/scheduler.BWOwpdHh.js","_app/immutable/entry/app.E-vUWJuS.js","_app/immutable/chunks/scheduler.BWOwpdHh.js","_app/immutable/chunks/index.MrXRJrN0.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0--4VxhtOP.js')),
			__memo(() => import('./chunks/1-B1F19pk6.js')),
			__memo(() => import('./chunks/2-YyWdl7MV.js')),
			__memo(() => import('./chunks/3-BB-JKAK-.js')),
			__memo(() => import('./chunks/4-KR-GRRFM.js')),
			__memo(() => import('./chunks/5-B0wenqdo.js')),
			__memo(() => import('./chunks/6-BJTWsby-.js')),
			__memo(() => import('./chunks/7-Car1dmoo.js')),
			__memo(() => import('./chunks/8-DaQ1og_-.js')),
			__memo(() => import('./chunks/9-IE74Szgp.js')),
			__memo(() => import('./chunks/10-DIkii8Bv.js')),
			__memo(() => import('./chunks/11-MPgvpGjC.js')),
			__memo(() => import('./chunks/12-CE2NB79J.js'))
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
