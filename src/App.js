import logo from './logo.svg';
import './App.css';
import StockData from './stock-row/stock-data';
import StockDataApi from './stock-data-with-api';
import Example1 from './components/example-1';
// import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div className='container'>
      <h1>STOCK DATA</h1>
      {/* <table className='table'>
        <thead>
          <tr>
            <th>Company</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>Change</th>
            <th>% Change</th>
            <th>Volume</th>
          </tr>
        </thead>
        <tbody>
          <StockData name={"APPLE.INC"} />
          <StockData name={"APCFSS"} />
        </tbody>
      </table> */}
      <StockDataApi/>
      {/* <Example1/> */}
    </div>

    // <Container>
    //   <Row>
    //     <Col xs={12}><center> <h1>STOCK DATA</h1></center></Col>
    //   </Row>
    // </Container>

  );
}

export default App;
