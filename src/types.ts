export type PromptedComponent = {
  componentName: string | null;
  componentProp: string | null;
};

export type HeaderProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  text: string;
};

export type BreakerProps = {
  number: 1 | 2;
  text: string;
};

export type ParagraphProps = {
  style: "normal" | "italic" | "blockquote";
  text: string;
};

export type ImageProps = {
  float: "left" | "right" | "both";
  text: string;
};

export type ColumnProps = { number: number; text: string };

export type Parameter = { value: string | number; display: string };
