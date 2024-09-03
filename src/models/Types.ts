export type Tool = 'brush' | 'eraser' | 'rectangle';

export type HexColor = `#${string}`;

interface CanvasContextType {
    canvasRef: React.RefObject<HTMLCanvasElement>;
    startDrawing: (e: React.MouseEvent<HTMLCanvasElement>) => void;
    draw: (e: React.MouseEvent<HTMLCanvasElement>) => void;
    stopDrawing: () => void;
    tool: Tool;
    setTool: React.Dispatch<React.SetStateAction<Tool>>;
    color: HexColor;
    setColor: React.Dispatch<React.SetStateAction<HexColor>>;
    lineWidth: number;
    setLineWidth: React.Dispatch<React.SetStateAction<number>>;
}