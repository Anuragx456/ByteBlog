import { initAuth } from "../lib/auth.js";
import { fromNodeHeaders } from "better-auth/node";

const auth = async (req, res, next) => {
    try {
        const authInstance = initAuth();
        const session = await authInstance.api.getSession({
            headers: fromNodeHeaders(req.headers)
        });

        if (!session) {
            return res.json({success: false, message: "Unauthorized"});
        }

        req.user = session.user;
        next();
    } catch (error) {
        res.json({success: false, message: "Error validating session"});
    }
}

export default auth;