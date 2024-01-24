const indexR = require("./index");
const tvsR = require("./tvs");
const prodsR = require("./prods");
const vipsR = require("./vips");


exports.routesInit = (app) => {
    app.use("/" , indexR);
    app.use("/tvs" , tvsR);
    app.use("/prods" , prodsR);
    app.use("/vips" , vipsR);

}