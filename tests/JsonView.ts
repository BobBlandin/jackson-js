import test from 'ava';
import {ObjectMapper, JsonView} from '../src';

class Views {
  static public = class Public {};
  static internal = class Internal {};
}

class User {
  id: number;
  email: string;
  @JsonView({value: () => [Views.internal]})
  password: string;
  firstname: string;
  lastname: string;
  @JsonView({value: () => [Views.internal]})
  activationCode: string;

  constructor(id: number, email: string, password: string, firstname: string, lastname: string, activationCode: string) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.firstname = firstname;
    this.lastname = lastname;
    this.activationCode = activationCode;
  }
}

test('@JsonView', t => {
  const password = 'rtJ9FrqP!rCE';
  const activationCode = '75afe654-695e-11ea-bc55-0242ac130003';
  const user = new User(1, 'john.alfa@gmail.com', password, 'John', 'Alfa', activationCode);

  const objectMapper = new ObjectMapper();

  const jsonDataWithoutView = objectMapper.stringify<User>(user);
  t.assert(jsonDataWithoutView.includes('john.alfa@gmail.com'));
  t.assert(jsonDataWithoutView.includes(password));
  t.assert(jsonDataWithoutView.includes(activationCode));

  const jsonDataWithViewPublic = objectMapper.stringify<User>(user, {withViews: () => [Views.public]});
  t.assert(jsonDataWithViewPublic.includes('john.alfa@gmail.com'));
  t.assert(!jsonDataWithViewPublic.includes(password));
  t.assert(!jsonDataWithViewPublic.includes(activationCode));

  const jsonDataWithViewInternal = objectMapper.stringify<User>(user, {withViews: () => [Views.internal]});
  t.assert(jsonDataWithViewInternal.includes('john.alfa@gmail.com'));
  t.assert(jsonDataWithViewInternal.includes(password));
  t.assert(jsonDataWithViewInternal.includes(activationCode));
});