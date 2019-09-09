import Link from 'next/link';

import css from './../styles/index.scss';
import Header from './../components/Header';

export default () => <>
	<Header />
	<h1 className={ css.title }>Main page</h1>
	<Link href='/category'>
		<a>Category link</a>
	</Link>
</>