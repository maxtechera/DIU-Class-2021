import styled from "@emotion/styled";

interface Props {
  title: string;
  description: string;
  image: string;
}

const Card = ({ title, description, image }: Props) => {
  return (
    <Container>
      <MediaContainer>
        <Media src={image} />
      </MediaContainer>
      <BodyContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </BodyContainer>
      <ActionsContainer>
        <Button>SHARE</Button>
        <Button>LEARN MORE</Button>
      </ActionsContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  background: white;
  /* max-width: 500px; */
  box-shadow: 2px 2px 8px 3px rgb(0 0 0 / 20%);
  margin: auto;
`;

const MediaContainer = styled.div`
  width: 100%;
`;

const Media = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  max-height: 200px;

  // Make image fit the container
  object-fit: cover;
`;

const BodyContainer = styled.div`
  padding: 16px;
  background: #f5f5f5;
`;

const Title = styled.h3`
  margin: 0;
  margin-bottom: 16px;
  font-size: 26px;
`;

const Description = styled.p`
  margin: 0;
  color: rgba(0, 0, 0, 0.7);
  font-size: 18px;
`;

const ActionsContainer = styled.div`
  padding: 8px;

  & *:first-child {
    margin-left: -8px;
  }
`;

const Button = styled.button`
  outline: none;
  border: none;
  background: none;
  color: #0062ff;
  font-weight: bold;
  padding: 8px 16px;

  cursor: pointer;

  transition: 0.3s;
  &:hover {
    background: #f0f0f0;
  }
`;

export default Card;
