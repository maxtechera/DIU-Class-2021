import * as React from "react";
import type { NextPage } from "next";
import Card from "../src/components/Card";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const Home: NextPage = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <h1>UI Challenges</h1>
      <h2>Card</h2>
      <Card
        title={"Lizard"}
        description={
          "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
        }
        image={
          "https://media.istockphoto.com/photos/green-chameleon-hunting-portrait-of-an-exotic-animal-macro-picture-id842206608?b=1&k=20&m=842206608&s=170667a&w=0&h=AuCjkFe_4gx0ulySR9Ewe2Vi7vgQDMzWSnxocWh3x90="
        }
      />

      <br />
      <br />

      <h2>Grid - Flex</h2>
      <GridContainerFlex>
        {Array.from(new Array(10)).map((_x, idx) => (
          <GridItem key={idx}>
            <Card
              title={"Lizard " + idx}
              description={
                "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
              }
              image={
                "https://media.istockphoto.com/photos/green-chameleon-hunting-portrait-of-an-exotic-animal-macro-picture-id842206608?b=1&k=20&m=842206608&s=170667a&w=0&h=AuCjkFe_4gx0ulySR9Ewe2Vi7vgQDMzWSnxocWh3x90="
              }
            />
          </GridItem>
        ))}
      </GridContainerFlex>
      <br />
      <br />
      <h2>Grid - CSSGrid</h2>
      <GridContainer>
        {Array.from(new Array(10)).map((_x, idx) => (
          <Card
            key={idx}
            title={"Lizard " + idx}
            description={
              "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
            }
            image={
              "https://media.istockphoto.com/photos/green-chameleon-hunting-portrait-of-an-exotic-animal-macro-picture-id842206608?b=1&k=20&m=842206608&s=170667a&w=0&h=AuCjkFe_4gx0ulySR9Ewe2Vi7vgQDMzWSnxocWh3x90="
            }
          />
        ))}
      </GridContainer>

      <br />
      <br />
      <h2>Modal</h2>

      <Button onClick={handleOpen}>Mostrar modal</Button>
      <Modal open={open} onRequestClose={handleClose}>
        <GridContainer>
          {Array.from(new Array(10)).map((_x, idx) => (
            <Card
              key={idx}
              title={"Lizard " + idx}
              description={
                "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
              }
              image={
                "https://media.istockphoto.com/photos/green-chameleon-hunting-portrait-of-an-exotic-animal-macro-picture-id842206608?b=1&k=20&m=842206608&s=170667a&w=0&h=AuCjkFe_4gx0ulySR9Ewe2Vi7vgQDMzWSnxocWh3x90="
              }
            />
          ))}
        </GridContainer>
      </Modal>
    </div>
  );
};

interface ModalProps {
  children: any;
  open: boolean;
  onRequestClose: any;
}

const Modal = ({ children, open, onRequestClose }: ModalProps) => (
  <OuterContainer open={open}>
    <InnerContainer>
      <Button onClick={onRequestClose}>Cerrar</Button>
      {children}
    </InnerContainer>
  </OuterContainer>
);

// Add types definition for component Props
const OuterContainer = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);

  transition: 0.3s;
  // Center inner container vertically and horizontally
  display: flex;
  justify-content: center;
  align-items: center;

  // Use open prop to control modal visibility
  ${({ open }) => css`
    visibility: ${open ? "visible" : "hidden"};
    opacity: ${open ? 1 : 0};
    > div {
      transform: translateY(${open ? 0 : 50}%);
    }
  `}
`;

const InnerContainer = styled.div`
  background: white;
  padding: 24px;

  max-width: 90%;
  max-height: 90%;
  @media (max-width: 768px) {
    max-width: 100%;
    max-height: 100%;
  }
  transition: 0.3s;

  // Enable scrollbar when content goes out of bounds
  overflow: auto;
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

const GridContainer = styled.div`
  display: grid;
  grid-gap: 16px;
  padding: 16px;

  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 320px) {
    grid-template-columns: 1fr;
  }

  // Example on how to control CSS Grid columns
  // to expand the 4th element 2 columns
  > *:nth-child(4) {
    grid-column-start: 1;
    grid-column-end: 3;
  }
`;

const GridContainerFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const GridItem = styled.div`
  width: 33.33%;
  padding: 8px;

  @media (max-width: 768px) {
    width: 50%;
  }

  @media (max-width: 320px) {
    width: 100%;
  }
`;

export default Home;
