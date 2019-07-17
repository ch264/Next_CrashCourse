
import Navbar from '../components/Navbar'

const Layout = (props) => (
    <div>
        <Navbar />
        {/* whatever page we are on, navbar is going to output the navbar */}
        {props.children}
    </div>
)

export default Layout