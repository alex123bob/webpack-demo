import _ from 'lodash';
import testPng from './resources/test.png';

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ') + '<br/>' + '<img src="' + testPng + '" />';

  return element;
}

document.body.appendChild(component());