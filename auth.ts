import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const {
  handlers: { GET, POST }, auth,
} = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "pericles1011@yahoo.com.br",
        },
        password: { label: "senha", type: "password" },
      },
      async authorize(credentials) {
        console.log(credentials)
        return { id: "1", name: "Péricles", email: "pericles1011" };
      },
    }),
  ],
});
