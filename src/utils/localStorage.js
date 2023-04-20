/* eslint-disable import/no-anonymous-default-export */
const storageKeyToken = "TestChatUserKey";
const storageKeyDarkMode = "TestChatDarkMode";

const saveUser = (user) =>
  localStorage.setItem(storageKeyToken, JSON.stringify(user));

const loadUser = () => JSON.parse(localStorage.getItem(storageKeyToken));

const removeUser = () => localStorage.removeItem(storageKeyToken);

const saveDarkMode = (boolean) =>
  localStorage.setItem(storageKeyDarkMode, boolean);

const loadDarkMode = () => JSON.parse(localStorage.getItem(storageKeyDarkMode));

export default {
  saveUser,
  loadUser,
  removeUser,
  saveDarkMode,
  loadDarkMode,
};
