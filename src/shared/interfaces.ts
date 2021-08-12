export interface IAppState {
  isLoading?: boolean;
  newsCards?: INewsCard[];
}

export interface IHeaderProps extends IAppState {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

export interface INewsCard {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source?: { name: string };
  title: string;
  url: string;
  urlToImage: string;
}

export interface IMainProps {
  cards?: INewsCard[];
}
