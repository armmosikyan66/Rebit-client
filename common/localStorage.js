// import {
//   STORAGE_KEY_ACCESS,
//   STORAGE_KEY_REFRESH,
//   STORAGE_KEY_USER,
// } from "../constants/AppConstants";

// export const LocalStorage = {
//   getFromLocalStorage: (storageKey) => {
//     const prevStorage = localStorage.getItem(storageKey);
//     return !prevStorage ? null : JSON.parse(prevStorage);
//   },
//   setToLocalStorage: (storageKey, data) => {
//     localStorage.setItem(storageKey, JSON.stringify(data));
//   },
//   updateLocalStorage: (storageKey, data) => {
//     LocalStorage.setToLocalStorage(storageKey, {
//       ...LocalStorage.getFromLocalStorage(storageKey),
//       ...data,
//     });
//   },
//   removeFromLocalStorage: (storageKey) => localStorage.removeItem(storageKey),
// };

// export const getJWTFromLocalStorage = () =>
//   LocalStorage.getFromLocalStorage(STORAGE_KEY_ACCESS);

// export const setJWTInLocalStorage = (data) =>
//   LocalStorage.setToLocalStorage(STORAGE_KEY_ACCESS, data);

// export const updateJWTInLocalStorage = (data) =>
//   LocalStorage.updateLocalStorage(STORAGE_KEY_ACCESS, data);

// export const removeJWTLocalStorage = () =>
//   LocalStorage.removeFromLocalStorage(STORAGE_KEY_ACCESS);

// export const getUSERFromLocalStorage = () =>
//   LocalStorage.getFromLocalStorage(STORAGE_KEY_USER);

// export const setUSERInLocalStorage = (data) =>
//   LocalStorage.setToLocalStorage(STORAGE_KEY_USER, data);

// export const updateUSERInLocalStorage = (data) =>
//   LocalStorage.updateLocalStorage(STORAGE_KEY_USER, data);

// export const removeUSERFromLocalStorage = () =>
//   LocalStorage.removeFromLocalStorage(STORAGE_KEY_USER);

// export const getREFRESHFromLocalStorage = () =>
//   LocalStorage.getFromLocalStorage(STORAGE_KEY_REFRESH);

// export const setREFRESHInLocalStorage = (data) =>
//   LocalStorage.setToLocalStorage(STORAGE_KEY_REFRESH, data);

// export const updateREFRESHInLocalStorage = (data) =>
//   LocalStorage.updateLocalStorage(STORAGE_KEY_REFRESH, data);

// export const removeREFRESHLocalStorage = () =>
//   LocalStorage.removeFromLocalStorage(STORAGE_KEY_REFRESH);
