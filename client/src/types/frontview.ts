export interface IFrontViewBackground {
  type: "image" | "color";
  image?: string;
  color?: string;
}

export interface ITopButton {
  text: string;
  link: string;
  color: string;
}

export interface IFrontView {
  logo: string;
  primaryBannerImg: string[];
  secondaryBannerImg: string[];
  whatsappStatus: boolean;
  topButton: ITopButton;
  background: IFrontViewBackground;
}
