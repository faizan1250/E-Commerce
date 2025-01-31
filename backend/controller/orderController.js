import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

// ORDER THROUGH COD
const placeOrderCod = async(res,req) => {
    try {
        // TAKING INFORMATION FROM USER
        const{ userId, items, amount, address} = req.body ;
    
        // SENDINF INFO OF USER AS AN OBJECT TO DB AS PER DB MODEL
        const orderData = {
            userId,
            items,
            amount,
            address,
            paymentMethod : "COD",
            payment : false,
            Date : Date.now()        
        }
    
        // CREATING NEW ORDER
        const neworder = new orderModel(orderData)
        // SAVING NEW ORDER
        await neworder.save()
    
        await userModel.findByIdAndUpdate(userId,{cartData:{}})
        res.json({ success : true , message : "Order Placed"})
    
    } catch (error) {
        console.log(error)
        res.json({ success : false, message : error.message})
    }
}

// ORDER THROUGH STRIPE
const placeOrderStripe = async(res,req) => {

}

// ORDER THROUGH RAZORPAY
const placeOrderRazorpay = async(res,req) => {

}

// ORDER FOR ADMIN PANEL
const allOrders = async(res,req) => {

}

// ORDER FOR FRONTEND
const userOrder = async(res,req) => {

}

// UPDATE ORDER STATUS from admin panel
const updateStatus = async(res,req) => {

}

export { placeOrderCod, placeOrderRazorpay, placeOrderStripe, allOrders, userOrder, updateStatus}
