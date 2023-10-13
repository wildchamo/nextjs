import { connect, connection } from "mongoose";

const uri = process.env.MONGODB_URI;

const conn = {
  isConnected: false,
};

export async function connectDB() {
  if (conn.isConnected) return;

  const db = await connect(uri);

  // console.log(db.connection.db.databaseName);

  conn.isConnected = db.connections[1].readyState;
}

connection.on("connected", () => {
  console.log("Mongoose is connected");
});

connection.on("error", () => {
  console.log("hay un error");
});
