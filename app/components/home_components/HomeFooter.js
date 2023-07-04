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
                    redes.map(({ name, image, link, linkCreator }) => (
                        <div>
                            <Link style={ styleLink } href={ link }>
                            <img src={ image } alt={ name } />
                            <p>{name}</p>
                            </Link>
                            <Link style={ styleLink } href={ linkCreator }>Perfil do criado do ícone</Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}