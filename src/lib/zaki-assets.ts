/**
 * Central registry of Zaki visual assets.
 *
 * Type A — real Zaki documentary evidence (photography of the actual operation).
 * Type B — JARA-created visual assets (concept / brand-direction imagery). These
 * illustrate positioning and future-state presentation; they are NOT documentary
 * evidence of Zaki's current physical operation.
 */
import buddDairy from "@/assets/budd-dairy.webp.asset.json";
import chickenBowl from "@/assets/chicken-bowl.webp.asset.json";
import shawarma from "@/assets/chicken-shawarma.png.asset.json";
import falafelBowl from "@/assets/Falafel_Bowl_ChatGPT_1.webp.asset.json";
import takeAwayContainers from "@/assets/Food_Shot_Take_Away_Container_ChatGPT_1.webp.asset.json";
import truckFleet from "@/assets/Food_Truck_Image_WOW_ChatGPT_1.webp.asset.json";
import hummusHarissa from "@/assets/Hummus_Harissa_ChatGPT_1.webp.asset.json";
import summerSalata from "@/assets/Summer_Salata_with_Chicken_ChatGPT_1.webp.asset.json";
import cateringSpread from "@/assets/Zaki_Catering_ChatGPT_1.webp.asset.json";
import truckEvent from "@/assets/Zaki_Food_Truck_Event_ChatGPT_1.webp.asset.json";
import takeAwayOrder from "@/assets/Zaki_Take_Away_Order_ChatGPT_1.webp.asset.json";
import team from "@/assets/Zaki_Team_ChatGPT_1.webp.asset.json";
import instagramProfile from "@/assets/zaki-instagram-profile.png.asset.json";
import facebookPage from "@/assets/zaki-facebook-page.png.asset.json";
import truckMap from "@/assets/zaki-truck-map-illustration.jpg.asset.json";

export const zakiAssets = {
  buddDairy: buddDairy.url,
  chickenBowl: chickenBowl.url,
  shawarma: shawarma.url,
  falafelBowl: falafelBowl.url,
  takeAwayContainers: takeAwayContainers.url,
  truckFleet: truckFleet.url,
  hummusHarissa: hummusHarissa.url,
  summerSalata: summerSalata.url,
  cateringSpread: cateringSpread.url,
  truckEvent: truckEvent.url,
  takeAwayOrder: takeAwayOrder.url,
  team: team.url,
} as const;

/** Standard disclaimer for JARA-created concept imagery. */
export const JARA_CONCEPT_NOTE =
  "JARA-created visual asset — brand and presentation direction, not documentary evidence of current operations.";
