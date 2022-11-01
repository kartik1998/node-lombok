/**
 * Sets up a storage map for all instantiated objects.
 * Every object is added in the map as {id: object} where id is object._id.
 * object._id is incremented whenever a new object is instantiated.
 * Static method findById can be used to find an object by id.
 */
const Store =
  () =>
  <T extends { new (...args: any[]): {} }>(constructor: T) => {
    let __counter = 1;
    const storage: { [key: number]: any } = {};
    return class extends constructor {
      public static findById(id: number) {
        return storage[id];
      }
      public readonly _id: number;
      getId: () => number;
      constructor(...args: any[]) {
        super(...args);
        this._id = __counter++;
        const self = this;
        this.getId = () => self._id;
        storage[this._id] = this;
      }
    };
  };

export default Store;
