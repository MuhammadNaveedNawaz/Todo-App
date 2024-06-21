import { Router } from "express";
import { getAllNotes, 
    create,
    getSingleNote, 
    removeSingleNote, 
    updateSingleNote 
} from "../controllers/node";

const router = Router()

router.post("/create", create);
router.patch("/:noteId", updateSingleNote);
router.delete("/:noteId", removeSingleNote);
router.get('/', getAllNotes)
router.get('/:id',getSingleNote)

 export default router;
