export interface PrepData {
  items: string[];
  mindset: string;
}

export interface ScriptStep {
  type: "HOOK" | "ACTIVITY" | "THINK" | "EXPRESS" | "CLOSE";
  label: string;
  title: string;
  say?: string;
  content?: string;
  content2?: string;
  qs?: string[];
  hint?: string;
}

export interface DayData {
  num: number;
  title: string;
  theme: string;
  objective: string;
  tags: string[];
  tools: string[];
  prep: PrepData;
  steps: ScriptStep[];
}

export interface WeekData {
  label: string;
  desc: string;
  color: string;
  days: DayData[];
}

export type TabId = "overview" | "schedule" | "days" | "rotation" | "tracker" | "prep" | "tips";
