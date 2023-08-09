import main from "./Main.module.css"
import heroimg from "../img/Hero area Image.png"
import index from '../../index.module.css'


export const Main = () => {

    return (
        <>
            <div className={main.main__section__wrapper}>
                <div className={index.container}>
                    <div className={index.flex}>
                        <div className={main.all__section}>
                            <div className={main.left__section}>
                                <h1 className={main.left__section__h1}><span className={main.text__blue}> Make </span>a Creative solutions for your Creative <span className={main.text__blue}>ideas.</span></h1>
                                <p className={main.left__section__p}>We are here to give you effective ideas. We help the brands to become what they want. </p>
                                <button className={main.left__section__button}>Get Started</button>
                            </div>
                            <div className={main.right__section__img}>
                                <img className={main.right__section__img} src={heroimg} />
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
}
export default Main