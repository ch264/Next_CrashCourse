import Layout from '../components/Layout';
import Fetch from 'isomorphic-unfetch';

import Prices from '../components/Prices';

const Index = (props) => (
    <Layout>
        <div>
            <h1>Welcome to BitPrice</h1>
            {/* these props are coming from the fetch call */}
            {/* {props.bpi.time.updated} */}
            <Prices bpi={props.bpi}/>
        </div>
    </Layout>
);

Index.getInitialProps = async function() {
    const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    const data = await res.json();

    // put bpi object from fetch call into bpi prop
    return {
        bpi: data.bpi
    };
}

// keep styles component based



export default Index;