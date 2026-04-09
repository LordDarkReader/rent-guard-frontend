"use client"

import { signIn, signOut, useSession } from "next-auth/react"

export default function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
        <>
          <p>Logged in as {session.user?.email}</p>
          <button onClick={() => signOut()}>Logout</button>
        </>
    )
  }

  return <button onClick={() => signIn("keycloak")}>Login</button>
}