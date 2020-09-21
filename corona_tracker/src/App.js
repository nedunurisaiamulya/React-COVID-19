import React from 'react';
// import Cards from './components/Cards/Cards';
// import Chart from './components/Chart/Chart';
// import CountryPicker from './components/CountryPicker/CountryPicker';
//this 3 import statements can also be used as (line no.6)
import { Cards, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';
class App extends React.Component{
    //state is used for sending info to chart, card and countrypicker
    state={
        data:{},
    }
    // ferching of data is good in Component loop
    async componentDidMount(){
        // we use async to make await work(await will not work without async)
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData });
    }
    render(){
        const {data} = this.state;
        return(
            <div className={ styles.container }>
                <Cards data={data} />
                <CountryPicker />
                {/* <Chart /> */}
            </div>
        )
    }
}

export default App;