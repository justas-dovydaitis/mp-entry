import React from 'react';
import axios from '../../configs/axios'

import { Grid, Row, Col } from '../Grid/Grid';
import Progress from '../Progress/Progress';
import Image from './Image';

import './Galery.scss'

const Galery = (props) => {
    const [images, setImages] = React.useState([]);
    const [isFetching, setFetching] = React.useState(true);
    const [reqProgress, setReqProgress] = React.useState(0);

    React.useEffect(() => {
        let url = props.keyword ? `/search/photos?per_page=1000&query=${props.keyword}` : '/photos?per_page=1000';
        setReqProgress(0);
        setFetching(true);

        axios.get(url, {
            onDownloadProgress: progressEvent => setReqProgress((progressEvent.loaded * 100) / progressEvent.total)
        })
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
            return <Col
                key={image.id}
                w={props.xs}
                sm={props.sm}
                md={props.md}
                lg={props.lg}
            >
                <Image src={image.urls.small} alt={image.alt_description} />
            </Col>
        });
    }
    return (
        <Grid fluid className='vh-75 overflowY-scroll'>
            <div className='h-100 w-100' style={{ position: "relative"}}>
                {isFetching ?
                    <Progress w={'90%'} h={'10px'} className='center' loaded={reqProgress} />
                    :
                    images.length === 0 ?
                        <strong className='center'>No images found by entered keyword :(</strong> :
                        <Row>
                            <MapImages />
                        </Row>
                }
            </div>
        </Grid>
    )
}

export default Galery;