import React from 'react'
import { AppContext } from '@/context/CanvasContext';
import styles from '@/components/canvas/canvas.module.scss';
import { Box } from '@mui/material';

const CanvasContainer = () => {
    const { canvasRef, startDrawing, draw, stopDrawing } = AppContext();
    const instructions = "Use your mouse to draw on the canvas. Press and hold the mouse button to start drawing, move the mouse to draw, and release the mouse button to stop drawing.";

    return (
        <Box
            role="img"
            aria-label={instructions}
            tabIndex={0}
        >
            <canvas
                className={styles.canvas}
                ref={canvasRef}
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseLeave={stopDrawing}
                width={800}
                height={600}
                id='canvas'
                aria-label="Drawing canvas"
                role="application"
            />
        </Box>
    )
}

export default CanvasContainer