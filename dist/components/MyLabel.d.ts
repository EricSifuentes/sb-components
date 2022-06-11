/// <reference types="react" />
import './MyLabel.css';
export interface Props {
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
    color: 'primary' | 'secondary' | 'tertiary';
    /**
   * Color personalizado de la fuente
   */
    fontColor?: string;
    /**
     * Color personalizado del fondo
     */
    backgroundColor?: string;
}
declare const MyLabel: ({ label, size, allCaps, color, fontColor, backgroundColor }: Props) => JSX.Element;
export default MyLabel;
