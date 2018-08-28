import React from 'react';
import { Zoom, Fade} from 'react-reveal';

import './Article.scss';

const article = (props) => {
    
return (
    <article className="Post">
       <Fade left>
            <h1>{props.data.title}</h1>
            <div className="Info">
                <div className="Author" dangerouslySetInnerHTML={{__html: props.data.content}}></div>
            </div>
        </Fade>
        <Zoom>
            <h1>{props.data.title}</h1>
            <div className="Info">
                <div className="Author" dangerouslySetInnerHTML={{__html: props.data.content}}></div>
            </div>
        </Zoom>
        <Zoom>
            <h1>{props.data.title}</h1>
            <div className="Info">
                <div className="Author" dangerouslySetInnerHTML={{__html: props.data.content}}></div>
            </div>
        </Zoom>
        <Zoom>
            <h1>{props.data.title}</h1>
            <div className="Info">
                <div className="Author" dangerouslySetInnerHTML={{__html: props.data.content}}></div>
            </div>
        </Zoom>
        <Zoom>
            <h1>{props.data.title}</h1>
            <div className="Info">
                <div className="Author" dangerouslySetInnerHTML={{__html: props.data.content}}></div>
            </div>
        </Zoom>
        <Zoom>
            <h1>{props.data.title}</h1>
            <div className="Info">
                <div className="Author" dangerouslySetInnerHTML={{__html: props.data.content}}></div>
            </div>
        </Zoom>
        <Zoom>
            <h1>{props.data.title}</h1>
            <div className="Info">
                <div className="Author" dangerouslySetInnerHTML={{__html: props.data.content}}></div>
            </div>
        </Zoom>
        <Zoom>
            <h1>{props.data.title}</h1>
            <div className="Info">
                <div className="Author" dangerouslySetInnerHTML={{__html: props.data.content}}></div>
            </div>
        </Zoom>
        <Zoom>
            <h1>{props.data.title}</h1>
            <div className="Info">
                <div className="Author" dangerouslySetInnerHTML={{__html: props.data.content}}></div>
            </div>
        </Zoom>
        <Zoom>
            <h1>{props.data.title}</h1>
            <div className="Info">
                <div className="Author" dangerouslySetInnerHTML={{__html: props.data.content}}></div>
            </div>
        </Zoom>
        <Zoom>
            <h1>{props.data.title}</h1>
            <div className="Info">
                <div className="Author" dangerouslySetInnerHTML={{__html: props.data.content}}></div>
            </div>
        </Zoom>
        <Zoom>
            <h1>{props.data.title}</h1>
            <div className="Info">
                <div className="Author" dangerouslySetInnerHTML={{__html: props.data.content}}></div>
            </div>
        </Zoom>
    </article>
);

}

export default article;