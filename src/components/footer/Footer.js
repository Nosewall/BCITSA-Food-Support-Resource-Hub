import {
  Button,
  Container,
  Grid,
  Header,
  Modal,
  Segment,
} from 'semantic-ui-react';

import PrivacyPolicy from 'components/footer/PrivacyPolicy';
import React from 'react';
import ReactGA from 'react-ga';


ReactGA.initialize('UA-139413334-1');

const trackGA = (buttonName) => {
  ReactGA.event({
    category: 'Footer',
    action: 'Clicked ' + buttonName + ' Button',
  });
};

const styles = {
  socialGroup: {
    marginBottom: 12,
  },
};

const FixedMenuLayout = () => (
  <div>
    <Segment
      inverted
      vertical
      style={{
        margin: '5em 0em 0em',
        padding: '3em 0em',
        background: '#F3C9B7',
        color: '#000000',
      }}
    >
      <Container textAlign="center">
        <Grid stackable>
          <Grid.Column width={5} alignitems="center">
            <Header className="footerBlack" inverted as="h4" content="The Community Food Network has been forked from a project created by:" />
            <Modal
              trigger={
                <Button onClick={() => trackGA('About Project Aurora')}>
                  © Project Aurora
                </Button>
              }
              closeIcon
              size="large"
            >
              <Modal.Header>
                <center>About Us</center>
              </Modal.Header>
              <Modal.Content image>
                <Modal.Description>
                  <center>
                    <p>
                      Food Support Hub was adapted from {' '}
                      <a
                        href="https://www.projectaurora.ca/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <b>Project Aurora.</b>
                      </a>
                    </p>
                    <p>
                      Project Aurora is a registered non-profit aimed at
                      accelerating the creation, growth, <br />
                      and impact of youth-led mental health initiatives by
                      providing mentorship,
                      <br />
                      connections, administrative/logistical support, and
                      funding.
                    </p>
                    <p>
                      We hope to continue the much-­needed conversation about
                      student <br />
                      wellness on college campuses across the country and to
                      empower students <br />
                      to take charge of their mental health.
                    </p>
                  </center>
                </Modal.Description>
              </Modal.Content>
            </Modal>
            {/* <Button onClick={() => trackGA("Email")} icon='mail' href='mailto:admin@projectaurora.ca' /> */}
            <br />
            <br />
            Email us:{' '}
            <a
              href="mailto:info@bcitsa.ca"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'red', textDecoration: 'none' }}
            >
              info@bcitsa.ca
            </a>
            <br />
            Resources last updated July 7th, 2022
          </Grid.Column>

          <Grid.Column width={4} alignitems="center">
            <Header inverted as="h4" content="Follow us:" className="footerBlack"/>
            <Button.Group style={styles.socialGroup}>
              <a
                href="https://www.facebook.com/BCITSA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  onClick={() => trackGA('Facebook')}
                  size="large"
                  circular
                  color="facebook"
                  icon="facebook"
                />
              </a>
              <a
                href="https://www.instagram.com/bcitsa/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  onClick={() => trackGA('Instagram')}
                  size="large"
                  circular
                  color="instagram"
                  icon="instagram"
                />
              </a>
              <a
                href="https://www.youtube.com/bcitsa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  onClick={() => trackGA('Youtube')}
                  size="large"
                  circular
                  color="youtube"
                  icon="youtube"
                />
              </a>
              <a
                href="https://ca.linkedin.com/company/bcit-student-association"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  onClick={() => trackGA('LinkedIn')}
                  size="large"
                  circular
                  color="linkedin"
                  icon="linkedin"
                />
              </a>
            </Button.Group>

          </Grid.Column>

          <Grid.Column width={7}>
            <Header
              inverted
              as="h4"
              content="Notice of Non­-Affiliation and Disclaimer:"
              className="footerBlack"
            />
            <h6>
              We are not affiliated, associated, authorized, endorsed by, or in
              any way officially connected with the British Columbia Institute of Technology, or any of its subsidiaries or its affiliates. The
              official BCIT website can be found{' '}
              <a
                href="https://www.bcit.ca/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'red', textDecoration: 'none' }}
              >
                here
              </a>
              .
            </h6>
          </Grid.Column>
        </Grid>
      </Container>
    </Segment>
  </div>
);

export default FixedMenuLayout;
