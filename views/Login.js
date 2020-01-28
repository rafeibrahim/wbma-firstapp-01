import React, {useState} from 'react';
import {AsyncStorage} from 'react-native';
import {Container, Header, Content, Form, Item, Input, Button, Text, Title} from 'native-base';
import PropTypes from 'prop-types';
import {login, register} from '../hooks/APIHooks.js';
import useSignUpForm from '../hooks/LoginHooks';

const Login = (props) => {
  const [error, setError] = useState('');
  // props is needed for navigation
  const {handleUsernameChange,
    handlePasswordChange,
    handleEmailChange,
    handleFullnameChange,
    inputs} = useSignUpForm();
  const signInAsync = async () => {
    try {
      const user = await login(
          {
            username: inputs.username,
            password: inputs.password,
          });
      console.log('Login', user.token);
      await AsyncStorage.setItem('userToken', user.token);
      await AsyncStorage.setItem('user', JSON.stringify(user.user));
      props.navigation.navigate('App');
    } catch (e) {
      console.log(e.message);
    }
  };
  const registerAsync = async () => {
    try {
      const result = await register({
        username: inputs.username,
        password: inputs.password,
        email: inputs.email,
        full_name: inputs.fullname,
      });
      console.log(result);
      if (result.error) {
        setError(result.error);
      }
      signInAsync();
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <Container>
      <Header />
      <Content>
        <Form>
          <Title>
            <Text style={{fontWeight: 'bold'}}>Login</Text>
          </Title>
          <Item>
            <Input
              placeholder='username'
              autoCapitalize='none'
              onChangeText={handleUsernameChange}/>
          </Item>
          <Item last>
            <Input
              placeholder='password'
              autoCapitalize='none'
              secureTextEntry={true}
              onChangeText={handlePasswordChange} />
          </Item>
          <Button
            full
            onPress={() => {
              signInAsync();
            }
            }
          >
            <Text>Sign in!</Text>
          </Button>
        </Form>
        <Form>
          <Title>
            <Text style={{fontWeight: 'bold'}}>Register</Text>
          </Title>
          <Item>
            <Input
              placeholder='username'
              autoCapitalize='none'
              onChangeText={handleUsernameChange}
            />
          </Item>
          <Item>
            <Input
              placeholder='email'
              autoCapitalize='none'
              onChangeText={handleEmailChange}/>
          </Item>
          <Item>
            <Input
              placeholder='fullname'
              autoCapitalize='none'
              onChangeText={handleFullnameChange}/>
          </Item>
          <Item last>
            <Input
              placeholder='password'
              autoCapitalize='none'
              secureTextEntry={true}
              onChangeText={handlePasswordChange} />
          </Item>
          <Button
            full
            onPress={() => {
              registerAsync();
            }
            }
          >
            <Text>Register!</Text>
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

// proptypes here
Login.propTypes = {
  navigation: PropTypes.object,
};

export default Login;
