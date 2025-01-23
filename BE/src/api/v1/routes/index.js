import routerAuth from "./auth.route.js";

const route = (app) => {
    const version = '/api/v1';

    app.use(version + "/authen", routerAuth);
}

export default route;