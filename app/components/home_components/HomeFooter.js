import { redes } from '@/app/objects/redes'
import styles from '../../styles/home_styles/HomeFooter.module.css'
import Link from 'next/link'

export default function HomeFooter() {
    const styleLink = {
        textDecoration: "none",
        color: "white",
    }

    return (
        <div className={ styles.DivFatherHomeFooter }>
            <div className={ styles.DivRedesHomeFooter }>
                {
                    redes.map(({ name, image, link }) => (
                        <Link style={ styleLink } href={ link }>
                            <div>
                                <img src={ image } alt={ name } />
                                <p>{name}</p>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}