export interface IProjectTypes {
  id: number;
  title: string;
  subtitle: string;
  imagePath: string;
  storeLinks: {
    google: string;
    apple: string;
  };
}
