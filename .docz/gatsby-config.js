const { mergeWith } = require('lodash/fp')

let custom
try {
  custom = require('./gatsby-config.custom')
} catch (err) {
  custom = {}
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'React Editor.js wrapper',
    description: 'React wrapper component for Editor.js',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        themesDir: 'src',
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: true,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: false,
        o: false,
        open: false,
        'open-browser': false,
        root: 'D:\\dev\\react-editor.js\\.docz',
        base: '/',
        source: './',
        src: './',
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'React Editor.js wrapper',
        description: 'React wrapper component for Editor.js',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: 'D:\\dev\\react-editor.js',
          templates:
            'D:\\dev\\react-editor.js\\node_modules\\docz-core\\dist\\templates',
          packageJson: 'D:\\dev\\react-editor.js\\package.json',
          docz: 'D:\\dev\\react-editor.js\\.docz',
          cache: 'D:\\dev\\react-editor.js\\.docz\\.cache',
          app: 'D:\\dev\\react-editor.js\\.docz\\app',
          appPublic: 'D:\\dev\\react-editor.js\\.docz\\public',
          appNodeModules: 'D:\\dev\\react-editor.js\\node_modules',
          appPackageJson: 'D:\\dev\\react-editor.js\\package.json',
          appYarnLock:
            'D:\\dev\\react-editor.js\\node_modules\\docz-core\\yarn.lock',
          ownNodeModules:
            'D:\\dev\\react-editor.js\\node_modules\\docz-core\\node_modules',
          gatsbyConfig: 'D:\\dev\\react-editor.js\\gatsby-config.js',
          gatsbyBrowser: 'D:\\dev\\react-editor.js\\gatsby-browser.js',
          gatsbyNode: 'D:\\dev\\react-editor.js\\gatsby-node.js',
          gatsbySSR: 'D:\\dev\\react-editor.js\\gatsby-ssr.js',
          importsJs: 'D:\\dev\\react-editor.js\\.docz\\app\\imports.js',
          rootJs: 'D:\\dev\\react-editor.js\\.docz\\app\\root.jsx',
          indexJs: 'D:\\dev\\react-editor.js\\.docz\\app\\index.jsx',
          indexHtml: 'D:\\dev\\react-editor.js\\.docz\\app\\index.html',
          db: 'D:\\dev\\react-editor.js\\.docz\\app\\db.json',
        },
      },
    },
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
