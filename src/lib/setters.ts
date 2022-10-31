import { capitilizeFirstLetter as capitalize } from '../utils/utility';

/**
 * Adds setters for all declared attributes in a class (like lombok)
 */
const Setters =
  () =>
  <T extends { new (...args: any[]): {} }>(constructor: T) => {
    return class extends constructor {
      constructor(...args: any[]) {
        super(...args);
        const props: Array<string> = Reflect.ownKeys(this) as Array<string>;
        props.forEach((prop: string) => {
          const capitalizedKey = capitalize(prop);
          Object.defineProperty(this, `set${capitalizedKey}`, {
            value: (newValue: any) => {
              this[prop] = newValue;
            },
          });
        });
      }
    };
  };

export default Setters;
