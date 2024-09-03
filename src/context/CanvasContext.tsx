import React, { createContext, useContext, useState, useRef, useEffect } from 'react';
import { Tool, HexColor, CanvasContextType } from '@/models/Types'

const Context = createContext<CanvasContextType | undefined>(undefined);

export const CanvasProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [tool, setTool] = useState<Tool>('brush');
    const [color, setColor] = useState<HexColor>('#000000');
    const [lineWidth, setLineWidth] = useState<number>(10);
    const [isDrawing, setIsDrawing] = useState<boolean>(false);
    const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
    const [startPos, setStartPos] = useState({ x: 0, y: 0 });
    const [imageData, setImageData] = useState<ImageData | null>(null);

    const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
        if (!context || !canvasRef.current) return;

        const { offsetX, offsetY } = e.nativeEvent;
        setStartPos({ x: offsetX, y: offsetY });

        switch (tool) {
            case 'rectangle':
                setImageData(context?.getImageData(0, 0, canvasRef.current.width, canvasRef.current.height));
            default:
                context.beginPath();
                context.moveTo(offsetX, offsetY);
        }

        setIsDrawing(true);
    };

    const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
        if (!isDrawing || !context) return;

        const { offsetX, offsetY } = e.nativeEvent;

        switch (tool) {
            case 'rectangle':
                if (imageData) {
                    context.putImageData(imageData, 0, 0);
                }                
                const rectWidth = offsetX - startPos.x;
                const rectHeight = offsetY - startPos.y;
                context.strokeStyle = color;
                context.strokeRect(startPos.x, startPos.y, rectWidth, rectHeight);
                break;

            case 'eraser':
                context.strokeStyle = '#ffffff';
                context.lineTo(offsetX, offsetY);
                context.stroke();
                break;

            default:
                context.strokeStyle = color; 
                context.lineTo(offsetX, offsetY);
                context.stroke();
                break;
        }
    };

    const stopDrawing = () => {
        if (isDrawing && (tool === 'brush' || tool === 'eraser') && context) {
            context.closePath();
        }
        setIsDrawing(false);
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            const ctx = canvas.getContext('2d', { willReadFrequently: true });
            setContext(ctx);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (context) {
            context.lineCap = 'round';
            context.lineWidth = lineWidth;
        }
    }, [lineWidth, context]);

    return (
        <Context.Provider 
            value={{ 
                canvasRef, 
                startDrawing, 
                draw, 
                stopDrawing, 
                tool, 
                setTool, 
                color, 
                setColor, 
                lineWidth, 
                setLineWidth 
            }}
        >
            {children}
        </Context.Provider>
    );
};

export const AppContext = () => {
    const context = useContext(Context);
    if (context === undefined) {
        throw new Error('Context must be used within a CanvasProvider');
    }
    return context;
}