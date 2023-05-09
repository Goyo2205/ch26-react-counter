//importar hojas de estilo
import '../../../src/styles/paragraphLink/paragraph-link.css'

import PropTypes from 'prop-types';


const ParagraphLink = ( {color,href,children} ) => {
    const myParagraph = (
        <>
            <a style={{color: color}} 
                href={href} target="_blank">
                <p className='content'>{children}</p>
            </a>
        </>
    );
    return myParagraph;
} ;


ParagraphLink.propTypes = {
    href : PropTypes.string.isRequired
}

export default ParagraphLink; // exportacion por default

//Props (properties): Comunican los componentes padres con los componnentes hijos
/* const ParagraphLink = (props) => {
    console.log(props);//clave valor, href

    const myParagraph = (
        <>
            <a style={{textDecoration: 'none', color: props.color}} 
                href={props.href} target="_blank">
                <p>{props.children}</p>
            </a>
        </>
    );
    return myParagraph;
} ; */