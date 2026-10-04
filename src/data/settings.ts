export type QuickRestart = "off" | "esc" | "tab";
export type StopOnError = "off" | "letter";
export type ConfidenceMode = "off" | "on";
export type ShowCharBar = "always" | "on_focus" | "off";

export interface CustomizationSettings {
  // Behavior & Tolerance
  quickRestart: QuickRestart;
  lazyMode: boolean; // umlaut tolerance
  capitalizationTolerance: boolean;

  // Typing Input
  stopOnError: StopOnError;
  confidenceMode: ConfidenceMode;
  showCharBar: ShowCharBar;

  // Sound
  soundVolume: number; // 0.0 - 1.0
  playSoundOnClick: string; // ID from SOUND_CLICK_OPTIONS
  playSoundOnError: string; // ID from SOUND_ERROR_OPTIONS

  // Elements & Accessibility
  showKeyTips: boolean;
  capsLockWarning: boolean;
  showMasteryCounter: boolean;
  increasedContrast: boolean;

  // Posture (TM-4): how the course asks to be taken
  showPostureCues: boolean;
  posturePrimerSeen: boolean;
}

export const DEFAULT_SETTINGS: CustomizationSettings = {
  quickRestart: "off",
  lazyMode: false,
  capitalizationTolerance: false,

  stopOnError: "off",
  confidenceMode: "off",
  showCharBar: "always",

  soundVolume: 0.5,
  playSoundOnClick: "18", // Cherry MX Black ABS default mechanical click
  playSoundOnError: "1", // Damage tone

  showKeyTips: true,
  capsLockWarning: true,
  showMasteryCounter: true,
  increasedContrast: false,

  showPostureCues: true,
  posturePrimerSeen: false,
};
