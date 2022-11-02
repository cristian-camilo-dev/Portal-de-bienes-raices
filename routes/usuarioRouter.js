import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Ruta de usuarios');
});

router.get('/nosotros', (req, res) => {
    res.send('Ruta de nosotros');
});



export default router;