export default function checkLogin() {
    let data = getMeta()
    return (data) ? ((data.isLoggedIn) ? true : false) : false
}

export function hasToken() {
    return (getAccessToken().access_token !== "")
}

export function getToken() {
    return { Authorization: ("Bearer " + getAccessToken().access_token) }
}

export function getTokenHeader() {
    return { headers: getToken() }
}


export function getAccessToken() {
    let data = getUser()
    return { access_token: (data) ? data.access_token : "" }
}

export function addUser(response) {
	setStarted()
    let access_token = response.data.access_token;
    localStorage.setItem('user', JSON.stringify({ access_token: access_token }))
}

export function setLogout() {
	unsetStarted()
	removeUser()
}

export function skipStarted() {
    let app = { isStarted: true, isLoggedIn: checkLogin() };
    localStorage.setItem('app', JSON.stringify(app));
}

function getUser() {
    return JSON.parse(localStorage.getItem('user'))
}

function removeUser() {
    localStorage.removeItem('user')
}

function getMeta() {
    return JSON.parse(localStorage.getItem('app'));
}

function setStarted() {
    var app = { isStarted: true, isLoggedIn: true }
    localStorage.setItem('app', JSON.stringify(app))
}

function unsetStarted() {
    let app = { isStarted: true, isLoggedIn: false }
    localStorage.setItem('app', JSON.stringify(app))
}
