// services/storageService.js
import AsyncStorage from '@react-native-async-storage/async-storage';

const TOKEN_KEY = 'userToken';

export const storeToken = async (token) => {
  try {
    await AsyncStorage.setItem(TOKEN_KEY, token);
  } catch (error) {
    console.error('Erreur lors du stockage du token : ', error);
  }
};

export const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem(TOKEN_KEY);
    return token;
  } catch (error) {
    console.error('Erreur lors de la récupération du token : ', error);
    return null;
  }
};

export const removeToken = async () => {
  try {
    await AsyncStorage.removeItem(TOKEN_KEY);
  } catch (error) {
    console.error('Erreur lors de la suppression du token : ', error);
  }
};
