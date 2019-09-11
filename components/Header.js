import Link from 'next/link';

import css from './../styles/header.scss';
import Container from './Container';
import Contacts from './Contacts/ContactsContainer';

export default (props) =>  
    <header className={ css.header }>
        <Container>
            <Link href='/index' as='/'>
                <a>Main page link</a>
            </Link>
            <Contacts />
        </Container>
    </header>

    