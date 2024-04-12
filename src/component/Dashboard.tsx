import styled from 'styled-components'
import { useState, useEffect } from 'react';
import { Card } from './Card';
import response from '../data/data.json';

interface Data{
    metric: string,
    value: number | string,
    growthPercentage: number
}

const DashboardComponent = styled.section`
    flex-grow: 1;
    height: 100vh;
    background-color: #eeeeee;
    padding: 16px;
`;

const CardContainer = styled.div`
    margin-top: 160px;
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
`;
const Heading = styled.h1`
    text-align: center;
`;

export const Dashboard = () => {
    const [data, setData] = useState([]);
    const fetchMetrics = () => {
        return response;
    }
    useEffect(() => {
        const response:Data[] = fetchMetrics();
        setData([...response]);
    }, []);
    return (
        <DashboardComponent>
           <Heading>
                Super CMO
           </Heading>
           <CardContainer>
             <Card cardData={data}/>
           </CardContainer>
        </DashboardComponent>
    )
}