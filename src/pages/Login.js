import React, { Component } from "react";
import styled from "styled-components";
import KakaoLogin from "react-kakao-login";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      provider: ""
    };
  }

  // Kakao login
  responseKakao = res => {
    this.setState({
      id: res.profile.id,
      name: res.profile.properties.nickname,
      provider: "kakao"
    });
  };

  // Login fail
  responseFail = err => {
    console.error(err);
  };

  render() {
    return (
      <Container>
        <KakaoButton
          jaKey={process.env.REACT_APP_Kakao}
          buttonText="Kakao"
          onSuccess={this.responseKakao}
          onFailure={this.responseFail}
          getProfile="true"
        />
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-flow: column wrap;
`;

const KakaoButton = styled(KakaoLogin)`
  padding: 0;
  width: 190px;
  height: 44px;
  line-height: 44px;
  color: #783c00;
  background-color: #ffeb00;
  border: 1px solid transparent;
  border-radius: 3px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;

export default Login;
