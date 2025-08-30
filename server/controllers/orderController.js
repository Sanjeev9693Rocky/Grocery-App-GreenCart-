import Order from '../models/Order.js';
import Product from '../models/Product.js';
import User from '../models/User.js'
import Razorpay from 'razorpay'
import crypto from 'node:crypto'


// Place Order COD :  /api/order/cod

export const placeOrderCOD = async (req, res) => {
    try {
        const userId = req.userId
        const { items, address } = req.body;
        if (!address || items.length === 0) {
            return res.json({ success: false, message: "Invalid, data" })
        }
        if (!userId) {
            return res.json({ success: false, message: "Please login!" })
        }
        // calculate Amount using Items
        let amount = await items.reduce(async (acc, item) => {
            const product = await Product.findById(item.product);
            return (await acc) + product.offerPrice * item.quantity;
        }, 0)

        //Add Tax Charge (2%)
        amount += Math.floor(amount * 0.02);

        await Order.create({
            userId,
            items,
            amount,
            address,
            paymentType: "COD",
        });

        return res.json({ success: true, message: "Order Placed Successfully" })

    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
}




///////////////////////////////////

// Place Order razorpay :  /api/order/razorpay

export const placeOrderRazorpay = async (req, res) => {
    try {
        const { items, address } = req.body;

        if (!address || items.length === 0) {
            return res.json({ success: false, message: "Invalid, data" })
        }

        let productData = [];

        // calculate Amount using Items
        let amount = await items.reduce(async (acc, item) => {
            const product = await Product.findById(item.product);
            productData.push({
                name: product.name,
                price: product.offerPrice,
                quantity: item.quantity,
            });
            return (await acc) + product.offerPrice * item.quantity;
        }, 0)

        //Add Tax Charge (2%)
        amount += Math.floor(amount * 0.02);

        const razorpay = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_SECRET,
        });

        //raxorpay Gateway Initialize
        const options = {
            'amount': amount * 100,
            'currency': "INR",
            'receipt': "order_rcptid_11"
        };

        const order = await razorpay.orders.create(options);

        if (!order) {
            return res.status(500).send("Error");
        }

        return res.json(order);

    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
}

//razorpay weebhooks to Verify payments action : /razorpay
export const verifyOrder = async (req, res) => {

    const userId = req.body.userId
    const { items, address, razorpay_order_id, razorpay_payment_id, razorpay_signature, amount } = req.body;

    const sha = crypto.createHmac("sha256", process.env.RAZORPAY_SECRET);
    //order_id + "|" + razorpay_payment_id
    sha.update(`${razorpay_order_id}|${razorpay_payment_id}`);
    const digest = sha.digest("hex");
    if (digest !== razorpay_signature) {
        return res.status(400).json({ message: "Transaction failed!" });
    }

    try {
        await Order.create({
            userId,
            items,
            amount: amount / 100,
            address,
            paymentType: "Online",
            isPaid: true
        });

        await User.findByIdAndUpdate(userId, { cartItems: {} });
        res.status(201).send({ success: true, message: 'Payment success, order placed.' })

    } catch (error) {
        console.log(error)
        res.status(402).send({ success: false, message: 'Payment Failed, Try again!' })
    }

}


////////////////////////////////////////////////////////////////////////////////___






//Get Orders by User Id   :  /api/order/user

export const getUserOrders = async (req, res) => {
    try {
        //const {userId} = req.body;
        const { userId } = req;
        const orders = await Order.find({
            userId,
            $or: [{ paymentType: "COD" }, { isPaid: true }]
        }).populate("items.product address").sort({ createdAt: -1 });
        res.json({ success: true, orders });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}


//Get All Orders (for seller / admin)    :  /api/order/seller

export const getAllOrders = async (req, res) => {
    try {

        const orders = await Order.find({

            $or: [{ paymentType: "COD" }, { isPaid: true }]
        }).populate("items.product address").sort({ createdAt: -1 });
        res.json({ success: true, orders });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}