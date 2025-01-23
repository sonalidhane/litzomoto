const { getRiderOrder, updateOrderStatus  } = require("../controllers/rider.controller")

const router = require("express").Router()

router
    .get("/get-orders",getRiderOrder)
    .put("/update-orders-status/:oid",updateOrderStatus)
    
module.exports = router