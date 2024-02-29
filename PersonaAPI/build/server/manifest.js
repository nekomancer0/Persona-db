const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["default-icons/default-icon-klee.jpg","default-icons/default-icon-luffy.jpg","default-icons/default-icon-makoto.jpg","default-icons/default-icon-masaru.jpg","default-icons/default-icon-slayer.jpg","default-icons/default-icon-venti.jpg","favicon.png","logo.jpg","sitemap.txt","welcome1.png","welcome2.gif"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png",".txt":"text/plain",".gif":"image/gif"},
	_: {
		client: {"start":"_app/immutable/entry/start.B4r9bC-n.js","app":"_app/immutable/entry/app.MngorCTN.js","imports":["_app/immutable/entry/start.B4r9bC-n.js","_app/immutable/chunks/entry.CvtO8IbG.js","_app/immutable/chunks/scheduler.BWOwpdHh.js","_app/immutable/entry/app.MngorCTN.js","_app/immutable/chunks/scheduler.BWOwpdHh.js","_app/immutable/chunks/index.MrXRJrN0.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-r0rmBvYH.js')),
			__memo(() => import('./chunks/1-Cce7lyg3.js')),
			__memo(() => import('./chunks/2-N8kktGDM.js')),
			__memo(() => import('./chunks/3-DKrCyuBc.js')),
			__memo(() => import('./chunks/4-BjP-BMtG.js')),
			__memo(() => import('./chunks/5-B0wenqdo.js')),
			__memo(() => import('./chunks/6-Bdmn9SGe.js')),
			__memo(() => import('./chunks/7-DMb_Iq4c.js')),
			__memo(() => import('./chunks/8-Cq_d7YEX.js')),
			__memo(() => import('./chunks/9-C662R74n.js')),
			__memo(() => import('./chunks/10-B7Fvhp6p.js')),
			__memo(() => import('./chunks/11-2fQbuZKf.js')),
			__memo(() => import('./chunks/12-BFDT1IZN.js'))
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
