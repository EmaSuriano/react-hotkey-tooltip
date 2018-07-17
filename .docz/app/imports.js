export const imports = {
  'doc/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "doc-index" */ 'doc/index.mdx'),
}
