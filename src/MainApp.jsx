import React, { useState, useEffect, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import FallbackSpinner from './components/FallbackSpinner';
import NavBarWithRouter from './components/NavBar';
import Home from './components/Home';
import endpoints from './constants/endpoints';
// import Footer from './Footer';

function MainApp() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(endpoints.routes, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  return (
    <div className="MainApp">
      <NavBarWithRouter />
      <main className="main">
        <Switch>
          <Suspense fallback={<FallbackSpinner />}>
            <Route exact path="/" component={Home} />
            {data
              && data.sections.map((route) => {
                const SectionComponent = React.lazy(() => import('./components/' + route.component));
                return (
                  <Route
                    key={route.headerTitle}
                    path={route.path}
                    component={() => (
                      <SectionComponent header={route.headerTitle} />
                    )}
                  />
                );
              })}
          </Suspense>
        </Switch>
        {/* <Footer /> */}
        {/* <Box>
          <h1 style={{
            color: "green",
            textAlign: "center",
            marginTop: "-50px"
          }}>
            GeeksforGeeks: A Computer Science Portal for Geeks
          </h1>
          <Container>
            <Row>
              <Column>
                <Heading>About Us</Heading>
                <FooterLink href="#">Aim</FooterLink>
                <FooterLink href="#">Vision</FooterLink>
                <FooterLink href="#">Testimonials</FooterLink>
              </Column>
              <Column>
                <Heading>Services</Heading>
                <FooterLink href="#">Writing</FooterLink>
                <FooterLink href="#">Internships</FooterLink>
                <FooterLink href="#">Coding</FooterLink>
                <FooterLink href="#">Teaching</FooterLink>
              </Column>
              <Column>
                <Heading>Contact Us</Heading>
                <FooterLink href="#">Uttar Pradesh</FooterLink>
                <FooterLink href="#">Ahemdabad</FooterLink>
                <FooterLink href="#">Indore</FooterLink>
                <FooterLink href="#">Mumbai</FooterLink>
              </Column>
              <Column>
                <Heading>Social Media</Heading>
                <FooterLink href="#">
                  <i className="fab fa-facebook-f">
                    <span style={{ marginLeft: "10px" }}>
                      Facebook
                    </span>
                  </i>
                </FooterLink>
                <FooterLink href="#">
                  <i className="fab fa-instagram">
                    <span style={{ marginLeft: "10px" }}>
                      Instagram
                    </span>
                  </i>
                </FooterLink>
                <FooterLink href="#">
                  <i className="fab fa-twitter">
                    <span style={{ marginLeft: "10px" }}>
                      Twitter
                    </span>
                  </i>
                </FooterLink>
                <FooterLink href="#">
                  <i className="fab fa-youtube">
                    <span style={{ marginLeft: "10px" }}>
                      Youtube
                    </span>
                  </i>
                </FooterLink>
              </Column>
            </Row>
          </Container>
        </Box> */}
      </main>
    </div>
  );
}

export default MainApp;
