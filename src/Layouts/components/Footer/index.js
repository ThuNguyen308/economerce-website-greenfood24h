import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot, faFile } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

export default function Footer() {
    return (
        <footer className={cx('wrapper')}>
            <div className={`${cx('inner')} row`}>
                <div className="col-sm-4">
                    <h2>Thông tin:</h2>
                    <ul>
                        <li>
                            <FontAwesomeIcon className={cx('icon')} icon={faEnvelope} />
                            <a href="mailto:greenfood24h@gmail.com">greenfood24h@gmail.com</a>
                        </li>
                        <li>
                            <FontAwesomeIcon className={cx('icon')} icon={faPhone} />
                            <span>0353150611</span>
                        </li>
                        <li>
                            <FontAwesomeIcon className={cx('icon')} icon={faLocationDot} />
                            <span>Khu phố 6, phường Linh Trung, tp Thủ Đức</span>
                        </li>
                    </ul>
                </div>
                <div className="col-sm-4">
                    <h2>Trang:</h2>
                    <ul>
                        <li>
                            <FontAwesomeIcon className={cx('icon')} icon={faFile} />
                            <Link to="/">Trang chủ</Link>
                        </li>
                        <li>
                            <FontAwesomeIcon className={cx('icon')} icon={faFile} />
                            <Link to="/posts">Bài viết</Link>
                        </li>
                        <li>
                            <FontAwesomeIcon className={cx('icon')} icon={faFile} />
                            <Link to="/produucts">Sản phẩm</Link>
                        </li>
                        <li>
                            <FontAwesomeIcon className={cx('icon')} icon={faFile} />
                            <Link to="/about">Về chúng tôi</Link>
                        </li>
                        <li>
                            <FontAwesomeIcon className={cx('icon')} icon={faFile} />
                            <Link to="/contact">Liên hệ</Link>
                        </li>
                    </ul>
                </div>
                <div className={`col-sm-4 ${cx('social-media')}`}>
                    <h2>Theo dõi:</h2>
                    <ul>
                        <li>
                            <a href="https://www.facebook.com/24hgreenfood" target="_blank">
                                <FontAwesomeIcon className={cx('icon')} icon={faFacebook} />
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/greenfood24h" target="_blank">
                                <FontAwesomeIcon className={cx('icon')} icon={faTwitter} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/channel/UCKJ4ho48Rhhcz3G_H6lpvKQ" target="_blank">
                                <FontAwesomeIcon className={cx('icon')} icon={faYoutube} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
