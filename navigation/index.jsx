import React from "react";
// import { useAuthentication } from '../utils/hooks/useAuthentication';
import ClientNavigation from "./ClientNavigation";
import AuthNavigation from "./AuthNavigation";

export default function RootNavigation() {
  //   const { user } = useAuthentication();
  const user = true;
  console.log(user);

  return user ? <ClientNavigation /> : <AuthNavigation />;
}
