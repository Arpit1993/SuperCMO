import styled from 'styled-components';

const CardComponent = styled.div`
    width: 300px;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: #ffffff;
    border-radius: 4px;
    box-shadow: 0px 4px 4px #aeaeae;
    cursor: pointer;
`;

const Percentage = styled.p`
    position: absolute;
    bottom: 8px;
    right: 8px;
    ${
        props => props.profit ? `color: green`: `color: red`
    }
`;

const HeadingOne = styled.h1`
    color: #9031aa;
`;

const FlipArrow = styled.p`
    color: #9031aa;
    position: absolute;
    top: 8px;
    right: 8px;
`

export const Card = (props) => {
    const { cardData } = props;
    console.log(cardData)
    return (
       cardData.map((cardInfo) => {
         return (
            <CardComponent>
                <FlipArrow>
                    {"-->"}
                </FlipArrow>
                <HeadingOne>
                    {cardInfo.value}
                </HeadingOne>
                <p>
                    {cardInfo.metric}
                </p>
                <Percentage profit={cardInfo.growthPercentage > 0}>
                    {cardInfo.growthPercentage}
                </Percentage>
            </CardComponent>
         )
       })
    )
}