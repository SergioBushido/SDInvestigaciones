/**
 * Professional SVG Icons with sober colors and sharp angles
 * Using neutral colors that work well in both light and dark themes
 */

export const Icons = {
  // Magnifying glass / Search
  Search: (props) => (
    <svg width={props.size || "20"} height={props.size || "20"} viewBox="0 0 24 24" fill="none" stroke={props.color || "#9ca3af"} stroke-width="2.5" stroke-linecap="square" stroke-linejoin="miter" {...props}>
      <circle cx="10" cy="10" r="7"/>
      <path d="M21 21l-6-6"/>
    </svg>
  ),

  // Phone
  Phone: (props) => (
    <svg width={props.size || "20"} height={props.size || "20"} viewBox="0 0 24 24" fill="none" stroke={props.color || "#9ca3af"} stroke-width="2.5" stroke-linecap="square" stroke-linejoin="miter" {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  ),

  // Email
  Mail: (props) => (
    <svg width={props.size || "20"} height={props.size || "20"} viewBox="0 0 24 24" fill="none" stroke={props.color || "#9ca3af"} stroke-width="2.5" stroke-linecap="square" stroke-linejoin="miter" {...props}>
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="M22 7l-10 7L2 7"/>
    </svg>
  ),

  // Location / Map Pin
  MapPin: (props) => (
    <svg width={props.size || "20"} height={props.size || "20"} viewBox="0 0 24 24" fill="none" stroke={props.color || "#9ca3af"} stroke-width="2.5" stroke-linecap="square" stroke-linejoin="miter" {...props}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  ),

  // Clock / Time
  Clock: (props) => (
    <svg width={props.size || "20"} height={props.size || "20"} viewBox="0 0 24 24" fill="none" stroke={props.color || "#9ca3af"} stroke-width="2.5" stroke-linecap="square" stroke-linejoin="miter" {...props}>
      <circle cx="12" cy="12" r="10"/>
      <path d="M12 6v6l4 2"/>
    </svg>
  ),

  // Smartphone / Mobile
  Smartphone: (props) => (
    <svg width={props.size || "20"} height={props.size || "20"} viewBox="0 0 24 24" fill="none" stroke={props.color || "#9ca3af"} stroke-width="2.5" stroke-linecap="square" stroke-linejoin="miter" {...props}>
      <rect x="5" y="2" width="14" height="20" rx="2"/>
      <path d="M12 18h.01"/>
    </svg>
  ),

  // Users / People
  Users: (props) => (
    <svg width={props.size || "20"} height={props.size || "20"} viewBox="0 0 24 24" fill="none" stroke={props.color || "#9ca3af"} stroke-width="2.5" stroke-linecap="square" stroke-linejoin="miter" {...props}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),

  // Building / Office
  Building: (props) => (
    <svg width={props.size || "20"} height={props.size || "20"} viewBox="0 0 24 24" fill="none" stroke={props.color || "#9ca3af"} stroke-width="2.5" stroke-linecap="square" stroke-linejoin="miter" {...props}>
      <rect x="4" y="2" width="16" height="20" rx="2"/>
      <path d="M9 22v-4h6v4"/>
      <path d="M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01"/>
    </svg>
  ),

  // Dollar / Money
  DollarSign: (props) => (
    <svg width={props.size || "20"} height={props.size || "20"} viewBox="0 0 24 24" fill="none" stroke={props.color || "#9ca3af"} stroke-width="2.5" stroke-linecap="square" stroke-linejoin="miter" {...props}>
      <path d="M12 2v20"/>
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
    </svg>
  ),

  // Shield / Protection
  Shield: (props) => (
    <svg width={props.size || "20"} height={props.size || "20"} viewBox="0 0 24 24" fill="none" stroke={props.color || "#9ca3af"} stroke-width="2.5" stroke-linecap="square" stroke-linejoin="miter" {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  )
};
