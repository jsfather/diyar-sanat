export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

type Timestamped = {
  created_at: string;
  updated_at: string;
};

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: Timestamped & {
          id: string;
          display_name: string | null;
          role: "admin" | "editor" | "viewer";
        };
        Insert: {
          id: string;
          display_name?: string | null;
          role?: "admin" | "editor" | "viewer";
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["profiles"]["Insert"]>;
        Relationships: [];
      };
      brands: {
        Row: Timestamped & {
          id: number;
          code: string;
          is_published: boolean;
          position: number;
        };
        Insert: {
          id?: never;
          code: string;
          is_published?: boolean;
          position?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["brands"]["Insert"]>;
        Relationships: [];
      };
      brand_translations: {
        Row: Timestamped & {
          id: number;
          brand_id: number;
          locale: "fa" | "en";
          name: string;
          description: string | null;
          slug: string;
        };
        Insert: {
          id?: never;
          brand_id: number;
          locale: "fa" | "en";
          name: string;
          description?: string | null;
          slug: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["brand_translations"]["Insert"]>;
        Relationships: [];
      };
      product_categories: {
        Row: Timestamped & {
          id: number;
          brand_id: number;
          code: string;
          icon_key: string;
          accent_color: string;
          is_published: boolean;
          position: number;
        };
        Insert: {
          id?: never;
          brand_id: number;
          code: string;
          icon_key: string;
          accent_color?: string;
          is_published?: boolean;
          position?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["product_categories"]["Insert"]>;
        Relationships: [];
      };
      product_category_translations: {
        Row: Timestamped & {
          id: number;
          category_id: number;
          locale: "fa" | "en";
          name: string;
          description: string | null;
          slug: string;
          seo_title: string | null;
          seo_description: string | null;
        };
        Insert: {
          id?: never;
          category_id: number;
          locale: "fa" | "en";
          name: string;
          description?: string | null;
          slug: string;
          seo_title?: string | null;
          seo_description?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["product_category_translations"]["Insert"]>;
        Relationships: [];
      };
      products: {
        Row: Timestamped & {
          id: number;
          brand_id: number;
          category_id: number;
          sku: string | null;
          image_url: string | null;
          datasheet_url: string | null;
          is_featured: boolean;
          is_published: boolean;
          position: number;
          published_at: string | null;
        };
        Insert: {
          id?: never;
          brand_id: number;
          category_id: number;
          sku?: string | null;
          image_url?: string | null;
          datasheet_url?: string | null;
          is_featured?: boolean;
          is_published?: boolean;
          position?: number;
          published_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["products"]["Insert"]>;
        Relationships: [];
      };
      product_translations: {
        Row: Timestamped & {
          id: number;
          product_id: number;
          locale: "fa" | "en";
          name: string;
          short_description: string | null;
          description: string | null;
          key_specification: string | null;
          slug: string;
          seo_title: string | null;
          seo_description: string | null;
        };
        Insert: {
          id?: never;
          product_id: number;
          locale: "fa" | "en";
          name: string;
          short_description?: string | null;
          description?: string | null;
          key_specification?: string | null;
          slug: string;
          seo_title?: string | null;
          seo_description?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["product_translations"]["Insert"]>;
        Relationships: [];
      };
      product_specifications: {
        Row: Timestamped & {
          id: number;
          product_id: number;
          locale: "fa" | "en";
          label: string;
          value: string;
          position: number;
        };
        Insert: {
          id?: never;
          product_id: number;
          locale: "fa" | "en";
          label: string;
          value: string;
          position?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["product_specifications"]["Insert"]>;
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};
