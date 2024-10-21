import { PasswordInput, TextInput, Text, Button, Group, LoadingOverlay, Modal, Flex } from '@mantine/core';
import React, { useContext, useState } from 'react';
import { useFormik } from 'formik';
import loginValidationSchema from '@/components/Login/schemas/login_form.schema.js';
import { userRoutes } from '@/models/routes.js';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import config from '@/config/projectConfig.json';

import PropTypes from 'prop-types';
import { useUser } from '@/providers/UserProvider.jsx';
import CustomBotton from '@/components/shared/CustomBottom/CustomBotton';

function Login({ opened, closed }) {
  const navigate = useNavigate();
  const [loadingLogin, setLoadingLogin] = useState(false);
  const { validateUserLogin } = useUser();
  
  function handleForgotPassword() {
   navigate(userRoutes.RESET_PASSWORD)
  }


  const loginForm = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginValidationSchema,
    validateOnChange: false,
    onSubmit: async (values) => {
      setLoadingLogin(true);
      const _queryResult = await validateUserLogin(values);
      if (_queryResult) {
        setLoadingLogin(false);
        await Swal.fire({
            icon: 'success',
            title: 'Login efetuado com sucesso',
            showClass: {
              popup: `
               animate__animated
               animate__fadeInUp
               animate__faster
              `,
            },
            hideClass: {
              popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `,
            },
            showConfirmButton: false,
            timer: 1500,
          },
        );
      }
      setLoadingLogin(false);
      await Swal.fire({
          icon: 'error',
          title: 'Email ou senha inválidos',
          showClass: {
            popup: `
               animate__animated
               animate__fadeInUp
               animate__faster
              `,
          },
          hideClass: {
            popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `,
          },
          showConfirmButton: true,
        },
      );
    },
  });
  
  return (
    <Modal
      centered
      styles={{
        body: {
          backgroundColor: config.colors.modal.background,
        },
        header: {
          backgroundColor: config.colors.modal.header_background,
        },
      }}
      opened={opened}
      onClose={closed}
      direction={'column'}
      gap={'0.5rem'}
      transitionProps={{ transition: 'fade', duration: 200 }}>
      <LoadingOverlay
        overlayProps={{ blur: 2 }}
        loaderProps={{ color: 'pink', type: 'bars' }}
        visible={loadingLogin}>
      </LoadingOverlay>
      <Group align={'center'} p={'1rem'} justify={'center'}>
        <Text
          c={config.colors.modal.text_color}
          size={'40px'}
          align={'center'}
        >
          Arknights
        </Text>
      </Group>
      <TextInput
        name="email"
        variant="filled"
        label="Email"
        c={config.colors.modal.text_color}
        styles={{
          input: {
            background: config.colors.modal.input.background,
            borderColor: config.colors.modal.input.borderColor,
            color: config.colors.modal.input.color,
          },
        }}
        placeholder="Email"
        value={loginForm.values.email}
        onChange={(e) => {
          loginForm.handleChange(e);
          loginForm.validateField('email');
        }}
        onBlur={() => {
          loginForm.validateField('email');
          loginForm.setFieldTouched('email');
        }}
        error={loginForm.touched.email && loginForm.errors.email}
      />
      <PasswordInput
        name="password"
        variant="filled"
        label="Senha"
        placeholder="Senha"
        c={config.colors.modal.text_color}
        styles={{
          input: {
            background: config.colors.modal.input.background,
            borderColor: config.colors.modal.input.borderColor,
            color: config.colors.modal.input.color,
          },
        }}
        value={loginForm.values.password}
        onChange={(e) => {
          loginForm.handleChange(e);
          loginForm.validateField('password');
        }}
        onBlur={() => {
          loginForm.validateField('password');
          loginForm.setFieldTouched('password');
        }}
        error={loginForm.touched.password && loginForm.errors.password}
      >
      </PasswordInput>
      <Flex direction={'column'} justifyContent={'center'}>
        <CustomBotton parentMethod={handleForgotPassword} label={'Esqueci minha senha'} style={{backgroundColor: config.colors.modal.button.background, fontWeight: 500, color: config.colors.modal.button.text_color}}/>
        <CustomBotton parentMethod={loginForm.handleSubmit} label={'Entrar'} style={{backgroundColor: config.colors.modal.button.confirm_button.background}}/>
      </Flex>
    </Modal>
  );
}

Login.propTypes = {
  opened: PropTypes.bool.isRequired,
  closed: PropTypes.func,
};
export default Login;