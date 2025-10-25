declare module "gray-matter" {
  export interface GrayMatterResult {
    data: Record<string, unknown>;
    content: string;
  }
  const matter: (input: string) => GrayMatterResult;
  export default matter;
}
