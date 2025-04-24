import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'outline' | 'elevated';
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'default',
  onClick,
}) => {
  const baseClasses = 'rounded-lg p-6 transition-all';
  
  const variantClasses = {
    default: 'bg-card-background border border-border-color',
    outline: 'border border-border-color bg-transparent',
    elevated: 'bg-card-background shadow-md hover:shadow-lg',
  };
  
  const classes = [
    baseClasses,
    variantClasses[variant],
    onClick ? 'cursor-pointer hover:brightness-95' : '',
    className,
  ].join(' ');

  return (
    <div className={classes} onClick={onClick}>
      {children}
    </div>
  );
};

export const CardHeader: React.FC<{ className?: string; children: React.ReactNode }> = ({
  className = '',
  children,
}) => {
  return <div className={`mb-4 ${className}`}>{children}</div>;
};

export const CardTitle: React.FC<{ className?: string; children: React.ReactNode }> = ({
  className = '',
  children,
}) => {
  return <h3 className={`text-xl font-semibold ${className}`}>{children}</h3>;
};

export const CardDescription: React.FC<{ className?: string; children: React.ReactNode }> = ({
  className = '',
  children,
}) => {
  return <p className={`text-sm text-text-color-secondary mt-1 ${className}`}>{children}</p>;
};

export const CardContent: React.FC<{ className?: string; children: React.ReactNode }> = ({
  className = '',
  children,
}) => {
  return <div className={className}>{children}</div>;
};

export const CardFooter: React.FC<{ className?: string; children: React.ReactNode }> = ({
  className = '',
  children,
}) => {
  return <div className={`mt-4 flex items-center ${className}`}>{children}</div>;
};

export default Card; 