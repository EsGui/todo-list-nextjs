import { redes } from '@/app/objects/redes'
import styles from '../../styles/home_styles/HomeFooter.module.css'

export default function HomeFooter() {
    return (
        <div className={ styles.DivFatherHomeFooter }>
            <div className={ styles.DivRedesHomeFooter }>
                {
                    redes.map(({ name, image }) => (
                        <div>
                            <img src={ image } alt={ name } />
                            <p>{name}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}