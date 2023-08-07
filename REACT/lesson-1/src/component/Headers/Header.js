

function Header() {

    return <>

        <header class="site-header">
            <div class="container">

                <div class=" site-header__container site-header__container >">
                    <a class="site-header__logo logo" href="/">Where in the world?</a>
                    <button class="site-header__btn ">

                        <span class="site-header__btn-icon">
                            <img src="./svg/moon.svg" alt="" />

                        </span>

                        <span class="site-header__btn-text">Dark Mode</span>
                    </button>
                </div>
            </div>
        </header>

    </>

}

export default Header;