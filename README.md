# Ruffle ![](https://img.shields.io/badge/npm-ruffle-blue) ![](https://img.shields.io/badge/npm-lombok-brightgreen)

- _A lightweight npm package for typescript decorators which mimic some of the functionalities offered by lombok for java._

## Usage

- Please ensure that you have set **`experimentalDecorators`** set as **`true`** in your tsconfig.json

### @Data

- **`@Data`** adds **getters** and **setters** for all defined attributes. Refer example below:
- If you define your own getters / setters methods then it will be overwritten by **@Data**
<blockquote>
A get method will capitilize the first letter of the attribute and add "get" as a prefix. So basically a get method for "name" will look like "getName" <br/>
A set method will capitilize the first letter of the attribute and add "set" as a prefix. So basically a set method for "name" will look like "setName"
</blockquote>

```ts
import { Data } from 'ruffle';

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
import { Getters } from 'ruffle';

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
import { Setters } from 'ruffle';

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
-
