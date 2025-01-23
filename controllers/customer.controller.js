const asyncHandler = require("express-async-handler")
const axios = require('axios')
const { checkEmpty } = require("../utils/checkEmpty")
const Customer = require("../models/Customer")
const Resturant = require("../models/Resturant")
const Menu = require("../models/Menu")
const Order = require("../models/Order")

exports.getLocation = asyncHandler(async(req,res) => {
    const {latitude,longitude} = req.body
    const {isError,error} = checkEmpty({latitude,longitude})

    if(isError){
        return res.status(400)
        .json({message:"all felds required",error})
    }
    const {data} = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}%2C${longitude}&key=${process.env.CAGE_API_KEY}`)
    
    let str = ""
    let city = data.results[0].components.city
    str += "" + data.results[0].components.road
    str += "" + data.results[0].components.neighbourhood
    str += "" + data.results[0].components.suburb
    str += "" + data.results[0].components.city
    str += "" + data.results[0].components.postcode


    res.json({message:"location fetch success",result:{address:str,city}})
    //setLoc(data.results[0].formatted)
})

exports.updateCustomerInfo = asyncHandler(async(req,res) => {
    const {address,city,gender} = req.body
    const {isError,error} = checkEmpty({address,city,gender})

    if(isError){
        return res.status(400)
        res.json({message:"all felds required",error})
    }
   
    const {result} = await Customer.findByIdAndUpdate(req.user,{
        address,
        city,
        gender,
        infoComplete:true,
    },{new:true})
    res.json({message:"profile update success",result})
    //setLoc(data.results[0].formatted)
})

exports.getResturant = asyncHandler(async (req,res)=>{
    const result = await Resturant.find({isActive:true}).select("-password -createdAt -updatedAt -__v -certificate -infoComplete -isActive")
    res.json({message:"resturant fetch success",result})
})

exports.getResturantMenu = asyncHandler(async (req,res)=>{
    const result = await Menu.find({resturant:req.params.rid}).select("-createdAt -updatedAt -__v")
    res.json({message:"menu fetch success",result})
})

exports.placedOrder = asyncHandler(async (req,res)=>{
    const {resturant,items} = req.body
    const {error,isError} = checkEmpty({resturant,items})
    if(isError){
        return res.status(400).json({message:"all fields required",error})
    }
    await Order.create({resturant,items,customer:req.user})
    res.json({message:"order placed success"})
})

exports.getOrder = asyncHandler(async (req,res)=>{
    const result = await Order
    .find({customer:req.user}).select("-customer -createdAt -updatedAt -__v")
    .populate("resturant","name hero")
    .populate("items.dish","name type image price")
    .sort({createdAt: -1})
    res.json({message:"order get success",result})
})
