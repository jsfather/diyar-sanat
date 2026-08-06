import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { title?: string };

function IconBase({ title, children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  );
}

export const SearchIcon = (props: IconProps) => (
  <IconBase {...props}><circle cx="11" cy="11" r="7" /><path d="m20 20-3.8-3.8" /></IconBase>
);
export const MenuIcon = (props: IconProps) => (
  <IconBase {...props}><path d="M4 7h16M4 12h16M4 17h16" /></IconBase>
);
export const SunIcon = (props: IconProps) => (
  <IconBase {...props}><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></IconBase>
);
export const MoonIcon = (props: IconProps) => (
  <IconBase {...props}><path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5 8.5 8.5 0 1 0 20.5 14.2Z" /></IconBase>
);
export const ChevronIcon = (props: IconProps) => (
  <IconBase {...props}><path d="m9 18 6-6-6-6" /></IconBase>
);
export const HomeIcon = (props: IconProps) => (
  <IconBase {...props}><path d="m3 11 9-8 9 8" /><path d="M5 10v10h14V10M9 20v-6h6v6" /></IconBase>
);
export const GridIcon = (props: IconProps) => (
  <IconBase {...props}><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></IconBase>
);
export const MapPinIcon = (props: IconProps) => (
  <IconBase {...props}><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></IconBase>
);
export const PhoneIcon = (props: IconProps) => (
  <IconBase {...props}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8.1 9.8a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.8 2.1Z" /></IconBase>
);
export const UserIcon = (props: IconProps) => (
  <IconBase {...props}><circle cx="12" cy="8" r="4" /><path d="M4 22a8 8 0 0 1 16 0" /></IconBase>
);
export const ShieldIcon = (props: IconProps) => (
  <IconBase {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-4" /></IconBase>
);
export const FlaskIcon = (props: IconProps) => (
  <IconBase {...props}><path d="M9 3h6M10 3v6l-5.5 9.5A2 2 0 0 0 6.2 21h11.6a2 2 0 0 0 1.7-2.5L14 9V3" /><path d="M8 15h8" /></IconBase>
);
export const IranIcon = (props: IconProps) => (
  <IconBase {...props}><path d="m6 5 3-2 3 2 3-1 3 4-2 2 1 4-3 1-2 5-3-3-4 1-1-4-2-2 2-3-1-3 3-2Z" /><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" /></IconBase>
);
export const HeadsetIcon = (props: IconProps) => (
  <IconBase {...props}><path d="M4 14v-2a8 8 0 0 1 16 0v2" /><path d="M4 14a2 2 0 0 1 2-2h1v6H6a2 2 0 0 1-2-2v-2ZM20 14a2 2 0 0 0-2-2h-1v6h1a2 2 0 0 0 2-2v-2ZM17 18c0 2-2 3-5 3" /></IconBase>
);
export const DropletIcon = (props: IconProps) => (
  <IconBase {...props}><path d="M12 2s7 7.2 7 13a7 7 0 1 1-14 0C5 9.2 12 2 12 2Z" /></IconBase>
);
export const GearIcon = (props: IconProps) => (
  <IconBase {...props}><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1a1.7 1.7 0 0 0 1.9.3A1.7 1.7 0 0 0 10 3v-.2h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z" /></IconBase>
);
export const BrakeIcon = (props: IconProps) => (
  <IconBase {...props}><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3" /><path d="M5.5 7.5 9 10M18.5 7.5 15 10M5.5 16.5 9 14M18.5 16.5 15 14" /></IconBase>
);
export const SnowflakeIcon = (props: IconProps) => (
  <IconBase {...props}><path d="M12 2v20M4.2 6.5l15.6 11M4.2 17.5l15.6-11M9 4l3 2 3-2M9 20l3-2 3 2M5 10l.2 3.6L2 15M22 9l-3.2 1.4L19 14" /></IconBase>
);
export const MailIcon = (props: IconProps) => (
  <IconBase {...props}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></IconBase>
);

export function CategoryIcon({ name, ...props }: IconProps & { name: string }) {
  if (name === "gear") return <GearIcon {...props} />;
  if (name === "brake") return <BrakeIcon {...props} />;
  if (name === "snowflake") return <SnowflakeIcon {...props} />;
  return <DropletIcon {...props} />;
}
