import React from 'react';

const NoMatch = ({ location }) => (
    <div className="bg-cover">
        <div className="page_not_found">
        <h3 className="page_not_found">404 : Page not found <br /> &#128580;</h3>
        <h5>Back to <a href='/'>Home</a></h5>
        </div>
    </div>
)
export default NoMatch;