// lib/shared/PageContent.tsx

import { AmbientColor } from "@/components/decorations/ambient-color";
import DynamicZoneManager from "@/components/dynamic-zone/manager";

interface DynamicComponent {
  __component: string;
  [key: string]: unknown;
}

interface PageData {
  locale?: string;
  dynamic_zone?: DynamicComponent[];
}

export default function PageContent({ pageData }: { pageData: PageData }) {
  const dynamicZone = pageData?.dynamic_zone;

  return (
    <div className="relative overflow-hidden w-full">
      <AmbientColor />
      {dynamicZone && (
        <DynamicZoneManager dynamicZone={dynamicZone} locale={pageData.locale} />
      )}
    </div>
  );
}