import {
  Code2,
  Database,
  BarChart3,
  ShieldCheck,
  Dumbbell,
  Landmark,
  Sparkles,
  FileText,
} from "lucide-react";

export const iconMap = {
  code: Code2,
  database: Database,
  "bar-chart": BarChart3,
  "shield-check": ShieldCheck,
  dumbbell: Dumbbell,
  landmark: Landmark,
  "file-text": FileText,
};

export const getIcon = (key) => iconMap[key] || Sparkles;

export const accentMap = {
  purple: {
    bg: "bg-violet-100",
    text: "text-violet-600",
    solid: "bg-violet-600",
    chipBg: "bg-violet-50",
    chipText: "text-violet-700",
  },
  orange: {
    bg: "bg-orange-100",
    text: "text-orange-600",
    solid: "bg-orange-500",
    chipBg: "bg-orange-50",
    chipText: "text-orange-700",
  },
  pink: {
    bg: "bg-pink-100",
    text: "text-pink-600",
    solid: "bg-pink-500",
    chipBg: "bg-pink-50",
    chipText: "text-pink-700",
  },
};
