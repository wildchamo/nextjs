import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        username: {
          label: "Identificación",
          type: "text",
          placeholder: "jsmith",
        },
        password: { label: "Contraseña", type: "password" },
      },

      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const user = { id: "1", name: "J Smith", email: "jsmith@example.com" };
        return user;    
      },
    }),
  ],
});

export { handler as GET, handler as POST };