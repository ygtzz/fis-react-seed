
fis.set('project.ignore',['node_modules/**', 'fis-conf.js','component.json','README.md']);
//fis.set('project.files', 'mod/pages/index/index.html'); // 按需编译

var sModPath = 'client/mods';

fis.unhook('components');
fis.hook('node_modules');
fis.hook('commonjs',{
    baseUrl: sModPath,
	extList: ['.js', '.jsx', '.es', '.ts', '.tsx']
});

fis.match('/{node_modules,' + sModPath + '}/**.{js,jsx,es}', {
    isMod: true
});

fis.match(sModPath + '/**.{js,jsx,es}', {
    useSameNameRequire:true
});

fis.match('client/static/(**)',{
    release: '/static/$1'
});

fis.match('**.scss', {
    rExt: '.css',
    parser: fis.plugin('node-sass', {
        
    })
});
// 编译所有后缀为 jsx 的文件为 js
fis.match('{*.jsx,*:jsx,*.es}', {
    parser: fis.plugin('babel-5.x', {
        sourceMaps: true
    }),
    rExt: '.js'
});
// 添加css和image加载支持
fis.match('*.{js,jsx,ts,tsx,es}', {
    preprocessor: [
      fis.plugin('js-require-css'),
      fis.plugin('js-require-file', {
        useEmbedWhenSizeLessThan: 3 * 1024 // 小于3k用base64
      })
    ]
});

fis.match(sModPath + "/pages/index/(*.html)",{
    release: '/$1',
    useCache : false
});

fis.match('::package', {
    postpackager: fis.plugin('loader',{
        resourceType: 'mod',
        useInlineMap: true
    })
});

fis.media('prod')
    .match('**.{css,scss}', {
        optimizer: fis.plugin('clean-css'),
        useHash:true,
        useSprite:true
    })
    .match('**.{js,es,jsx}',{
        optimizer: fis.plugin('uglify-js'),         
        useHash:true
    })
    .match(/\.png$/i, {
    	optimizer: fis.plugin('png-compressor')
  	})
    .match('node_modules/**',{
        useHash: false
    })
    .match('::package', {
        packager: fis.plugin('deps-pack', {
            'pkg/react.all.js':[
                // "node_modules/react/dist/react.min.js",
                // "node_modules/react-dom/dist/react-dom.min.js",
                // "node_modules/react-router/umd/ReactRouter.min.js",
                // "node_modules/react-redux/dist/react-redux.min.js",
                // "node_modules/react-router-redux/dist/ReactRouterRedux.min.js",
                "node_modules/react/react.js:deps",
                "node_modules/react-dom/index.js:deps",
                "node_modules/react-router/lib/index.js:deps",
                "node_modules/react-redux/lib/index.js:deps",
                "node_modules/react-router-redux/lib/index.js:deps",
            ],
            'pkg/npm.js': [
                sModPath + '/pages/index/index.jsx:deps',
                sModPath + '/pages/trend/trend.jsx:deps',                                
                sModPath + '/pages/atricle/atricle.jsx:deps',
                '!' + sModPath + '/**'
            ],
            'pkg/index.js': [
                sModPath + '/pages/index/index.jsx',
                sModPath + '/pages/index/index.jsx:deps'
            ],
            'pkg/index.css': [
                sModPath + '/pages/index/index.jsx:deps'
            ],
            'pkg/trend.js': [
                sModPath + '/pages/trend/trend.jsx',
                sModPath + '/pages/trend/trend.jsx:deps'
            ],
            'pkg/trend.css': [
                sModPath + '/pages/trend/trend.jsx:deps'
            ],
            'pkg/article.js': [
                sModPath + '/pages/article/article.jsx',
                sModPath + '/pages/article/article.jsx:deps'
            ],
            'pkg/article.css': [
                sModPath + '/pages/article/article.jsx:deps'
            ]
        })
    });