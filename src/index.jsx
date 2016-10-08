import Inferno from 'inferno'
import {render} from 'inferno-dom'

import initRouter from 'modules/router';
import {isAndroid} from 'modules/utils/if-android'

import SampleComponent from 'components/sample-component'

export * from 'framework7'

require.ensure([], require => {
	if (isAndroid()) {
		require.ensure([], require => {
			require(`framework7/dist/css/framework7.material.min.css`);
			require(`framework7/dist/css/framework7.material.colors.min.css`);
		}, "style.material" )
	} else {
		require.ensure([], require => {
			require(`framework7/dist/css/framework7.ios.min.css`);
			require(`framework7/dist/css/framework7.ios.colors.min.css`);
		}, "style.ios" )
	}
	require('assets/css-preprocessors/app.less');
	require('ionicons/dist/scss/ionicons.scss');
}, "styles")

const todos = [
	{id: 1, text: 'React', status: 'active', editing: false },
	{id: 2, text: 'Redux', status: 'active', editing: false},
	{id: 3, text: 'Immutable', status: 'completed', editing: false},
	{id: 4, text: 'Webpack', status: 'completed', editing: false},
	{id: 5, text: 'Inferno', status: 'active', editing: false}
];

initRouter();

// export var F7 = new Framework7({
export var f7 = new Framework7({
    modalTitle: 'awesome app',
    material: isAndroid(),
    animateNavBackIcon: true,
    pushState: true,
    scrollTopOnStatusbarClick: true,
    uniqueHistoryIgnoreGetParameters: true,
    allowDuplicateUrls: true
})

window.f7 = f7

export var main = f7.addView('.view-main', {
		dynamicNavbar: !isAndroid()
})

window.main = main

render(
  <SampleComponent todos={todos} />,
  document.getElementById('sample-id')
);
