import jwt from 'jsonwebtoken';

//Login Seller : /api/seller/login

export const sellerLogin = async (req, res) => {
    try {
        const {email, password } = req.body;

/*         // 🔍 Debugging logs
    console.log("Received from frontend:", { email, password });
    console.log("From .env:", {
      SELLER_EMAIL: process.env.SELLER_EMAIL,
      SELLER_PASSWORD: process.env.SELLER_PASSWORD,
      JWT_SECRET: process.env.JWT_SECRET
    });
*/
    if(password === process.env.SELLER_PASSWORD && email === process.env.SELLER_EMAIL) {
        const token = jwt.sign({email}, process.env.JWT_SECRET, {expiresIn: '7d'})

        res.cookie('sellerToken', token, {
            httpOnly: true, 
            secure:  true, 
            sameSite: 'none',   
            maxAge: 7 * 24 * 60 * 60 * 1000,    
        });

        return res.json({success: true, message: "Logged In"});
    } else {
        return res.json({success: false, message: "Invalid Credentials"});
    }
    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message});
        
    }

}



// Seller isAuth : /api/seller/is-auth

export const isSellerAuth = async (req, res) => {
    try {
        
        return res.json({success: true })

    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message});
        
    }
}


//Logout Seller : /api/seller/logout

export const SellerLogout = async (req, res) => {
    try {
        res.clearCookie('sellerToken', {
            httpOnly: true,
            secure: true,
            sameSite: 'none',
        })
        return res.json({success: true, message: "Logged Out"})
        

    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message});
    }
}