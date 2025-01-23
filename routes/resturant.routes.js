const { updateInfo, getMenu, updateMenu, deleteMenu, addMenu, getResturantOrders, updateResturantstatus } = require("../controllers/resturant.controller")

const router = require("express").Router()


router
    .post("/update-info", updateInfo)
    .get("/get-Menu",getMenu)
    .post("/add-Menu",addMenu)
    .put("/update-Menu/:mid",updateMenu)
    .delete("/delete-Menu/:mid",deleteMenu)
    .get("/get-orders",getResturantOrders)
    .put("/change-status/:oid",updateResturantstatus)
module.exports = router