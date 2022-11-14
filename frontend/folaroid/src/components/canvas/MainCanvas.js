// import { css } from '@emotion/css';
import React, { useRef, useState } from 'react';
import { Stage, Layer, Line, Text } from 'react-konva';

const MainCanvas = () => {
    const [tool, setTool] = useState('pen');
    const [lines, setLines] = useState([]);
    const [strokeWidth, setStrokeWidth] = useState(1);
    const isDrawing = useRef(true);
    const [cnt, setCnt] = useState(0);

    const handleMouseMove = (e) => {
        // if (cnt === 200) {
        //     isDrawing.current = false;

        // }

        // no drawing - skipping
        if (!isDrawing.current) {
            return;
        }

        isDrawing.current = true;
        const pos = e.target.getStage().getPointerPosition();

        setLines([...lines, { tool, points: [pos.x, pos.y] }]);

        const stage = e.target.getStage();
        const point = stage.getPointerPosition();
        let lastLine = lines[lines.length - 1];
        // add point
        lastLine.points = lastLine.points.concat([point.x, point.y]);

        // replace last
        lines.splice(lines.length - 1, 1, lastLine);
        setLines(lines.concat());

        setStrokeWidth(strokeWidth + 1);

        setCnt(cnt + 1);
    };


    return (
        <div style={{background: 'black'}}>
            <Stage
                width={window.innerWidth}
                height={window.innerHeight}
                onMousemove={handleMouseMove}
            >
                <Layer>
                    <Text text="Just start drawing" x={5} y={30} />
                    {lines.map((line, i) => (
                        <Line
                            key={i}
                            points={line.points}
                            stroke="rgba(15, 76, 132, 1)"
                            strokeWidth={strokeWidth}
                            tension={0.5}
                            lineCap="round"
                            lineJoin="round"
                            globalCompositeOperation={
                                line.tool === 'eraser'
                                    ? 'destination-out'
                                    : 'source-over'
                            }
                        />
                    ))}
                </Layer>
            </Stage>
            <select
                value={tool}
                onChange={(e) => {
                    setTool(e.target.value);
                }}
            >
                <option value="pen">Pen</option>
                <option value="eraser">Eraser</option>
            </select>
        </div>
    );
};

export default MainCanvas;
