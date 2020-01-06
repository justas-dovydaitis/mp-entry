import React from 'react';
import { connect } from 'react-redux';

import { query } from '../../actions';

import './Queries.scss';

const mapStateToProps = state => ({
    queries: state.queries
})
const mapDispatchToProps = dispatch => ({
    query: (type, val) => dispatch(query(type, val))
})

const Queries = (props) => {

    return (
        <div className='h-100 w-100' style={{ height: '30px' }} >
            {
                props.queries.map((q, i) => {
                    return <div onClick={() => props.search(q)} key={i} className='bg-pink text-dark w-100 saved-query'>{q}</div>
                })
            }
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Queries);
