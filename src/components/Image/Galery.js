import React from 'react';
import axios from '../../configs/axios'

import { Grid, Row, Col } from '../Grid/Grid';

const Galery = (props) => {
    const [images, setImages] = React.useState([]);
    const [isFetching, setFetching] = React.useState(true);

    React.useEffect(() => {
        let url = props.keyword ? `/search/photos?query=${props.keyword}` : '/photos';
        setFetching(true);
        axios.get(url)
            .then(res => {
                setImages(props.keyword ? res.data.results : res.data);
                setFetching(false);
            })
            .catch(err => {
                console.log(err);
                setFetching(false);
            })
    }, [props.keyword])

    const MapImages = () => {
        return images.map(image => {
            return <Col key={image.id} w={Math.floor(props.xs)} sm={ props.sm} md={props.md} lg={props.lg}>
                <img className='w-100' src={image.urls.small} alt={image.alt_description} />
            </Col>
        });
    }
    return (
        <Grid fluid className='vh-75 overflowX-scroll'>
            {isFetching ? <strong>Fetching photos...</strong> :

                images.length === 0 ? <strong>No images found by entered keyword :(</strong> :
                    <Row>
                        <MapImages />
                    </Row>

            }
        </Grid>
    )
}

export default Galery;