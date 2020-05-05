// Shamelessly copied form
// https://github.com/jasonmerino/react-native-simple-store/blob/fe17187e811572fa2a1645ae084747e58360f4e6/src/index.js

import merge from 'lodash.merge';
import AsyncStorage from '@react-native-community/async-storage';

export default {
  async get(key: string): Promise<any> {
    if (!Array.isArray(key)) {
      const value = await AsyncStorage.getItem(key);
      return JSON.parse(value || '');
    } else {
      const values = await AsyncStorage.multiGet(key);
      return values.map((value_1) => {
        return JSON.parse(value_1[1] || '');
      });
    }
  },

  save(key: string | string[], value: any): Promise<any> {
    if (!Array.isArray(key)) {
      return AsyncStorage.setItem(key, JSON.stringify(value));
    } else {
      var pairs = key.map(function (pair) {
        return [pair[0], JSON.stringify(pair[1])];
      });
      return AsyncStorage.multiSet(pairs);
    }
  },

  async update(key: string, value: any): Promise<any> {
    const item = await this.get(key);
    value = typeof value === 'string' ? value : merge({}, item, value);
    return AsyncStorage.setItem(key, JSON.stringify(value));
  },

  delete(key: string | string[]): Promise<any> {
    if (Array.isArray(key)) {
      return AsyncStorage.multiRemove(key);
    } else {
      return AsyncStorage.removeItem(key);
    }
  },

  keys(): Promise<any> {
    return AsyncStorage.getAllKeys();
  },

  async push(key: string, value: any): Promise<any> {
    const currentValue = await deviceStorage.get(key);
    if (currentValue === null) {
      // if there is no current value populate it with the new value
      return deviceStorage.save(key, [value]);
    }
    if (Array.isArray(currentValue)) {
      return deviceStorage.save(key, [...currentValue, value]);
    }
    throw new Error(
      `Existing value for key "${key}" must be of type null or Array, received ${typeof currentValue}.`,
    );
  },
};
