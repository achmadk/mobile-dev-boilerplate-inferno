export function checkCordova() {
	return (window.cordova !== undefined) ? true : false;
}

export function checkAndroid() {
	return navigator.userAgent.indexOf('Android') !== -1
}

export function isMaterial() {
	return checkCordova() ? (checkAndroid() ? 'material' : 'ios') : 'ios';
}

export function isAndroid() {
	return checkCordova() ? (checkAndroid() ? true : false) : false;
}

export function setBackIcon() {
	return checkCordova() ? (checkAndroid() ? "ion-md-arrow-back" : "ion-ios-arrow-back") : "ion-ios-arrow-back"
}

const closeIconIos = {
	iconClass: 'ion-ios-close',
	iconStyle: { fontSize: "3em" }
}

const closeIconAndroid = {
	iconClass: 'ion-md-close',
	iconStyle: { fontSize: "2em" }
}

export function setCloseIcon() {
	return checkCordova() ? (checkAndroid() ? closeIconAndroid : closeIconIos) : closeIconIos
}

export function setSettingsIcon() {
	return checkCordova() ? (checkAndroid() ? "ion-md-settings" : "ion-ios-settings") : "ion-ios-settings"
}

export function addPaddingBottom() {
	return (checkCordova()) ? ((checkAndroid()) ? { paddingBottom: 50 } : {}) : {}
}

export default function addFixedIcon() {
	return (checkCordova()) ? ((checkAndroid()) ? "" : " fa-fw") : " fa-fw";
}

export default function addItemInputField() {
	return (checkCordova()) ? ((checkAndroid()) ? " item-input-field" : "") : "";
}

export default function addInputsList() {
	return (checkCordova()) ? ((checkAndroid()) ? " inputs-list" : "") : "";
}

export default function addButtonRaised() {
	return (checkCordova()) ? ((checkAndroid()) ? " button-raised" : "") : "";
}
