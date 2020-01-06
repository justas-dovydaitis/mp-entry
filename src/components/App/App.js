import React from 'react';
import './App.scss';
import { Grid, Row, Col } from '../Grid/Grid';
import Galery from '../Galery/Galery';

const App = () => {
  const [inputVal, setInputVal] = React.useState('');
  const [search, setSearch] = React.useState('');

  return (
    <Grid fluid className='app mt-3 max-vh-100'>
      <Row mt>
        <Col w={12} md={8}>
          <input type='text' placeholder='Search by keywords' className='w-100' value={inputVal} onChange={e => setInputVal(e.target.value)} />
        </Col>
        <Col w={6} md={2}>
          <button className='w-100 h-100' onClick={() => setSearch(inputVal)}>Search</button>
        </Col>
        <Col w={6} md={2}>
          <button className='w-100 h-100'>Save</button>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col w={12} lg={8}>
          <Galery xs={12} sm={12} md={6} lg={4} keyword={search} />
        </Col>
        <Col w={12} lg={4}>
        </Col>
      </Row>
    </Grid>
  );
}

export default App;
