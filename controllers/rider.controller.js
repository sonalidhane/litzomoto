const asyncHandler = require("express-async-handler")
const Order = require("../models/Order")
const { io } = require("../socket/socket")

exports.getRiderOrder = asyncHandler(async (req, res) => {
    const result = await Order
        .find({ rider: req.user, status: { $ne: "delivered" } })
        .select("-rider -createdAt -updatedAt -__v")
        .populate("resturant", "name email mobile address")
        .populate("customer", "name email mobile address")
        .populate("items.dish", "name type price image")
        .sort({ createdAt: -1 })
    res.json({ message: "order fetch success", result })
})

exports.updateOrderStatus = asyncHandler(async (req, res) => {
    const { oid } = req.params
    await Order.findByIdAndUpdate(oid, { status: req.body.status })
    io.emit("status update")
    res.json({ message: "order status update success" })
})