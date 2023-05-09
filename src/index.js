import React from 'react';
import ReactDOM from 'react-dom/client';
import Paragraph from './components/paragraphLink/ParagraphLink';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Paragraph href='https://legacy.reactjs.org' pepito='Yo mero caguamero' color ='black'>Enlace a React</Paragraph>
    <Paragraph href='https://youtube.com' color='red'>Enlace a Youtube</Paragraph>
    <Paragraph href='https://linkedin.com' color='blue'>Enlance a LinkedIn</Paragraph>
    <Paragraph href='#'>Enlance a LinkedIn</Paragraph>
  </React.StrictMode>
);

/* root.render(<h1>HoliCrayoli</h1>) */

