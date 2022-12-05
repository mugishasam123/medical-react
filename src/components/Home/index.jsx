import './Home.css';
import Users from '../Users';
import Table from '../Table';

const Home=()=>{

    return(
        <div className='container-home'>
            <Users/>
            <div className='tables'>
                <Table/>
                <Table/>
                <Table/>
            </div>
        </div>
    )
}

export default Home;