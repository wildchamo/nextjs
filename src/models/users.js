import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  identificacion: {
    type: String,
    required: true,
  },
  ciudad: {
    type: String,
    required: true,
  },


  // direccion: {
  //   type: String,
  //   required: true,
  // },

  // rol: {
  //   type: String,
  //   required: true,
  // },
  // email: {
  //   type: String,
  //   unique: true,
  //   required: true,
  // },
  // celular: {
  //   type: String,
  //   required: true,
  // },
  // ocupacion: {
  //   type: String,
  //   required: true,
  // },
  // fechaNacimiento: {
  //   type: Date,
  //   required: true,
  // },
  // fechaVencimientoLicencia: {
  //   type: Date,
  //   required: true,
  // },

  // estado: {
  //   type: String,
  //   required: true,
  // },
});

const User = models.User || model("User", userSchema);

export default User;
