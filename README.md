# node-lombok ![](https://img.shields.io/badge/npm-node--lombok-blue) ![](https://img.shields.io/badge/npm-lombok-brightgreen)

- _A lightweight npm package for typescript decorators which mimic some of the functionalities offered by lombok for java._

## Usage

- Install with `npm i node-lombok`
- Please ensure that you have set **`experimentalDecorators`** set as **`true`** in your tsconfig.json

### @Data

- **`@Data`** adds **getters** and **setters** for all defined attributes. Refer example below:
- If you define your own getters / setters methods then it will be overwritten by **@Data**
<blockquote>
A get method will capitilize the first letter of the attribute and add "get" as a prefix. So basically a get method for "name" will look like "getName" <br/>
A set method will capitilize the first letter of the attribute and add "set" as a prefix. So basically a set method for "name" will look like "setName"
</blockquote>

```ts
import { Data } from 'node-lombok';

@Data()
class User {
  [x: string]: any;
  private name: string;
  private email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}
const user = new User('', '');
user.setName('user');
user.setEmail('user@email.com');
console.log(user.getName());
console.log(user.getEmail());
```

### @Getters

- **`@Getters`** adds **getters** for all defined attributes
- If you define your own getter method then it will be overwritten by **@Getters**
<blockquote>
A get method will capitilize the first letter of the attribute and add "get" as a prefix. So basically a get method for "name" will look like "getName"
</blockquote>

```ts
import { Getters } from 'node-lombok';

@Getters()
class User {
  [x: string]: any;
  private name: string;
  private email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}
const user = new User('user', 'user@email');
console.log(user.getName());
console.log(user.getEmail());
```

### @Setters

- **`@Setters`** adds **setters** for all defined attributes
- If you define your own setter method then it will be overwritten by **@Setters**
- A set method is will capitilize the first letter of the attribute and add `set` as a prefix. So basically a set method for **name** will look like `setName`
<blockquote>
A set method will capitilize the first letter of the attribute and add "set" as a prefix. So basically a set method for "name" will look like "setName"
</blockquote>

```ts
import { Setters } from 'node-lombok';

@Setters()
class User {
  [x: string]: any;
  private name: string;
  private email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}
const user = new User('', '');
user.setName('user');
user.setEmail('user@email.com');
console.log(user);
```

### @Store

- **`@Store`** sets up **storage** for all objects of a class.
- **storage** is basically just a map where the instantiated object is stored agains it's **`_id`**.
- The **`_id`** is auto incremented and storageMap looks like: `{ _id: object }`.

<blockquote>
If you use please don't define "_id", "getId()" and "static findById" in your class as they are already defined by the decorator <br/>
You'll have to use @ts-ignore as a comment when calling `ClassName.findById` because ts doesn't recognize `findById` method
</blockquote>

```ts
import { Store } from 'node-lombok';

@Store()
class User {
  [x: string]: any;
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
}
const a = new User('A');
const b = new User('B');
// b will have _id = 2 so you can search it from storage like:

// @ts-ignore
console.log(User.findById(2));
```
