import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <Row className="justify-content-around">
          <Col>
            <div onclick={() => navigate("/")}>React</div>
          </Col>
          <Col>
            <div onclick={() => "/login"}>Login</div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
