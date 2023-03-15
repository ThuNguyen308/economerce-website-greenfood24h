import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { images } from '../../../assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

export default function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('top-inner')}>
                    <a href="/" className={cx('logo')}>
                        <div className={cx('overlay')}></div>
                        <img src={images.logo} />
                    </a>
                    <div className={cx('actions')}>
                        <button className={cx('login-btn')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faCircleUser} />
                            Đăng nhập
                        </button>
                        <button className={cx('cart-btn')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faBagShopping} />
                            <span>0</span>
                        </button>
                    </div>
                </div>

                <div className={cx('navbar')}>
                    <img src={images.wheat} />
                    <ul>
                        <li>
                            <Link to="/" className={cx('active')}>
                                Trang chủ
                            </Link>
                        </li>
                        <li>
                            <Link to="/posts">Bài viết</Link>
                        </li>
                        <li>
                            <Link to="/products">Sản phẩm</Link>
                        </li>
                        <li>
                            <Link to="/about">Về chúng tôi</Link>
                        </li>
                        <li>
                            <Link to="/contact">Liên hệ</Link>
                        </li>
                    </ul>
                    <img src={images.wheat} />
                </div>
            </div>
        </header>
    );
}
