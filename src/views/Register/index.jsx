import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../../components/Layout';
import {Menu, MenuItem} from '../../components/NavBar';
import Icon from '../../components/Icon';
import Container from '../../components/Container';
import Row, {Column} from '../../components/Row';
import SignUp from '../../components/Forms/SignUp';
import Segment, {Content} from '../../components/Segment';

const RegisterMenu = () => (
  <Menu>
    <MenuItem right>
      <Icon icon="fa-phone" />
      <span className="padded left">
        +254705045048
      </span>
    </MenuItem>
  </Menu>
);

const Register = (props) => {
  return (
    <Layout menu={<RegisterMenu />}>
      <Container>
        <div className="center aligned">
          <h2>Sign Up</h2>
        </div>
        <Row>
          <Column center large={6} medium={8} small={12}>
            <Segment>
              <Content>
                <SignUp />
              </Content>
            </Segment>
          </Column>
        </Row>
      </Container>
    </Layout>
  );
};

Register.propTypes = {};

Register.defaultProps = {};

export default Register;
