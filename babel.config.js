module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          // TODO: 브라우저 지원 범위
          chrome: '51',
        },
        // TODO: entry vs usage
        useBuiltIns: 'entry',
        corejs: '3.31.0',
      },
    ],
    ['@babel/preset-react'],
  ],
};
