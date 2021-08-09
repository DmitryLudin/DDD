import { TServices } from "../../../providers/root-services/root-services.type";

export const getUserService = (services: TServices) => services.userSerivce;

export const getUserStore = (services: TServices) =>
  getUserService(services).store;

export const getUsers = (services: TServices) =>
  getUserStore(services).getStoreValue("users");

export const getUserById = (userId: number) => (services: TServices) =>
  getUserStore(services).getUserById(userId);
