const multer = require("multer")

const storage = multer.diskStorage({
    filename: (req, file, cb) => { cb(null, file.originalname) },

})
const resturantUpload = multer({ storage }).fields([
    { name: "certificate", maxCount: 1 },
    { name: "hero", maxCount: 1 }
])
const riderUpload = multer({ storage }).fields([
    { name: "licence", maxCount: 1 },
    { name: "rc", maxCount: 1 }
])
//                                              👇fronted key resturantMenu
const menuUpload = multer({ storage }).array("image")
const UpdateMenuUpload = multer({ storage }).single("image")

module.exports = { resturantUpload, menuUpload,UpdateMenuUpload,riderUpload }