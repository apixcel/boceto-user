export interface IFrontView {
  logo: string;
  primaryBannerImg: string[];
  secondaryBannerImg: string[];
  whatsappStatus: boolean;
  topButton: {
    text: string;
    link: string;
    color: string;
  };
  background: {
    type: "image" | "color";
    image?: string;
    color?: string;
  };
}
