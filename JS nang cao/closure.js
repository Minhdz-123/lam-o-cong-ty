function createStorage(key) {
    const store = JSON.parse(localStorage.get(key)) ?? {}
    const save = ()=>{
        localStorage.setItem(key,JSON.stringify(store))
    }
    const storage = {
        get(key) {
            return store[key]
        },
        set(key, value) {
            store[key] = value
        },
        remove(key) {
            delete store[key]
        }
    }
    return storage;
}