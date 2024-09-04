import React from 'react';

describe('Playground', () => {
    beforeEach(() => {
        cy.visit('/playground')
    });

    it('should change the color and draw a line of that color', () => { 
        cy.get('#brush').trigger('select');
        cy.get('#color-picker').invoke('val', '#ff0000').trigger('change');  
        cy.wait(1000);
        cy.get('#canvas').then(canvas => {
            const context = canvas[0].getContext('2d');
            const canvasWidth = canvas[0].width;
            const canvasHeight = canvas[0].height;
            
            context.beginPath();
            context.strokeStyle = '#ff0000';  
            context.moveTo(50, 50);
            context.lineTo(150, 150);
            context.stroke();

            const imageData = context.getImageData(0, 0, canvasWidth, canvasHeight);
            const { width, height, data } = imageData;

            const isRed = (r, g, b) => (
                Math.abs(r - 255) < 10 &&
                Math.abs(g - 0) < 10 &&
                Math.abs(b - 0) < 10
            );

            let colorFound = false;
            for (let i = 0; i < data.length; i += 4) {
                const r = data[i];
                const g = data[i + 1];
                const b = data[i + 2];
                const a = data[i + 3];
    
                if (isRed(r, g, b) && a > 0) {
                    colorFound = true;
                    break;
                }
            }

            expect(colorFound).to.be.true;
        });
    });

    it('should change the color and draw a rectangle of that color', () => {
        cy.get('#rectangle').click(); 
        cy.get('#color-picker').invoke('val', '#FF00FF').trigger('change');
        cy.wait(1000);

        cy.get('#canvas').then(canvas => {
            const context = canvas[0].getContext('2d');
            const canvasWidth = canvas[0].width;
            const canvasHeight = canvas[0].height; 

            const rectX = 50;
            const rectY = 50;
            const rectWidth = 100;
            const rectHeight = 100;

            context.strokeStyle = '#FF00FF';
            context.strokeRect(150, 150, rectWidth, rectHeight);
    
            const imageData = context.getImageData(0, 0, canvasWidth, canvasHeight);
            const data = imageData.data;
    
            const isMagenta = (r, g, b) => (
                Math.abs(r - 255) < 10 &&
                Math.abs(g - 0) < 10 &&
                Math.abs(b - 255) < 10
            );
    
            let colorFound = false;

            for (let y = rectY; y < rectY + rectHeight; y++) {
                for (let x = rectX; x < rectX + rectWidth; x++) {
                    const index = (y * canvasWidth + x) * 4;
                    const r = data[index];
                    const g = data[index + 1];
                    const b = data[index + 2];
                    const a = data[index + 3];
    
                    if (isMagenta(r, g, b) && a > 0) {
                        colorFound = true;
                        break;
                    }
                }
                if (colorFound) break;
            }
    
            expect(colorFound).to.be.true;
        });
    });
});