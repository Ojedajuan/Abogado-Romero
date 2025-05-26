import React, { ReactElement } from 'react';

type IconProps = {
  children: React.ReactNode;
  color?: string;
  className?: string;
};

export default function IconWrapper({
  children,
  color = 'hsl(var(--foreground))',
  className = ''
}: IconProps) {
  // El truco está en clonar el componente hijo (SVG) y añadirle los props necesarios
  const childrenWithProps = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      // Cast the child to a more specific type that allows arbitrary props
      return React.cloneElement(child as ReactElement<any>, {
        color: color, // Algunos componentes SVG como los de Lucide usan esta prop
        style: {
          ...(child.props.style || {}),
          color: color, // Asegura que el color se aplique como estilo inline
          fill: 'currentColor', // Importante para SVGs
          stroke: 'currentColor' // Importante para SVGs con trazos
        },
        // Mantener las clases existentes y agregar clases que ayuden con el color
        className: `${child.props.className || ''} text-current fill-current stroke-current`
      });
    }
    return child;
  });

  return (
    <span
      style={{ 
        color: color,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      className={`icon-wrapper ${className}`}
    >
      {childrenWithProps}
    </span>
  );
}