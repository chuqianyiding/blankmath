import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import Card from '../../components/Card';
import { CardDataType } from '../../constants/cardData';
import { History } from 'history';

interface CardContainerProps extends CardDataType, RouteComponentProps {
    history: History;
}

const CardContainer: React.FC<CardContainerProps> = (props: CardContainerProps) => {
    const handleClick = () => {
        const { link, history } = props;
        history.push(link);
    };
    return <Card {...props} onClick={handleClick} />;
};

export default withRouter(CardContainer);
