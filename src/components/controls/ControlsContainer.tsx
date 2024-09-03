import React from 'react'
import ToolPicker from '@/components/pickers/ToolPicker';
import SizePicker from '@/components/pickers/SizePicker';
import ColorPicker from '@/components/pickers/ColorPicker';
import styles from "@/components/controls/controls.module.css"

const ControlsContainer = () => {
    return (
        <div className={styles.container}>
            <div>
                <label>Tool: </label>
                <ToolPicker selected="brush" />
                <ToolPicker selected="eraser" />
                <ToolPicker selected="rectangle" />
            </div>
            <div>            
                <label>Stroke Size: </label>
                <SizePicker size="Small" value={2} />
                <SizePicker size="Medium" value={10} />
                <SizePicker size="Big" value={15} />
            </div>
            <ColorPicker />
        </div>
    )
}

export default ControlsContainer