import React from 'react'
import styled from "styled-components";
import { useAuth } from '../contexts/AuthContext';
import { useHistory } from 'react-router';

export default function Dashboard() {
    const history = useHistory()
    const handldeLogOut = async () => {
        try {
            await logout();
            history.push('/signin')
        }
        catch {
            alert('Something wrong with Logging out')
        }
        
    };
    const { currentUser, logout } = useAuth();

    return (

        <Container>
            <Header><h1 style={{ 'color': 'white' }}>Manila</h1></Header>
            <DashboardContextContainer>
                <h2>Dashboard</h2>
                <LogoutButton onClick={handldeLogOut}>Log out</LogoutButton>
                <h2>Welcome, {currentUser && currentUser.email}</h2>
            </DashboardContextContainer>
            <Footer></Footer>

        </Container > 
    
    )
}


const Container = styled.div`
  display:grid;
  grid-template-rows: auto 1fr auto;
  height:100vh;
  margin:0px;
`;

const Header = styled.div`
  background: #22577A;
  padding: 2rem;
`

const DashboardContextContainer = styled.div`
background: #D1D1D1;


`

const LogoutButton = styled.button`

`

const Footer = styled.div`
background: #D1D1D1;

`