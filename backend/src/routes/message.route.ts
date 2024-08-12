import express from 'express';

const router = express.Router();

router.get('/conversation', async (req, res) => {
  res.send('conversation route');
});
router.get('/logout', async (req, res) => {
  res.send('Logged out successfully');
});
router.get('/signup', async (req, res) => {
  res.send('Registered successfully');
});

export default router;