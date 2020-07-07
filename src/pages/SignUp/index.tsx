import React from 'react';

import {
  FiArrowLeft, FiMail, FiLock, FiUser,
} from 'react-icons/fi';

import { Form } from '@unform/web';
import { Container, Content, Background } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logo from '../../assets/logo.svg';

const SignUp: React.FC = () => {
  function handleSubmit(data: object): void{
    console.log(data);
  }

  return (
    <Container>

      <Background />
      <Content>
        <img src={logo} alt="gobarber" />

        <Form onSubmit={handleSubmit}>
          <h1> Faça seu cadastro</h1>

          <Input name="nome" icon={FiUser} placeholder="nome" />
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
