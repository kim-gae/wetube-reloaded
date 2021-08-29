import multer from "multer";

export const localMiddleware = (req, res, next) => {
    res.locals.loggedIn = Boolean(req.session.loggedIn);
    res.locals.siteName = "Wetube";
    res.locals.loggedInUser = req.session.user || {};
    next();
};

export const protectorMiddleware = (req, res, next) => {
    if (req.session.loggedIn) {
        next();
    } else {
        req.flash("error", "Not authorize.");
        return res.redirect("/login");
    }
};

export const publicOnMiddleware = (req, res, next) => {
    if (!req.session.loggedIn) {
        return next();
    } else {
        req.flash("error", "Not authorize.");
        return res.redirect("/");
    }
};

export const avatarUpload = multer({
    dest: "uploads/avatar/",
    limits: {
        fileSize: 3000000,
    },
});
export const videoUpload = multer({
    dest: "uploads/videos/",
    limits: {
        fileSize: 1000000000,
    },
});
