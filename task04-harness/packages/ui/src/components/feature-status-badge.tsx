import { Badge } from "./badge";
export type FeatureStatus = "included" | "optional" | "planned";
const labels: Record<FeatureStatus, string> = {
  included: "Included",
  optional: "Optional",
  planned: "Planned",
};
const variants: Record<FeatureStatus, "success" | "secondary" | "outline"> = {
  included: "success",
  optional: "secondary",
  planned: "outline",
};
export function FeatureStatusBadge({
  status,
  label,
}: {
  status: FeatureStatus;
  label?: string;
}) {
  return (
    <Badge variant={variants[status]} data-live-status="false">
      {label ?? labels[status]}
    </Badge>
  );
}
