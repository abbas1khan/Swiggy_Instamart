import { MMKV } from 'react-native-mmkv'

export const storage = new MMKV({
    id: "my-app-storage",
    encryptionKey: "secret_key"
})

export const mmkvStorage = {
    setItem: (key, value) => {
        storage.set(key, value)
        return Promise.resolve(true)
    },
    getItem: (key) => {
        const value = storage.getString(key)
        return Promise.resolve(value)
    },
    removeItem: (key) => {
        storage.delete(key)
        return Promise.resolve()
    },
}