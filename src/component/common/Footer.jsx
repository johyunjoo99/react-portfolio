import { Link } from 'react-router-dom'
import { BASE_URL } from '../../constants/constants'

const Footer = () => {
  return (
    <footer>
        <div className="w1820">
            <div className="flex-box line01">
                <div className="logo">
                    <Link to="/">
                        <img src={`${BASE_URL}img/common/logo.svg`} alt="조현주 포트폴리오" />
                    </Link>
                </div>
                <div className="button">
                    <a href={`${BASE_URL}file/조현주_경력기술서.pdf`} target="_blank" rel="noopener noreferrer">
                        <i className="link" aria-hidden="true"></i>
                        경력기술서
                        <span className="blind">(새 창 열림)</span>
                    </a>
                    <a href="https://github.com/johyunjoo99" target="_blank" rel="noopener noreferrer" className="red eng">
                        <i className="github" aria-hidden="true"></i>
                        GitHub
                        <span className="blind">(새 창 열림)</span>
                    </a>
                </div>
            </div>
            <div className="flex-box line02">
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
