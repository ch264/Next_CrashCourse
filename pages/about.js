
import Link from 'next/link'

const about = () => (
    <div>
        <ul>
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/about"><a>About</a></Link></li>
        </ul>
        
        <h1>About BitPrice</h1>
        <p>App to view Bit Prices</p>
    </div>
);




export default about;