import React from "react";

export type OptionType = {
  name: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  onClick: () => void;
  isActive: boolean;
};
export type OptionTableType = {
  name: string;
  onClick: () => void;
};
