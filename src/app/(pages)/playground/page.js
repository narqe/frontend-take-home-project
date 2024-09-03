"use client";

import PlaygroundContainer from '@/components/playground/PlaygroundContainer';
import { CanvasProvider } from '@/context/CanvasContext';

export default function Page() {
    return (
        <CanvasProvider>
            <PlaygroundContainer />
        </CanvasProvider>
    )
}