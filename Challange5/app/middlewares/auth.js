const authService = require ('./../services/auth')

exports.authorize  = async (req, res, next) => {
    try{
        const bearerToken = req.headers.authorization;

        const user = await authService.authorize(bearerToken)

        req.user = user;
        next();
    }catch(err){
        res.status(err.statusCode || 500).json({
            status : "Fail",
            message: err.message,
        })
    }
}

exports.isSuperAdmin = (req, res, next) => {
    const { role } = req.user;

    if (role !== 'SUPERADMIN'){
        res.status(404).json({
            status : "FAIL",
            message : 'FORBIDDEN',
        })
        return;
    }
    next();
}

exports.isSuperOrAdmin = (req, res, next) => {
    const { role } = req.user;

    if (role !== 'SUPERADMIN' && role !== 'ADMIN') {
        res.status(403).json({
            status: "FAIL",
            message: 'FORBIDDEN',
        });
        return;
    }
    next();
}
