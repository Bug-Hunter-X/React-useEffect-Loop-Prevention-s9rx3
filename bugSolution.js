```javascript
import React, { useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  //Corrected: Removed useEffect since it caused infinite loop and was not needed 
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default MyComponent;
```