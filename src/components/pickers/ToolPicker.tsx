import Image from 'next/image';
import { Tool } from '@/models/Types';
import { AppContext } from '@/context/CanvasContext';
import styles from '@/components/pickers/pickers.module.css';

const ToolPicker = ({ selected }: { selected: Tool }) => {
    const { tool, setTool } = AppContext();

    return (
        <button 
            className={`${tool === selected ? styles[`button-selected`] : styles.button}`}
            onClick={() => setTool(selected)}
        >
            <Image
                src={`/controls/${selected}.svg`}
                width={32}
                height={32}
                alt={selected}
            />
        </button>
    )
}

export default ToolPicker