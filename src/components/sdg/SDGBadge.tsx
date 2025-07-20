import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export interface SDGGoal {
  id: number;
  name: string;
  color: string;
  icon: string;
}

export const SDG_GOALS: SDGGoal[] = [
  { id: 1, name: "No Poverty", color: "bg-sdg-poverty", icon: "🏠" },
  { id: 2, name: "Zero Hunger", color: "bg-yellow-600", icon: "🌾" },
  { id: 3, name: "Good Health", color: "bg-sdg-health", icon: "❤️" },
  { id: 4, name: "Quality Education", color: "bg-sdg-education", icon: "📚" },
  { id: 5, name: "Gender Equality", color: "bg-red-500", icon: "⚖️" },
  { id: 6, name: "Clean Water", color: "bg-blue-400", icon: "💧" },
  { id: 7, name: "Affordable Energy", color: "bg-yellow-500", icon: "⚡" },
  { id: 8, name: "Economic Growth", color: "bg-red-600", icon: "📈" },
  { id: 9, name: "Innovation", color: "bg-orange-600", icon: "🔧" },
  { id: 10, name: "Reduced Inequalities", color: "bg-pink-500", icon: "🤝" },
  { id: 11, name: "Sustainable Cities", color: "bg-orange-500", icon: "🏙️" },
  { id: 12, name: "Responsible Consumption", color: "bg-yellow-700", icon: "♻️" },
  { id: 13, name: "Climate Action", color: "bg-sdg-climate", icon: "🌍" },
  { id: 14, name: "Life Below Water", color: "bg-blue-600", icon: "🐠" },
  { id: 15, name: "Life on Land", color: "bg-green-600", icon: "🌳" },
  { id: 16, name: "Peace & Justice", color: "bg-blue-800", icon: "⚖️" },
  { id: 17, name: "Partnerships", color: "bg-blue-900", icon: "🤝" },
];

interface SDGBadgeProps {
  goalId: number;
  size?: "sm" | "md" | "lg";
  showIcon?: boolean;
  className?: string;
}

const SDGBadge = ({ goalId, size = "md", showIcon = true, className }: SDGBadgeProps) => {
  const goal = SDG_GOALS.find(g => g.id === goalId);
  
  if (!goal) return null;

  const sizeClasses = {
    sm: "text-xs px-2 py-1",
    md: "text-sm px-3 py-1",
    lg: "text-base px-4 py-2"
  };

  return (
    <Badge 
      variant="secondary" 
      className={cn(
        goal.color,
        "text-white border-0 font-medium",
        sizeClasses[size],
        className
      )}
    >
      {showIcon && <span className="mr-1">{goal.icon}</span>}
      <span>SDG {goal.id}</span>
      {size !== "sm" && <span className="hidden sm:inline ml-1">• {goal.name}</span>}
    </Badge>
  );
};

export default SDGBadge;