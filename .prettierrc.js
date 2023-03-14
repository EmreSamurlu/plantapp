module.exports = {
  arrowParens: 'avoid',
  bracketSameLine: true,
  bracketSpacing: false,
  singleQuote: true,
  trailingComma: 'all',
  importOrder: [
    '^(react|react-native)$',
    '<THIRD_PARTY_MODULES>',
    '^./navigation/|^./screens/|^./components/|^./hooks/|^./features/|^./services/|^./utils/|^./constants/|^./styles/|^./assets/',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
