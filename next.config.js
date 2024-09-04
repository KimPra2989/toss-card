// next.config.js
module.exports = {
  compiler: {
    emotion: {
      sourceMap: true,
      autoLabel: 'dev-only',
      labelFormat: '[local]',
      importMap: {
        '@emotion/react': {
          jsx: {
            canonicalImport: ['@emotion/react', 'jsx'],
            styledBaseImport: ['@emotion/styled', 'styled'],
          },
        },
      },
    },
  },
}
