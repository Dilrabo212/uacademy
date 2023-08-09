import hstyle from "./hstyle.module.css"
import logo from "../img/logo.svg"
import index from '../../index.module.css'
export const Header = () => {
    return (
        <>
            <div className={hstyle.header__wrapper}>
                <div className={index.container}>
                    <div className={index.flex}>

                        <div className={hstyle.logo__box}>
                            <img className={hstyle.logo} src={logo} />
                            <strong className={hstyle.logo__text}>Maker</strong>
                        </div>
                        <div className={hstyle.navbar__menyu1}>
                            <ul className={hstyle.navbar__menyu}>
                                <li className={hstyle.li__active}>Home</li>
                                <li className={hstyle.li}>Services</li>
                                <li className={hstyle.li}>About</li>
                                <li className={hstyle.li}>The Team</li>
                                <li className={hstyle.li}>Pricing</li>
                                <li className={hstyle.li}>Contact</li>
                            </ul>
                        </div>
                        <button className={hstyle.main_button}>Sign Up</button>
                    </div>
                </div>
            </div>


        </>


    );


}