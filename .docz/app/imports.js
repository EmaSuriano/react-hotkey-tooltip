export const imports = {
  'doc/advancedExamples.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "doc-advanced-examples" */ 'doc/advancedExamples.mdx'),
  'doc/gettingStarted.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "doc-getting-started" */ 'doc/gettingStarted.mdx'),
  'doc/hotkey.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "doc-hotkey" */ 'doc/hotkey.mdx'),
  'doc/hotkeyProvider.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "doc-hotkey-provider" */ 'doc/hotkeyProvider.mdx'),
  'doc/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "doc-index" */ 'doc/index.mdx'),
}
