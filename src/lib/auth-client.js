import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    baseURL: "https://assignment-08-tiles-gallery-two.vercel.app"
})

export const { signIn, signUp, useSession } = createAuthClient()