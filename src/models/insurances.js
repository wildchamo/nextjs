import { Schema, model, models } from "mongoose";

const insuranceSchema = new Schema({
  idUser: {
    type: String,
    required: true,
  },
  nombrePoliza: {
    type: String,
    required: true,
  },
  tipoPoliza: {
    type: String,
    required: true,
  },
  companiaAseguradora: {
    type: String,
    required: true,
  },
  fechaVencimiento: {
    type: Date,
    required: true,
  },
  documentos: {
    type: [String], // This assumes that documents are stored as an array of strings (e.g., URLs or file names)
    default: [],
  },
});
const Insurance = models.Insurance || model("Insurance", insuranceSchema);

export default Insurance;
