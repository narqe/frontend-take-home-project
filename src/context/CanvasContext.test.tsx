import React from 'react';
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CanvasProvider, AppContext } from '@/context/CanvasContext';

const TestComponent = () => {
    const context = AppContext();

    if (!context) {
        return null; 
    }

    return (
        <div>
            <button onClick={() => context.setTool('brush')}>Set Tool to Brush</button>
            <button onClick={() => context.setColor('#ff0000')}>Set Color to Red</button>
            <button onClick={() => context.setLineWidth(15)}>Set Line Width to 15</button>
            <div>Tool: {context.tool}</div>
            <div>Color: {context.color}</div>
            <div>Line Width: {context.lineWidth}</div>
        </div>
    );
};

describe('CanvasProvider', () => {
    it('provides the correct context values using the brush', () => {
        render(
            <CanvasProvider>
                <TestComponent />
            </CanvasProvider>
        );

        expect(screen.getByText('Tool: brush')).toBeInTheDocument();
        expect(screen.getByText('Color: #000000')).toBeInTheDocument();
        expect(screen.getByText('Line Width: 10')).toBeInTheDocument();

        act(() => {
            screen.getByText('Set Tool to Brush').click();
            screen.getByText('Set Color to Red').click();
            screen.getByText('Set Line Width to 15').click();
        });

        expect(screen.getByText('Tool: brush')).toBeInTheDocument();
        expect(screen.getByText('Color: #ff0000')).toBeInTheDocument();
        expect(screen.getByText('Line Width: 15')).toBeInTheDocument();
    });
});
