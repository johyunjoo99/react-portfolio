import { Link } from 'react-router-dom'
import { BASE_URL } from '../../constants/constants'

const Footer = () => {
  return (
    <footer>
        <div className="w1820">
            <div className="logo">
                <Link to="/">
                    <img src={`${BASE_URL}img/common/logo.svg`} alt="조현주 포트폴리오" />
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
                        <dd><a href="mailto:johyunjoo99@gmail.com">johyunjoo99@gmail.com</a></dd>
                    </dl>
                </address>
                <p className="copyright">© 2026 JO HYUN JOO. All rights reserved.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
