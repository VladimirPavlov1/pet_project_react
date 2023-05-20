import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import  Header from '../Header/Header';
import { Suspense } from 'react';
import { ContentWrapper } from './SharedLayout.styled';
import Container from '../Container/Container'
import Section from '../Section/Section' 
import Footer from '../Footer/Footer'



export const SharedLayout = () => {
  return ( 
    <>
      <ContentWrapper>
        <Header />
        <main>
          <Section>
            <Container>
              <Suspense fallback={<p>Loading...</p>}>
                <Outlet />
              </Suspense>
            </Container>
          </Section>
        </main>
      </ContentWrapper>
      <Footer />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};