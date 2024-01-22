import express from 'express';
const router = express. Router();
import { authUser,registerUser,getUserProfile,logoutUser,updateUserProfile
} from '../Controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';
router.post('/signup', registerUser);
router.post('/login', authUser);
router.post('/logout', logoutUser);
router.route('/profile').get(protect,getUserProfile).patch(protect,updateUserProfile);

export default router;    

