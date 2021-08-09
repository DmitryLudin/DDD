import { rootServices } from "./root-services.provider";

type TServicesKeys = keyof typeof rootServices;

export type TServices = {
  [key in TServicesKeys]: typeof rootServices[key];
};
