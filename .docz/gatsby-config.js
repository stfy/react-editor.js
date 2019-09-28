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
        debug: true,
        native: false,
        openBrowser: false,
        o: false,
        open: false,
        'open-browser': false,
        root: 'E:\\Tim\\react-editor.js\\.docz',
        base: '/',
        source: './',
        src: './',
        files: '**/*.mdx',
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
          root: 'E:\\Tim\\react-editor.js',
          templates:
            'E:\\Tim\\react-editor.js\\node_modules\\docz-core\\dist\\templates',
          packageJson: 'E:\\Tim\\react-editor.js\\package.json',
          docz: 'E:\\Tim\\react-editor.js\\.docz',
          cache: 'E:\\Tim\\react-editor.js\\.docz\\.cache',
          app: 'E:\\Tim\\react-editor.js\\.docz\\app',
          appPublic: 'E:\\Tim\\react-editor.js\\.docz\\public',
          appNodeModules: 'E:\\Tim\\react-editor.js\\node_modules',
          appPackageJson: 'E:\\Tim\\react-editor.js\\package.json',
          appYarnLock:
            'E:\\Tim\\react-editor.js\\node_modules\\docz-core\\yarn.lock',
          ownNodeModules:
            'E:\\Tim\\react-editor.js\\node_modules\\docz-core\\node_modules',
          gatsbyConfig: 'E:\\Tim\\react-editor.js\\gatsby-config.js',
          gatsbyBrowser: 'E:\\Tim\\react-editor.js\\gatsby-browser.js',
          gatsbyNode: 'E:\\Tim\\react-editor.js\\gatsby-node.js',
          gatsbySSR: 'E:\\Tim\\react-editor.js\\gatsby-ssr.js',
          importsJs: 'E:\\Tim\\react-editor.js\\.docz\\app\\imports.js',
          rootJs: 'E:\\Tim\\react-editor.js\\.docz\\app\\root.jsx',
          indexJs: 'E:\\Tim\\react-editor.js\\.docz\\app\\index.jsx',
          indexHtml: 'E:\\Tim\\react-editor.js\\.docz\\app\\index.html',
          db: 'E:\\Tim\\react-editor.js\\.docz\\app\\db.json',
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
