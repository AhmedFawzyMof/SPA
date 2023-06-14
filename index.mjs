import Home from "./views/Home/index.mjs"
const routes = [
    { path: '/', view: Home },
    { path: '/nothome/:name', view: `<h1>not Hamasa</h1>` },
]


const urlREGEX = (path) => {
    return new RegExp('^' + path.replace(/\//g, '\\/').replace(/:\w+/g, '(.*)') + '$')
}

const urlPARAMS = (route) => {
    const values = route.params.slice(1)
    const keys = Array.from(route.path.matchAll(/:(\w+)/g)).map(result => result[1])

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]]
    }))
}


const Router = () => {

    let HashLocation = window.location.hash.split('#')[1]


    const FilterRoute = routes.map((route) => {
        return {
            path: route.path,
            params: HashLocation.match(urlREGEX(route.path)),
            view: route.view
        }
    })


    let Route = FilterRoute.find(route => route.params !== null)
    if (!Route) {
        Route = {
            path: routes[0],
            view: routes[0].view
        }
    }

    const view = new Route.view(urlPARAMS(Route))

    app.innerHTML = view.getHTML()

}


window.onload = () => {
    if (!window.location.hash) {
        window.location.assign('/#/')
    }
    Router()
    window.onhashchange = () => {
        Router()
    }
}