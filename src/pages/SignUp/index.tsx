import React, { useCallback, useRef } from 'react';

import {
  FiArrowLeft, FiMail, FiLock, FiUser,
} from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import logo from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import getValidationErros from '../../utils/getValidationErrors';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string()
          .required('Email obrigatório')
          .email(' escreva um email válido'),
        password: Yup.string().min(6, 'no mínimo 6 digitos'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      const erros = getValidationErros(err);

      formRef.current?.setErrors(erros);
    }
  }, []);

  return (
    <Container>
      <Background />

      <Content>
        <img src={logo} alt="gobarber" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1> Faça seu cadastro</h1>

          <Input name="name" icon={FiUser} placeholder="nome" />
          <Input name="email" icon={FiMail} placeholder="email" />

          <Input name="password" icon={FiLock} type="password" placeholder="Senha" />

          <Button type="submit">Cadastrar</Button>

        </Form>

        <a href="logn">
          <FiArrowLeft />
          Voltar para logon
        </a>

      </Content>
    </Container>
  );
};

export default SignUp;
