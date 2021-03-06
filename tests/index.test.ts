import path from 'path';
import pluginTester from 'babel-plugin-tester';
import plugin from '../src';

pluginTester({
  plugin,
  pluginOptions: {
    colorNames: ['--bg*', '--color*'],
  },
  babelOptions: {
    presets: [['typescript']],
  },
  fixtures: path.join(__dirname, 'fixtures')
})