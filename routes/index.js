const mainRoute = (req, res, next) => {
    // Middleware to serve static pages
    const routes = [
        '/'
    ];

    if (routes.includes(req.url)) {
        return next();
    }

    // here you can use your way to get the path dir ..  
    const pathDir = path.join(__dirname, `../uploads`);

    res.sendFile(pathDir);
}

module.exports = mainRoute;