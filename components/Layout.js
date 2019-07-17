
import Head from 'next/head'
import Navbar from '../components/Navbar'

const Layout = (props) => (
    <div>
        <Head>
            <title>BitPrice C</title>
            <link rel="stylesheet" href="https://bootswatch.com/4/cerulean/bootstrap.min.css"/>
        </Head>

        <Navbar />
        <div className="container">
            {/* whatever page we are on, navbar is going to output the navbar */}
            {props.children}
        </div>
    </div>
)

export default Layout