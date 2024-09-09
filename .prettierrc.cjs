module.exports = {
  // plugins: [
  //   '@trivago/prettier-plugin-sort-imports',
  // ],
  plugins: ['prettier-plugin-tailwindcss'],
  useTabs: false,
  tabWidth: 2,
  singleQuote: true,
  trailingComma: 'none',
  semi: false,
  arrowParens: 'avoid',
  importOrderParserPlugins: ['typescript'],
  importOrder: [
    '^client-only$',
    '^server-only$',
    '^(react/(.*)$)',
    '^(next/(.*)$)',
    '<THIRD_PARTY_MODULES>',
    '^(@/(.*)$)',
    '^[./]'
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true
}
