import brand from "@/data/brand/brand.json";
import units from "@/data/shops/units.json";
import mobile from "@/data/shops/stan-bros-mobile.json";
import clothing from "@/data/shops/lads-and-looms.json";
import shoes from "@/data/shops/stan-bros-shoe-shop.json";
import copyEn from "@/data/i18n/copy.en.json";
import copyTa from "@/data/i18n/copy.ta.json";
import mobileProducts from "@/data/mobile/products.json";
import clothingProducts from "@/data/clothing/products.json";
import shoeProducts from "@/data/shoes/products.json";

export type Brand = typeof brand;
export type ShopUnitList = typeof units;
export type ShopUnit = (typeof mobile) | (typeof clothing) | (typeof shoes);

const UNIT_BY_SLUG: Record<string, ShopUnit> = {
  [mobile.slug]: mobile,
  [clothing.slug]: clothing,
  [shoes.slug]: shoes,
};

export function getBrand(): Brand {
  return brand;
}

export function getShopUnits() {
  return units.units;
}

export function getShopUnit(slug: string): ShopUnit | null {
  return UNIT_BY_SLUG[slug] ?? null;
}

export function getBilingualCopy() {
  return { en: copyEn, ta: copyTa } as const;
}

export function getMobileProducts() {
  return mobileProducts;
}

export function getClothingProducts() {
  return clothingProducts;
}

export function getShoeProducts() {
  return shoeProducts;
}

