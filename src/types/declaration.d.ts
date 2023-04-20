/* eslint-disable @typescript-eslint/no-explicit-any */

declare module "tailwindcss/resolveConfig";

declare module "*.png" {
  const value: any;
  export default value;
}

declare module "*.svg" {
  const content: any;
  export default content;
}
