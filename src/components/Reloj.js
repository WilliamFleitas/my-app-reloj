import { useState, useEffect } from "react";



export default function Reloj() {
    const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
      setInterval(() => setDateState(new Date()), 1000);
    }, []);
  
    return (
      <div>
        <p>
          {dateState.toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: false,
          })}
        </p>
      </div>
    );
  }