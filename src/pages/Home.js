import React, { useState } from "react";
import StyledPageLayout from "../styled-components/StyledPageLayout.styles";
import StyledInput from "../styled-components/StyledInput.styles";
import StyledPassword from "../styled-components/StyledPasswordInput.styles";
import StyledForm from "../styled-components/StyledForm.styles";
import StyledButton from "../styled-components/StyledButton.styles";
import StyledSpinner from "../styled-components/StyledSpinner.styles";

const Home = () => {
  const [formFields, setFormFields] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);

  function handleInputChange(e) {
    setFormFields((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }

  return (
    <StyledPageLayout>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          name="username"
          value={formFields.username}
          onChange={handleInputChange}
          placeholder="Adınız"
        />
        <StyledPassword
          name="password"
          value={formFields.password}
          onChange={handleInputChange}
        />
        <StyledButton $buttonColor="#860A35" type="submit">
          {loading && <StyledSpinner />}
          Üye ol
        </StyledButton>
        <StyledButton type="button">Giriş Yap</StyledButton>
      </StyledForm>
    </StyledPageLayout>
  );
};

export default Home;
