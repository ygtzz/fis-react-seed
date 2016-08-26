
fis.set('project.ignore',['node_modules/**', 'fis-conf.js','component.json','README.md']);
//fis.set('project.files', 'mod/pages/index/index.html'); // 按需编译

fis.unhook('components');
fis.hook('node_modules');
fis.hook('commonjs',{
    baseUrl: './mod',
	extList: ['.js', '.jsx', '.es', '.ts', '.tsx']
});

fis.match('/{node_modules,mod}/**.{js,jsx,es}', {
    isMod: true
});

fis.match('/mod/**.{js,jsx,es}', {
    useSameNameRequire:true
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

fis.match('**',{
    release: '/static/$0'
});

fis.match("pages/index/(*.html)",{
    release: '/$1',
    useCache : false
});

fis.match("/static/(**)",{
    release: '/static/$1'
});

fis.match('::package', {
    postpackager: fis.plugin('loader',{
        resourceType: 'mod',
        useInlineMap: true
    })
});

fis.set('baseUrl','http://cdn.com');
fis.set('cssPath',fis.get('baseUrl') + '/css/xpromt/efmp');
fis.set('jsPath',fis.get('baseUrl') + '/js/xpromt/efmp');
fis.set('imgPath',fis.get('baseUrl') + '/images/xpromt/efmp');

fis.media('prod')
    .match('**.{css,scss}', {
        optimizer: fis.plugin('clean-css'),
        useHash:true,
        useSprite:true
    })
    .match('**.js',{
        optimizer: fis.plugin('uglify-js'),         
        useHash:true
    })
    .match(/\.png$/i, {
    	optimizer: fis.plugin('png-compressor')
  	})
    .match('node_modules/**',{
        optimizer: null,
        useHash: false
    })
    // .match('/widget/**.{css,scss}', {
    //     packTo: '/static/widget/widget.css'
    // })
    // .match('/widget/(**).{js,jsx}', {
    //     packTo: '/static/widget/widget.js'
    // })
    // .match('/pages/(**)/(*).{css,scss}', {
    //     packTo:'/static/pages/page.css'
    // })
    // .match('/pages/(**)/(*).{js,jsx}', {
    //     packTo:'/static/pages/page.js'
    // });
    .match('::package', {
        packager: fis.plugin('deps-pack', {
            'pkg/react.js': [
                'node_modules/react/dist/react.min.js',
                'node_modules/react-dom/dist/react-dom.min.js'
            ],
            'pkg/index.js': [
                'mod/pages/index/index.jsx',
                'mod/pages/index/index.jsx:deps',
                '!react:deps'
            ],
            'pkg/index.css': [
                'mod/pages/index/index.jsx:deps'
            ]
        })
    });