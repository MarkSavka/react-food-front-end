import React, { useEffect, useState } from 'react'

const SVG_arrow_down = (props) => {

   const [fill, setFill] = useState('white')
   const [width, setWidth] = useState('20')
   const [height, setHeight] = useState('20')

   useEffect(() => {
      setFill(props.fill || 'white')
      setWidth(props.width || '20')
      setHeight(props.height || '20')
   })

   return (
      <svg width={width} height={height} viewBox="0 0 12 7" fill="none">
         <path fillRule="evenodd" clipRule="evenodd" d="M5.99976 6.33328C5.80976 6.33328 5.6206 6.26911 5.46643 6.13995L0.466428 1.97328C0.113095 1.67911 0.0647615 1.15328 0.359761 0.799946C0.653928 0.446612 1.17893 0.399112 1.53309 0.693279L6.00893 4.42328L10.4773 0.827446C10.8356 0.539112 11.3606 0.595779 11.6489 0.954113C11.9373 1.31245 11.8806 1.83661 11.5223 2.12578L6.52226 6.14911C6.36976 6.27161 6.18476 6.33328 5.99976 6.33328"
            fill={fill}
         />
      </svg>
   )
}

export default SVG_arrow_down