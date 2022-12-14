import React , {useEffect} from 'react'
import { Container,Row, Button } from 'react-bootstrap'
import "./LandingPage.css";

function LandingPage({history}) {

    useEffect(() => {
        const userInfo = localStorage.getItem("userInfo");

        if(userInfo) {
            history.push("/mynotes");
        }
    }, [history]);

  return (
    <div className='main'>
        <Container>
            <Row className='row'>
                <div className='intro-text'>
                    <div>
                        <h1 className='title'>Welcome to Note Zipper</h1>
                        <p className='subtitle'>One Safe place for all your notes</p>
                    </div>
                </div>
                <div className='buttonContainer'>
                    <a href='/login'>
                        <Button size='lg' className='landingButton'>Login</Button>
                    </a>
                    <a href='/register'>
                        <Button  size='lg' className='landingButton' variant="outline-primary">Sign Up</Button>
                    </a>
                </div>
            </Row>
        </Container>
    </div>
  )
}

export default LandingPage