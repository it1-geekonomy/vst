declare module 'react-leaflet' {
  import { ComponentType } from 'react';
  import { LatLngExpression, Icon } from 'leaflet';

  export const MapContainer: ComponentType<{
    center: LatLngExpression;
    zoom: number;
    scrollWheelZoom?: boolean;
    style?: React.CSSProperties;
    children?: React.ReactNode;
  }>;
  
  export const TileLayer: ComponentType<{
    attribution?: string;
    url: string;
  }>;
  
  export const Marker: ComponentType<{
    position: LatLngExpression;
    icon?: Icon;
    children?: React.ReactNode;
    eventHandlers?: {
      click?: () => void;
      [key: string]: (() => void) | undefined;
    };
  }>;
  
  export const Popup: ComponentType<{
    children?: React.ReactNode;
  }>;
}

declare module 'leaflet' {
  export * from 'leaflet';
  export const icon: (options: any) => Icon;
} 