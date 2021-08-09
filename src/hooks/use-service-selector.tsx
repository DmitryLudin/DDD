import { useMemo } from "react";
import { TServices } from "../providers/root-services/root-services.type";
import { useServices } from "./use-services";

export function useServiceSelector<T>(selector: (services: TServices) => T) {
  const services = useServices();
  const selectedInfo = selector(services);
  const selectedInfoMemo = useMemo(() => selectedInfo, [selectedInfo]);

  return selectedInfoMemo;
}
