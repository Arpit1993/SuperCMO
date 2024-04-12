import styled from 'styled-components'

const SidebarComponent = styled.section`
    max-width: 200px;
    height: 100vh;
`;

export const Sidebar = () => {
    return (
        <SidebarComponent>
            <p> This is sidebar </p>
        </SidebarComponent>
    )
}