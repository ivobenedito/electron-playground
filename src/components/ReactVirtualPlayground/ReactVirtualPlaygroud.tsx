import React from 'react';
import { useVirtual } from 'react-virtual';

function ReactVirtualPlayground() {
  const values = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
  const parentRef = React.useRef();
  const rowVirtualizer = useVirtual({
    size: values.length,
    parentRef,
    estimateSize: React.useCallback(() => 35, []),
    overscan: 5,
  });

  return (
    <div>
      HELLO WORLD!
      <div 
        ref={parentRef}
        style={{
          height: `50px`,
          width: `100px`,
          overflow: "auto",
        }}
      >
        {rowVirtualizer.virtualItems.map(virtualRow => (
          <div key={virtualRow.index}>
            Value: {values[virtualRow.index]}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReactVirtualPlayground;
