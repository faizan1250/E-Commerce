import express from 'express'
import{ placeOrderCod, placeOrderRazorpay, placeOrderStripe, allOrders, userOrder, updateStatus} from '../controller/orderController.js'
import adminAuth from '../middleware/adminAuth.js'

const orderRouter = express.Router()

// Admin features
orderRouter.post('/list', adminAuth, allOrders)
orderRouter.post('/status', adminAuth, updateStatus)

// Payment features
orderRouter.post('/cod', adminAuth, placeOrderCod)
orderRouter.post('/stripe', adminAuth, placeOrderStripe)
orderRouter.post('/razorpay', adminAuth, placeOrderRazorpay)

//  user Featutes
orderRouter.post('/userorder',adminAuth, userOrder)

export default orderRouter ;