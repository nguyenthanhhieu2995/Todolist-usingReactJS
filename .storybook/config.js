import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

addDecorator(withInfo); 

function loadStories() {
  require('../stories/index.js');
  require('bootstrap/dist/css/bootstrap.min.css');
  // You can require as many stories as you need.
}
configure(loadStories, module);