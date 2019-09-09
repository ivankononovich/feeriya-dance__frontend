import Link from 'next/link';

import css from './../styles/header.scss';
import Container from './../components/Container';

export default () => 
    <header className={ css.header }>
        <Container>
            <Link href='/index' as='/'>
                <a>Main page link</a>
            </Link>
        </Container>
    </header>