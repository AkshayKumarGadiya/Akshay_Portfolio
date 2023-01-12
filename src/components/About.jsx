import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Container, Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Fade from 'react-reveal';
import Header from './Header';
import endpoints from '../constants/endpoints';
import FallbackSpinner from './FallbackSpinner';

const styles = {
  introTextContainer: {
    margin: 10,
    fontSize: 24,
    fontWeight: 500,
    flexDirection: 'column',
    whiteSpace: 'pre-wrap',
    textAlign: 'left',
  },
  bodyTextContainer: {
    margin: 10,
    flexDirection: 'column',
    whiteSpace: 'pre-wrap',
    textAlign: 'left',
    fontSize: '1.2em',
    fontWeight: 100,
  },
  introImageContainer: {
    margin: 10,
    justifyContent: 'right',
    alignItems: 'center',
    display: 'flex',
  },
};

function About(props) {
  const { header } = props;
  const [data, setData] = useState(null);

  const parseIntro = (text) => (
    <ReactMarkdown
      children={text}
    />
  );

  useEffect(() => {
    fetch(endpoints.about, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  return (
    <>
      <Header title={header} />
      <div className="section-content-container">
        <Container>
          {data
            ? (
              <Fade>
                <Row>
                  <Col style={styles.introImageContainer}>
                    <img src={data?.imageSource} alt="profile" />
                  </Col>
                  <Col>
                    <p style={styles.introTextContainer}>{parseIntro(data.name)}</p>
                    <p style={styles.bodyTextContainer}>{parseIntro(data.about)}</p>
                    <p style={styles.bodyTextContainer}>{parseIntro(data.first_name)}</p>
                    <p style={styles.bodyTextContainer}>{parseIntro(data.age)}</p>
                    <p style={styles.bodyTextContainer}>{parseIntro(data.nationality)}</p>
                    <p style={styles.bodyTextContainer}>{parseIntro(data.address)}</p>
                    <p style={styles.bodyTextContainer}>{parseIntro(data.current_job_position)}</p>
                  </Col>
                </Row>
              </Fade>
            )
            : <FallbackSpinner />}
        </Container>
      </div>
    </>
  );
}

About.propTypes = {
  header: PropTypes.string.isRequired,
};

export default About;
