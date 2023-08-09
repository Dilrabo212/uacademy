import index from '../../index.module.css'
import servis from "./Servis.module.css"

export const Servis = () => {
    return (<>
        <div className={servis.servis_section_wrep}>
            <div className={index.container}>
               <div className=''>
               <h1 className={servis.servis__section__h1}>We provide great services</h1>
                <p className={servis.servis__section__p}>We help people to think independent. Be the boss of your brand and be the storyteller. An appropriate approach.</p>
               </div>
                <div className={servis.section__card}>
                    <ul className={servis.card}>
                        <li className={servis.bold_text__card}>Web Design</li>
                        <li className={servis.p__text__card}>Powerful creations for the practice safe design.</li>
                    </ul>
                </div>
            </div>
        </div>







    </>);
}
export default Servis;