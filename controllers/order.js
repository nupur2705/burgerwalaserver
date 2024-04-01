
import { asyncError } from "../middlewares/errorMiddleware.js";
import { Order } from "../models/order.js";

export const placeOrder = asyncError(async (req, res, next) => {
    const {
        shippingInfo,
        orderItems,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingCharges,
        totalAmount,
    } = req.body;
  
    // const user =  {_id:'660adb521a4a87399ed1049f'};
    const user= req.user._id ;
    const orderOptions = {
        shippingInfo,
        orderItems,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingCharges,
        totalAmount,
      user,
    };
  
    await Order.create(orderOptions);
  
    res.status(201).json({
      success: true,
      message: "Order Placed Successfully via Cash On Delivery",
    });
  });

  export const getMyOrders=asyncError(async(req,res,next)=>{

  });