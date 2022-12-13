import { Router } from "express";
import {
  createAlumno,
  deleteAlumno,
  getAlumno,
  getAlumnos,
  getAlumnosCount,
  updateAlumno,
} from "../controllers/alumnos";

const router = Router();

router.get("/alumnos", getAlumnos);

router.get("/alumnos/count", getAlumnosCount);

router.get("/alumnos/:id", getAlumno);

router.post("/alumnos", createAlumno);

router.delete("/alumnos/:id", deleteAlumno);

router.put("/alumnos/:id", updateAlumno);

export default router;
