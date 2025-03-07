import jwt from 'jsonwebtoken';

const userAuth = async (req, res, next) => {
    const { token } = req.cookies;
    if (!token) {
        res.json({ sucsess: false, message: "Not authorized, Login again!" })
    }
    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
        if (tokenDecode.id) {
            req.body.userId = tokenDecode.id;
        }
        else {
            return res.json({ sucsess: false, message: "Not authorized, Login again!" })
        }
        next();

    } catch (error) {
        res.json({
            sucsess: false, message: error.message
        })

    }
}

export default userAuth;