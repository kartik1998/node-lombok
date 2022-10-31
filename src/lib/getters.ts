import { capitilizeFirstLetter as capitalize } from '../utils/utility';

/**
 * Adds getters for all declared attributes in a class (like lombok)
 */
const Getters =
  () =>
  <T extends { new (...args: any[]): {} }>(constructor: T) => {
    return class extends constructor {
      constructor(...args: any[]) {
        super(...args);
        const props: Array<string> = Reflect.ownKeys(this) as Array<string>;
        props.forEach((prop: string) => {
          const capitalizedKey = capitalize(prop);
          Object.defineProperty(this, `get${capitalizedKey}`, { value: () => this[prop] }); // get
        });
      }
    };
  };

export default Getters;
