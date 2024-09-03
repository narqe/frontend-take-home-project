import React from 'react'
import { AppContext } from '@/context/CanvasContext';
import styles from '@/components/canvas/canvas.module.css';

const CanvasContainer = () => {
    const { canvasRef, startDrawing, draw, stopDrawing } = AppContext();

    return (
        <canvas
            className={styles.canvas}
            ref={canvasRef}
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
            width={800}
            height={600}
        />
    )
}

export default CanvasContainer