import { connect } from "../db";

export const getAlumnos = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query("SELECT * FROM alumnos");
  console.log(rows);
  res.json(rows);
};

export const getAlumno = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query("SELECT * FROM alumnos WHERE id = ?", [
    req.params.id,
  ]);
  console.log(rows[0]);
  res.json(rows[0]);
};

export const getAlumnosCount = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query("SELECT COUNT(*) FROM alumnos");
  res.json(rows[0]["COUNT(*)"]);
};

export const createAlumno = async (req, res) => {
  const connection = await connect();
  const [results] = await connection.query(
    "INSERT INTO alumnos (nombre, direccion, telefono) VALUES (?, ?, ?)",
    [req.body.nombre, req.body.direccion, req.body.telefono]
  );
  res.json({
    id: results.insertId,
    ...req.body,
  });
};

export const deleteAlumno = async (req, res) => {
  const connection = await connect();
  await connection.query("DELETE FROM alumnos WHERE id = ?", [req.params.id]);
  res.sendStatus(204);
};

export const updateAlumno = async (req, res) => {
  const connection = await connect();
  await connection.query("UPDATE alumnos SET ? WHERE id = ?", [
    req.body,
    req.params.id,
  ]);
  res.sendStatus(204);
};
