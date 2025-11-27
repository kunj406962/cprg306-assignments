// Part 4: layout code starts

import { AuthContextProvider } from "./_utils/auth-context";

export default function Layout({ children }) {
  return <AuthContextProvider>{children}</AuthContextProvider>;
}

// Part 4: layout code ends