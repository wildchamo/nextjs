import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  identificacion: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    // required: true,
  },
  ciudad: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  direccion: {
    type: String,
    required: true,
  },
  celular: {
    type: String,
    required: true,
  },
  fechaNacimiento: {
    type: Date,
    required: true,
  },
  fechaVencimientoLicencia: {
    type: Date,
    required: true,
  },
  rol: {
    type: String,
    enum: ["Usuario"],
    default: "Usuario",
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  documentos: {
    type: [String],
    default: [],
  },
});

const User = models.User || model("User", userSchema);

export default User;
