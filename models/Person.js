import t from 'tcomb-form-native';

// Form Native allows us to define structs that serve as an underlying model for creating forms and storing form data.

const Person = t.struct({
  name: t.String,
  email: t.String,
  password: t.String,
  phoneNumber: t.Number
});

export const formOptions = {
    fields: {
      email: {
        keyboardType: 'email-address', 
        // change keyboard layout to email input
        autoCapitalize: 'none', 
        // start email addresses with lower-case
      },
      password: {
        secureTextEntry: true,  
        // mask password input
      }
    }
  }




export default Person