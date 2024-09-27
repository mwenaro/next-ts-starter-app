import CredentialProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const authConfig = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    CredentialProvider({
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@email.com",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "password",
        },
      },
      async authorize(credentials, req) {
        const user = {
          id: "1",
          name: "Mwero",
          email: credentials?.email as string,
        };
        if (
          credentials?.email != "admin@gmail.com" ||
          credentials.password != "password"
        ) {
          // Any object returned will be saved in `user` property of the JWT
          return null;
        }
        return user;
      },
    }),
  ],
  // pages: {
  //   signIn: "/", //sigin page
  // },
};

export default authConfig;
