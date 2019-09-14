import Link from 'next/link';

import css from './header.scss';
import Container from './../Container/Container';
import Contacts from './../Contacts/ContactsContainer';
import Categories from './../Categories/CategoriesContainer';

export default () =>  
    <header className={ css.header }>
        <Container additionalClasses={ ['container_width-max', 'container_bg_contacts'] }>
            <Contacts />
        </Container>

        <Container>
            <Link href='/index' as='/'>
                <a>Main page link</a>
            </Link>
            <Categories />
        </Container>
    </header>

    