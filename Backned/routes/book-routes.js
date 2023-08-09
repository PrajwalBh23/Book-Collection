import express from 'express';
import { getAllBooks, addBooks, getbyID, updateBook, delectBook } from '../controllers/controller.js';

const router = express.Router();

router.get("/", getAllBooks);
router.post("/", addBooks)
router.get("/:id", getbyID)
router.put('/:id', updateBook)
router.delete('/:id', delectBook)



export default router;