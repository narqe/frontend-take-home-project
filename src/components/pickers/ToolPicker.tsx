import Image from 'next/image';
import { Tool } from '@/models/Types';
import { AppContext } from '@/context/CanvasContext';
import styles from '@/components/pickers/pickers.module.scss';
import { Button, Tooltip } from '@mui/material'

const ToolPicker = ({ selected }: { selected: Tool }) => {
    const { tool, setTool } = AppContext();

    return (
        <Tooltip title={`use the ${selected}`}>
            <Button 
                className={`${tool === selected ? styles[`button-selected`] : styles.button}`}
                onClick={() => setTool(selected)}
                id={selected}
            >
                <Image
                    src={`/controls/${selected}.svg`}
                    width={32}
                    height={32}
                    alt={selected}
                />
            </Button>
        </Tooltip>
    )
}

export default ToolPicker