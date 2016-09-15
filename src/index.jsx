import React from 'react';
import {render} from 'react-dom';
import {List, Map} from 'immutable';

import initRouter from 'modules/router';
// import {f7, tabs} from 'modules/app'
import {isMaterial, isAndroid} from 'modules/utils/if-android'

import SampleComponent from 'components/SampleComponent'

export * from 'framework7'
// require('framework7')

require(`framework7/dist/css/framework7.material.min.css`);
require(`framework7/dist/css/framework7.material.colors.min.css`);
require('assets/css-preprocessors/app.less');
require('ionicons/dist/scss/ionicons.scss');

const todos = List.of(
	Map({id: 1, text: 'React', status: 'active', editing: false }),
	Map({id: 2, text: 'Redux', status: 'active', editing: false}),
	Map({id: 3, text: 'Immutable', status: 'completed', editing: false}),
	Map({id: 4, text: 'Webpack', status: 'completed', editing: false})
);

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
  <SampleComponent />,
  document.getElementById('sample-id')
);
