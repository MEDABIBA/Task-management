declare module "*.svg" {
  const content: string;
  export default content;
}
declare module "*.scss" {
  const content: { [className: string]: string };
  export default content;
}
declare module "*.css";
declare module "*.jpg";
declare module "*.png";
declare module "*.svg";
