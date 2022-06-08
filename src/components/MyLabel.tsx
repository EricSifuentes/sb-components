import './MyLabel.css';

interface Props {
    /**
     * Este es el mensaje a mostrar en la etiqueta 
     */
    label: string;
    /**
     * Este es el tamaño de la etiqueta
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';

    /**
     * Todo capitalizado
     */
    allCaps?: boolean;

    /**
     * Colores para la etiqueta
     */
    color: 'primary' | 'secondary' | 'tertiary'

    /**
   * Color personalizado de la fuente
   */
    fontColor?: string;

    /**
     * Color personalizado del fondo
     */
    backgroundColor?: string;
}


const MyLabel = ({
    label = "No Label",
    size = "normal",
    allCaps = false,
    color = 'primary',
    fontColor,
    backgroundColor = 'transparent'
}: Props) => {
    return (
        <span className={`label ${size} text-${color}`}
            style={{ color: fontColor, backgroundColor }}
        >
            {allCaps ? label.toUpperCase() : label}
        </span >
    );
};

export default MyLabel;