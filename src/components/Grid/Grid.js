import React from 'react';
import PropTypes from 'prop-types';
import './Grid.scss';

const Grid = (props) => {
    return <div className={`${props.fluid ? 'container-fluid' : 'container'} ${props.className}`}>{props.children}</div>
}
Grid.propTypes = {
    fluid: PropTypes.bool,
    className: PropTypes.string,
}

const Row = (props) => {
    return <div
        className={`container__row ${props.className}`}>
        {props.children}
    </div>
}
Row.propTypes = {
    className: PropTypes.string,
}
const Col = (props) => {
    return <div
        className={`
            ${props.w && `container__col-${props.w}`}
            ${props.sm && `container__col-sm-${props.sm}`}
            ${props.md && `container__col-md-${props.md}`}
            ${props.lg && `container__col-lg-${props.lg}`}
            ${props.xl && `container__col-xl-${props.xl}`}
            ${props.className}`}>
        {props.children}
    </div>
}
const sizeValidator = (props, propName, componentName) => {
    let value = props[propName];
    if (value !== undefined) {
        if (!(typeof value === 'number' && value >= 1 && value <= 12)) {
            return new Error(
                'Invalid prop `' + propName + '` supplied to' +
                ' `' + componentName + '`. Validation failed.'
            );
        }
    }
    return null;
};
Col.propTypes = {
    className: PropTypes.string,
    w: sizeValidator,
    sm: sizeValidator,
    md: sizeValidator,
    lg: sizeValidator,
    xl: sizeValidator,
}

export { Grid, Col, Row }
