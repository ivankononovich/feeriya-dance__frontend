import Link from 'next/link';

import css from '../styles/index.scss';


export default () => <>
	<h1 className={ css.title }>Main page</h1>
	<Link href='/category'>
		<a>Category link</a>
	</Link>
</>