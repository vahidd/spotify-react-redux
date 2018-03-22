const ghpages = require('gh-pages');
console.log('Deploying...');
ghpages.publish('dist', function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log('Deployed!');
  }
});
