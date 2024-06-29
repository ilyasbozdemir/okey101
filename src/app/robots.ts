import type { MetadataRoute } from "next";
import { defaultRobotsSettings } from "lib/defaultData/robots";

export default function robots(): MetadataRoute.Robots {
  return  defaultRobotsSettings
}
