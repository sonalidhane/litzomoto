const { getLocation, updateCustomerInfo, getResturant, getResturantMenu, placedOrder, getOrder, getHistory } = require("../controllers/customer.controller")

const router = require("express").Router()


router
    .post("/get-location", getLocation)
    .post("/update-info", updateCustomerInfo)
    .get("/get-resturant", getResturant)
    .get("/get-resturant-menu/:rid", getResturantMenu)
    .post("/place-order", placedOrder)
    .get("/get-order", getOrder)
    .get("/get-order-history", getHistory)

module.exports = router