import { GITHUB_USERNAME } from '../../config';
import profile from '@/../public/profile.jpg'

export const GITHUB_URL = `https://github.com/${GITHUB_USERNAME}`;
export const PORTFOLIO_NAME = process.env.PORTFOLIO_NAME || "Arun";

//Static Images
export const PORTFOLIO_IMAGE :any = profile;
