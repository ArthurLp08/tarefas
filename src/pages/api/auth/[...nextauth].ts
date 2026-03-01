import NextAuth from "next-auth";
import Discord from "next-auth/providers/discord";

export const authOptions = {
    providers: [
        Discord({
            clientId: process.env.DISCORD_CLIENT_ID as string,
            clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
        })
    ],
    secret: process.env.JWT_SECRET as string,
}

export default NextAuth(authOptions);

