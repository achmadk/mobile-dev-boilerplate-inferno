import Inferno from 'inferno'
import {render} from 'inferno-dom'

import initRouter from 'modules/router';
import {isMaterial, isAndroid} from 'modules/utils/if-android'

import SampleComponent from 'components/sample-component'

export * from 'framework7'
// require('framework7')

require(`framework7/dist/css/framework7.${isMaterial()}.min.css`);
require(`framework7/dist/css/framework7.${isMaterial()}.colors.min.css`);
require('assets/css-preprocessors/app.less');
require('ionicons/dist/scss/ionicons.scss');

const todos = [
	{id: 1, text: 'React', status: 'active', editing: false },
	{id: 2, text: 'Redux', status: 'active', editing: false},
	{id: 3, text: 'Immutable', status: 'completed', editing: false},
	{id: 4, text: 'Webpack', status: 'completed', editing: false}
];

initRouter();

// export var F7 = new Framework7({
export var f7 = new Framework7({
    modalTitle: 'TurEZ',
    material: isAndroid(),
    animateNavBackIcon: true,
    pushState: true,
    scrollTopOnStatusbarClick: true,
    uniqueHistoryIgnoreGetParameters: true,
    allowDuplicateUrls: true
})

window.f7 = f7

export var main = f7.addView('.view-main', {
		dynamicNavbar: true
})

window.main = main

render(
  <SampleComponent todos={todos} />,
  document.getElementById('sample-id')
);
