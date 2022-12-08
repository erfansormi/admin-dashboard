//css
import styles from "./EcommerceRevenue.module.css"

//components
import LeftSection from './LeftSection/LeftSection'
import RightSection from './RightSection/RightSection'

const EcommerceRevenue = () => {
    return (
        <>
            <div className={styles.container}>

                {/* box 1 */}
                <LeftSection />

                {/* box2 */}
                <RightSection />
            </div>
        </>
    );
}

export default EcommerceRevenue