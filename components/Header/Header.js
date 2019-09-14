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
        </Container>
        
        <Container additionalClasses={ ['container_width-max', 'container_categories-wrapper'] }>
            <Container additionalClasses={ ['container_pos_rel', 'container_categories-container'] }>
               
                <Categories />
            </Container>
        </Container>
    </header>

    