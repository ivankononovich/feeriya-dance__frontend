import Link from 'next/link';

import css from './../styles/header.scss';
import Container from './Container';

export default (props) =>  
    <header className={ css.header }>
        <Container>
            <Link href='/index' as='/'>
                <a>Main page link</a>
            </Link>
        </Container>
    </header>

    