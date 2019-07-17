import Link from 'next/link';


const index = () => (
    <div>
        <ul>
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/about"><a>About</a></Link></li>
        </ul>
        <h1>Hello Next</h1>
    </div>
);




export default index;