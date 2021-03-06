import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => (
  <Svg viewBox="0 0 48 48" {...props}>
    <path d="M12,30.6c3.2-1.2,7.4-1.9,12-1.9c4.6,0,8.9,0.7,12,1.9c1.6,0.6,3,1.4,4.1,2.4c1.1,1,1.9,2.3,1.9,3.9
	c0,3.5-2.7,6.4-6.2,6.7l-0.3,0c-7.7,0.7-15.4,0.7-23.1,0l-0.3,0C8.7,43.2,6,40.3,6,36.8c0-1.6,0.9-2.9,1.9-3.9
	C9,32,10.4,31.2,12,30.6z" />  
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12,30.6c3.2-1.2,7.4-1.9,12-1.9c4.6,0,8.9,0.7,12,1.9c1.6,0.6,3,1.4,4.1,2.4c1.1,1,1.9,2.3,1.9,3.9
      c0,3.5-2.7,6.4-6.2,6.7l-0.3,0c-7.7,0.7-15.4,0.7-23.1,0l-0.3,0C8.7,43.2,6,40.3,6,36.8c0-1.6,0.9-2.9,1.9-3.9
      C9,32,10.4,31.2,12,30.6z"/>
  <ellipse cx="24" cy="17.1" rx="12.1" ry="9.1"/>
  </Svg>
);

export default Icon;
