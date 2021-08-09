import { useContext } from "react";
import { ServiceContext } from "../providers/root-services/root-services.provider";

export function useServices() {
  const context = useContext(ServiceContext);

  if (context === undefined) {
    throw new Error("useServices must be used within RootServiceProvider");
  }

  return context;
}
