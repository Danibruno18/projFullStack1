import GlobalStyle from "./styles/global";
import styled from "styled-components";
import Grid  from "./components/GridLivro.js";
import Form from "./components/FormLivro.js";
import { toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`; 

const Title = styled.h2``;

function App() {

  return (
    <>
      <Container>
        <Title>Livros</Title>
        <Form/>
        <Grid/>
      </Container>
      <ToastContainer autoClose={3000} /*position={toast.position.bottom_left}*/ />
      <GlobalStyle/>
    </>
  );
}

export default App;
