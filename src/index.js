import React from 'react';
import reactDom from 'react-dom';
import ReactDOM from 'react-dom';
import CommentDetail from './components/CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail />
        </div>
    );
};

reactDom.render(<App />, document.querySelector('#root'));
