import { Image } from "antd";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const ImageWrapper = styled.div`
  position: relative;
  background-color: rgba(0, 0, 0, 0);
  height: 100%;
`;

const StyledImage = styled(Image)`
  width: 100%;
  border-radius: 15px;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(to top, rgba(15, 30, 41, 1), rgba(0, 0, 0, 0));
  color: white;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  border-radius: 15px;
`;

const Episode = styled.p`
  font-size: 18px;
  background-color: rgba(0, 0, 0, 0);
`;

const TitleContainer = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
`;

const Title = styled.p`
  font-size: 16px;
  color: white;
  font-weight: bold;
  margin: 0;
  text-align: center;
`;

const Card = (props) => {
  return (
    <div
      onClick={() => {
        props.setCurrentFilm(props.film);
      }}
    >
      <CardContainer>
        <ImageWrapper>
          <StyledImage src={props.image} alt="Image" preview={false} />
          {!props.justImage && (
            <Overlay>
              <Episode>Episode {props.film.episode}</Episode>
            </Overlay>
          )}
        </ImageWrapper>
        {!props.justImage && (
          <TitleContainer>
            <Title>{props.film.title}</Title>
          </TitleContainer>
        )}
      </CardContainer>
    </div>
  );
};

export default Card;
