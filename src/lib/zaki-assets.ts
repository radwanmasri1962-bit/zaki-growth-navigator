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
import ahmedPortrait from "@/assets/ahmed-hero.png.asset.json";
import ahmedTruckHero from "@/assets/ahmed-truck-hero.png.asset.json";
import recipeHummus from "@/assets/recipe-hummus-v2.png.asset.json";
import recipeChickenShawarma from "@/assets/recipe-chicken-shawarma.png.asset.json";
import recipeMexicanRice from "@/assets/recipe-mexican-rice.png.asset.json";
import assemblyChickenBowl from "@/assets/assembly-chicken-bowl.png.asset.json";
import assemblyChickenShawarma from "@/assets/assembly-chicken-shawarma-ar-v2.png.asset.json";
import assemblySummerSalata from "@/assets/assembly-summer-salata.png.asset.json";
import sopTruckOpening from "@/assets/sop-truck-opening.png.asset.json";
import sopTruckClosing from "@/assets/sop-truck-closing.png.asset.json";
import sopBuddOpening from "@/assets/sop-budd-opening.png.asset.json";
import sopBuddClosing from "@/assets/sop-budd-closing.png.asset.json";
import sopFoodSafety from "@/assets/sop-food-safety.png.asset.json";
import sopReceivingInventory from "@/assets/sop-receiving-inventory.png.asset.json";
import trainingCertification from "@/assets/training-certification.png.asset.json";
import stationCheatSheets from "@/assets/station-cheat-sheets.png.asset.json";
import digitalOperationsMockup from "@/assets/digital-operations-mockup.png.asset.json";
import zakiWebsitePrototype from "@/assets/zaki-website-prototype.png.asset.json";
import menuTvScreen from "@/assets/menu-tv-screen.png.asset.json";
import productChickenBowl from "@/assets/product-chicken-bowl.png.asset.json";
import productGyroFries from "@/assets/product-gyro-fries.png.asset.json";
import productFalafelWrap from "@/assets/product-falafel-wrap.png.asset.json";
import jobDescriptionEnglish from "@/assets/job-description-english.png.asset.json";
import jobDescriptionArabic from "@/assets/job-description-arabic.png.asset.json";
import jobDescriptionSpanish from "@/assets/job-description-spanish.png.asset.json";

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
  instagramProfile: instagramProfile.url,
  facebookPage: facebookPage.url,
  truckMap: truckMap.url,
  ahmedPortrait: ahmedPortrait.url,
  ahmedTruckHero: ahmedTruckHero.url,
  recipeHummus: recipeHummus.url,
  recipeChickenShawarma: recipeChickenShawarma.url,
  recipeMexicanRice: recipeMexicanRice.url,
  assemblyChickenBowl: assemblyChickenBowl.url,
  assemblyChickenShawarma: assemblyChickenShawarma.url,
  assemblySummerSalata: assemblySummerSalata.url,
  sopTruckOpening: sopTruckOpening.url,
  sopTruckClosing: sopTruckClosing.url,
  sopBuddOpening: sopBuddOpening.url,
  sopBuddClosing: sopBuddClosing.url,
  sopFoodSafety: sopFoodSafety.url,
  sopReceivingInventory: sopReceivingInventory.url,
  trainingCertification: trainingCertification.url,
  stationCheatSheets: stationCheatSheets.url,
  digitalOperationsMockup: digitalOperationsMockup.url,
  zakiWebsitePrototype: zakiWebsitePrototype.url,
  menuTvScreen: menuTvScreen.url,
  productChickenBowl: productChickenBowl.url,
  productGyroFries: productGyroFries.url,
  productFalafelWrap: productFalafelWrap.url,
  jobDescriptionEnglish: jobDescriptionEnglish.url,
  jobDescriptionArabic: jobDescriptionArabic.url,
  jobDescriptionSpanish: jobDescriptionSpanish.url,
} as const;

/** Standard disclaimer for JARA-created concept imagery. */
export const JARA_CONCEPT_NOTE =
  "JARA-created visual asset — brand and presentation direction, not documentary evidence of current operations.";
