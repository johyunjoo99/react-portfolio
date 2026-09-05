import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
        <footer>
            <div className="w1820">
                <div className="logo">
                    <Link to="#">   
                        <img src="/img/common/logo.svg" alt="" />
                    </Link>
                </div>
                <div className="flex-box">
                    <address>
                        <dl>
                            <dt>NAME</dt>
                            <dd>Jo Hyun Joo</dd>
                        </dl>
                        <dl>
                            <dt>E-MAIL</dt>
                            <dd>johyunjoo99@gmail.com</dd>
                        </dl>
                    </address>
                    <p className="copyright">© 2026 JO HYUN JOO. All rights reserved.</p>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer