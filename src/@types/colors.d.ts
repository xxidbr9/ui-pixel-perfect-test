
// Primary Color
type PrimaryColorBaseType = "primary-blue";
type PrimaryColorSelectionType = "dark" | "30" | "20" | "10";
export type PrimaryColorType = PrimaryColorBaseType | `${PrimaryColorBaseType}-${PrimaryColorSelectionType}`;

// Base White
type BaseWhiteColorBaseType = "base-white";
type BaseWhiteColorSelectionType = "20" | "50" | "75";
export type BaseWhiteColorType = BaseWhiteColorBaseType | `${BaseWhiteColorBaseType}-${BaseWhiteColorSelectionType}`;

// Base Black
type BaseBlackColorBaseType = "base-black";
type BaseBlackColorSelectionType = "20";
export type BaseBlackColorType = BaseBlackColorBaseType | `${BaseBlackColorBaseType}-${BaseBlackColorSelectionType}`;

// Gray
type GraysGrayColorBaseType = "grays-gray";
type GraysGrayColorSelectionType = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10";
export type GraysGrayColorType = `${GraysGrayColorBaseType}-${GraysGrayColorSelectionType}`;


// Color Red
type ColorsRedColorBaseType = "colors-red";
type ColorsRedColorSelectionType = "10" | "30";
export type ColorsRedColorType = ColorsRedColorBaseType | `${ColorsRedColorBaseType}-${ColorsRedColorSelectionType}`;

// Color Green
type ColorsGreenColorBaseType = "colors-green";
type ColorsGreenColorSelectionType = "2" | "5" | "10" | "30" | "dark";
export type ColorsGreenColorType = ColorsGreenColorBaseType | `${ColorsGreenColorBaseType}-${ColorsGreenColorSelectionType}`;

// Color yellow
type ColorsYellowColorBaseType = "colors-yellow";
type ColorsYellowColorSelectionType = "30";
export type ColorsYellowColorType = ColorsYellowColorBaseType | `${ColorsYellowColorBaseType}-${ColorsYellowColorSelectionType}`;

// Purple
type ColorsPurpleColorBaseType = "colors-purple";
type ColorsPurpleColorSelectionType = "5" | "10" | "20" | "30" | "dark";
export type ColorsPurpleColorType = ColorsPurpleColorBaseType | `${ColorsPurpleColorBaseType}-${ColorsPurpleColorSelectionType}`;

// Code color
type CodeColorBaseType = "code";
type CodeColorSelectionType = "comment" | "names";
export type CodeColorType = `${CodeColorBaseType}-${CodeColorSelectionType}`;

export type AllColors =
  | PrimaryColorType
  | PrimaryColorType
  | BaseWhiteColorType
  | BaseBlackColorType
  | GraysGrayColorType
  | ColorsRedColorType
  | ColorsGreenColorType
  | ColorsYellowColorType
  | ColorsPurpleColorType
  | CodeColorType