import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    // baseURL: "pro"
})

export const { signIn, signUp, useSession } = createAuthClient()