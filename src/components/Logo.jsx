import { GiKnifeFork } from 'react-icons/gi'
import { Link } from 'react-router-dom'

export default function Logo() {
    return (
        <div className='logo-nav'>
            <GiKnifeFork />
            <Link className='logo-text' to={'/'}>deliciouss</Link>
        </div>
    )
}
