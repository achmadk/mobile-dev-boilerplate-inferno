export function checkCordova() {
	return (window.cordova !== undefined) ? true : false;
}

export function checkAndroid() {
	return navigator.userAgent.indexOf('Android') !== -1 ? true : false
}

export function isMaterial() {
	return isAndroid() ? 'material' : 'ios'
}

export function isAndroid() {
	return checkCordova() ? (checkAndroid() ? true : false) : false;
}

export function setBackIcon() {
	return isAndroid() ? "ion-md-arrow-back" : "ion-ios-arrow-back"
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
	return isAndroid() ? closeIconAndroid : closeIconIos
}

export function setSettingsIcon() {
	return isAndroid() ? "ion-md-settings" : "ion-ios-settings"
}

export function addPaddingBottom() {
	return isAndroid() ? { paddingBottom: 50 } : {}
}

export function addFixedIcon() {
	return isAndroid() ? "" : " fa-fw"
}

export function addItemInputField() {
	return isAndroid() ? " item-input-field" : ""
}

export function addInputsList() {
	return isAndroid() ? " inputs-list" : ""
}

export function addButtonRaised() {
	return isAndroid() ? " button-raised" : ""
}
