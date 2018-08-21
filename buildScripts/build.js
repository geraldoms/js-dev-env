/* eslint-disable no-console */
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

process.env.NODE_ENV = 'prod';

console.log(chalk.green('Generating bundle for prod. This will take a moment...'));
webpack(webpackConfig).run((err, stats) => {
  if(err){
    console.log(chalk.red(err));
    return 1;
  }

  const jsonStats = stats.toJson();

  if(jsonStats.hasErros){
    return jsonStats.errors.map(err => console.log(chalk.red(err)));
  }

  if(jsonStats.hasWarnings){
    console.log(chalk.yellow('Webpack warnings:'));
    jsonStats.warnings.map(w => console.log(chalk.yellow(w)));
  }

  console.log(`Webpack stats: ${stats}`);
  console.log(chalk.green('Your app has built for prod and written to /dist.'));

  return 0;
})
