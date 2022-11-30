import { Auth } from '@aws-amplify/auth';
import { Authenticator, Radio, RadioGroupField } from '@aws-amplify/ui-react';
import { useRef } from 'react';
// import '@aws-amplify/ui-react/styles.css';
import './SignInSignUp.css';

import { AccountType } from '../constants';

export default function SignInSignUp(): JSX.Element {
  // Why not use a controlled component? When choosing a radio button for the custom attribute
  // "custom:accountType" in the Cognito UserPool, the provider resets all other default inputs
  // for standard attributes. We can revisit AWS Amplify UI later.
  const accountTypeRef = useRef({ accountType: undefined });
  const components = {
    SignUp: {
      FormFields() {
        return (
          <>
            <Authenticator.SignUp.FormFields />
            <RadioGroupField isRequired label="Account type" name="accountType">
              <Radio value={AccountType.PlantEngineer}>Plant Engineer</Radio>
              <Radio value={AccountType.Admin}>Admin</Radio>
            </RadioGroupField>
          </>
        );
      },
    },
  };
  const services = {
    async handleSignUp(formData: any) {
      const { username, password, attributes } = formData;
      if (!accountTypeRef.current.accountType) {
        throw new Error('"Account type" is a required field.');
      }
      return Auth.signUp({
        username,
        password,
        attributes: {
          ...attributes,
          'custom:accountType': accountTypeRef.current.accountType,
        },
      });
    },
    async validateCustomSignUp(formData: any) {
      accountTypeRef.current.accountType = formData.accountType;
    },
  };
  return (
    <Authenticator
      components={components}
      loginMechanisms={['email']}
      services={services}
      signUpAttributes={['email', 'name', 'phone_number']}
    />
  );
}
