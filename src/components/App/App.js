import React from 'react';
import { connect } from 'react-redux';
import './App.scss';
import { Grid, Row, Col } from '../Grid/Grid';
import Galery from '../Galery/Galery';
import Queries from '../SavedQueries/Queries';
import { query } from '../../actions';

const mapDispatchToProps = dispatch => ({
  query: (type, val) => dispatch(query(type, val))
})

const App = (props) => {
  const [inputVal, setInputVal] = React.useState('');
  const [search, setSearch] = React.useState('');



  return (
    <Grid fluid className='app mt-3 max-vh-100'>
      <Row mt>
        <Col w={12} md={8} lg={10}>
          <input type='text' placeholder='Search by keywords' className='w-100' value={inputVal} onChange={e => setInputVal(e.target.value)} />
        </Col>
        <Col w={6} md={2} lg={1}>
          <button className='w-100 h-100' onClick={() => setSearch(inputVal)}>Search</button>
        </Col>
        <Col w={6} md={2} lg={1}>
          <button className='w-100 h-100' onClick={() => { props.query('ADD_QUERY', search) }}>Save</button>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col w={12} md={8} lg={10} className='border'>
          <Galery xs={12} sm={12} md={6} lg={4} keyword={search} />
        </Col>
        <Col w={12} md={4} lg={2} >
          <Queries search={val => { setSearch(val); setInputVal(val) }} />
        </Col>
      </Row>
    </Grid >
  );
}

export default connect(null, mapDispatchToProps)(App);
