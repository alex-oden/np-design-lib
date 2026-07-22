import * as React from "react";
/**
 * MediaCard — image/video preview on top, content below.
 * Use for: article previews, product tiles, gallery cards.
 */
export interface MediaCardProps extends React.HTMLAttributes<HTMLDivElement> {
    media: React.ReactNode;
    /** Tailwind aspect utility, e.g. "aspect-video" (default) or "aspect-square". */
    aspectClassName?: string;
}
export declare const MediaCard: React.ForwardRefExoticComponent<MediaCardProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=media-card.d.ts.map