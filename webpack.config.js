import { resolve } from 'path';

export const entry = './js/script.js';
export const output = {
  path: resolve(__dirname, './'),
  filename: './main.js/main.js',
};
export const module = {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugin: ['@babel/plugin-transform-runtime'],
        },
      },
    },
  ],
};
