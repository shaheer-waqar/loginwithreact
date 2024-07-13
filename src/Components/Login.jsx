import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from './Login.module.css'

function Login({loginCheck}) {
  return ( 
    <Container fluid>
        <Row>
            <Col className={`d-flex flex-column align-items-center w-100 m-auto mt-5  ${styles.containerBox}`}>
            <div className={`mt-2 py-4 w-100`}>
              <h4 className='text-center'>Login</h4>
              <div className={styles.inpDiv}>
                <div className='border-bottom border-2 border-dark py-2'>
                   <input type="text" placeholder='Email' className='border-0  outline-0 px-2'/>
                </div>
                <div className='border-bottom border-2 border-dark py-2'>
                   <input type="Password" placeholder='Password' className='border-0  outline-0 px-2'/><br />
                </div>
              </div>
              
              <div className='mt-1'>
                <a href="#" className='text-danger ' onClick={loginCheck}>Not have an account</a>
              </div>

              <div className='mt-2'>
                 <button className='px-4 py-1 border-0 bg-danger text-white fs-5 rounded-1'>Login</button>
              </div>
            </div>
            </Col>
        </Row>
    </Container>
  )
}

export default Login