import { ReactNode } from "react";

export interface ButtonProp {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  property?: string
  children: ReactNode;
}

export interface ListProp {
  property?: string; 
  children: ReactNode;
}

export interface PopoverProp {
  children: ReactNode[];
}

export interface IconProperties {
  className?: string;
}