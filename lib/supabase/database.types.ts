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
          role: "manager" | "admin" | "seo";
          phone: string | null;
          avatar_url: string | null;
          is_active: boolean;
          last_seen_at: string | null;
        };
        Insert: {
          id: string;
          display_name?: string | null;
          role?: "manager" | "admin" | "seo";
          phone?: string | null;
          avatar_url?: string | null;
          is_active?: boolean;
          last_seen_at?: string | null;
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
      countries: {
        Row: Timestamped & { id:number; code:string; slug:string; name_fa:string; name_en:string; is_published:boolean; position:number };
        Insert: { id?:never; code:string; slug:string; name_fa:string; name_en:string; is_published?:boolean; position?:number; created_at?:string; updated_at?:string };
        Update: Partial<Database["public"]["Tables"]["countries"]["Insert"]>; Relationships: [];
      };
      provinces: {
        Row: Timestamped & { id:number; country_id:number; code:string; slug:string; name_fa:string; name_en:string; map_anchor_x:number|null; map_anchor_y:number|null; is_published:boolean; position:number };
        Insert: { id?:never; country_id:number; code:string; slug:string; name_fa:string; name_en:string; map_anchor_x?:number|null; map_anchor_y?:number|null; is_published?:boolean; position?:number; created_at?:string; updated_at?:string };
        Update: Partial<Database["public"]["Tables"]["provinces"]["Insert"]>; Relationships: [];
      };
      cities: {
        Row: Timestamped & { id:number; province_id:number; slug:string; name_fa:string; name_en:string; is_published:boolean; position:number };
        Insert: { id?:never; province_id:number; slug:string; name_fa:string; name_en:string; is_published?:boolean; position?:number; created_at?:string; updated_at?:string };
        Update: Partial<Database["public"]["Tables"]["cities"]["Insert"]>; Relationships: [];
      };
      representatives: {
        Row: Timestamped & { id:number; city_id:number; slug:string; business_name_fa:string; business_name_en:string|null; manager_name_fa:string; manager_name_en:string|null; address_fa:string; address_en:string|null; phone:string; whatsapp:string|null; latitude:number|null; longitude:number|null; directions_url:string|null; is_published:boolean; position:number };
        Insert: { id?:never; city_id:number; slug:string; business_name_fa:string; business_name_en?:string|null; manager_name_fa:string; manager_name_en?:string|null; address_fa:string; address_en?:string|null; phone:string; whatsapp?:string|null; latitude?:number|null; longitude?:number|null; directions_url?:string|null; is_published?:boolean; position?:number; created_at?:string; updated_at?:string };
        Update: Partial<Database["public"]["Tables"]["representatives"]["Insert"]>; Relationships: [];
      };
      representative_applications: {
        Row: Timestamped & { id:number; tracking_code:string; locale:"fa"|"en"; full_name:string; identity_code:string; mobile:string; email:string|null; business_name:string; business_type:string; country_code:"IR"|"IQ"; region:string; city:string; address:string; experience:string; distribution_area:string; facilities:string[]; document_path:string|null; notes:string|null; consent_at:string; status:"new"|"reviewing"|"needs_information"|"approved"|"rejected"|"archived"; internal_note:string|null; reviewed_by:string|null; reviewed_at:string|null };
        Insert: { id?:never; tracking_code?:string; locale:"fa"|"en"; full_name:string; identity_code:string; mobile:string; email?:string|null; business_name:string; business_type:string; country_code:"IR"|"IQ"; region:string; city:string; address:string; experience:string; distribution_area:string; facilities?:string[]; document_path?:string|null; notes?:string|null; consent_at:string; status?:"new"|"reviewing"|"needs_information"|"approved"|"rejected"|"archived"; internal_note?:string|null; reviewed_by?:string|null; reviewed_at?:string|null; created_at?:string; updated_at?:string };
        Update: Partial<Database["public"]["Tables"]["representative_applications"]["Insert"]>; Relationships: [];
      };
      media_categories: {
        Row: Timestamped & {id:number;code:string;name_fa:string;name_en:string;slug_fa:string;slug_en:string;is_published:boolean;position:number}; Insert:{id?:never;code:string;name_fa:string;name_en:string;slug_fa:string;slug_en:string;is_published?:boolean;position?:number;created_at?:string;updated_at?:string}; Update:Partial<Database["public"]["Tables"]["media_categories"]["Insert"]>;Relationships:[];
      };
      editorial_entries: {
        Row: Timestamped & {id:number;category_id:number|null;kind:"news"|"article"|"guide";cover_image_url:string|null;video_url:string|null;cta_url:string|null;is_featured:boolean;is_published:boolean;published_at:string|null;position:number;created_by:string|null;updated_by:string|null}; Insert:{id?:never;category_id?:number|null;kind:"news"|"article"|"guide";cover_image_url?:string|null;video_url?:string|null;cta_url?:string|null;is_featured?:boolean;is_published?:boolean;published_at?:string|null;position?:number;created_by?:string|null;updated_by?:string|null;created_at?:string;updated_at?:string};Update:Partial<Database["public"]["Tables"]["editorial_entries"]["Insert"]>;Relationships:[];
      };
      editorial_translations: {
        Row:Timestamped & {id:number;entry_id:number;locale:"fa"|"en";title:string;slug:string;excerpt:string|null;body_markdown:string;content_blocks:Json;cta_label:string|null;seo_title:string|null;seo_description:string|null};Insert:{id?:never;entry_id:number;locale:"fa"|"en";title:string;slug:string;excerpt?:string|null;body_markdown?:string;content_blocks?:Json;cta_label?:string|null;seo_title?:string|null;seo_description?:string|null;created_at?:string;updated_at?:string};Update:Partial<Database["public"]["Tables"]["editorial_translations"]["Insert"]>;Relationships:[];
      };
      certificates:{Row:Timestamped&{id:number;code:string;title_fa:string;title_en:string;issuer_fa:string|null;issuer_en:string|null;certificate_number:string;document_url:string|null;image_url:string|null;is_published:boolean;position:number;issued_at:string|null;expires_at:string|null};Insert:{id?:never;code:string;title_fa:string;title_en:string;issuer_fa?:string|null;issuer_en?:string|null;certificate_number:string;document_url?:string|null;image_url?:string|null;is_published?:boolean;position?:number;issued_at?:string|null;expires_at?:string|null;created_at?:string;updated_at?:string};Update:Partial<Database["public"]["Tables"]["certificates"]["Insert"]>;Relationships:[]};
      gallery_albums:{Row:Timestamped&{id:number;slug:string;title_fa:string;title_en:string;description_fa:string|null;description_en:string|null;cover_url:string|null;is_published:boolean;position:number};Insert:{id?:never;slug:string;title_fa:string;title_en:string;description_fa?:string|null;description_en?:string|null;cover_url?:string|null;is_published?:boolean;position?:number;created_at?:string;updated_at?:string};Update:Partial<Database["public"]["Tables"]["gallery_albums"]["Insert"]>;Relationships:[]};
      gallery_items:{Row:Timestamped&{id:number;album_id:number;media_type:"image"|"video";file_url:string;alt_fa:string;alt_en:string;caption_fa:string|null;caption_en:string|null;is_published:boolean;position:number};Insert:{id?:never;album_id:number;media_type:"image"|"video";file_url:string;alt_fa:string;alt_en:string;caption_fa?:string|null;caption_en?:string|null;is_published?:boolean;position?:number;created_at?:string;updated_at?:string};Update:Partial<Database["public"]["Tables"]["gallery_items"]["Insert"]>;Relationships:[]};
      media_assets:{Row:Timestamped&{id:number;asset_type:"image"|"video"|"document"|"catalog";title_fa:string;title_en:string;description_fa:string|null;description_en:string|null;file_url:string;thumbnail_url:string|null;mime_type:string|null;is_public:boolean;downloadable:boolean;created_by:string|null};Insert:{id?:never;asset_type:"image"|"video"|"document"|"catalog";title_fa:string;title_en:string;description_fa?:string|null;description_en?:string|null;file_url:string;thumbnail_url?:string|null;mime_type?:string|null;is_public?:boolean;downloadable?:boolean;created_by?:string|null;created_at?:string;updated_at?:string};Update:Partial<Database["public"]["Tables"]["media_assets"]["Insert"]>;Relationships:[]};
      job_positions:{Row:Timestamped&{id:number;slug:string;department:string;employment_type:"full-time"|"part-time"|"contract"|"internship";location_fa:string;location_en:string;title_fa:string;title_en:string;summary_fa:string|null;summary_en:string|null;description_fa:string;description_en:string;requirements_fa:string|null;requirements_en:string|null;is_published:boolean;published_at:string|null;closes_at:string|null;position:number};Insert:{id?:never;slug:string;department:string;employment_type:"full-time"|"part-time"|"contract"|"internship";location_fa:string;location_en:string;title_fa:string;title_en:string;summary_fa?:string|null;summary_en?:string|null;description_fa:string;description_en:string;requirements_fa?:string|null;requirements_en?:string|null;is_published?:boolean;published_at?:string|null;closes_at?:string|null;position?:number;created_at?:string;updated_at?:string};Update:Partial<Database["public"]["Tables"]["job_positions"]["Insert"]>;Relationships:[]};
      job_applications:{Row:Timestamped&{id:number;tracking_code:string;job_id:number|null;locale:"fa"|"en";full_name:string;mobile:string;email:string;expertise:string;resume_url:string;note:string|null;consent_at:string;status:"new"|"reviewing"|"shortlisted"|"interview"|"rejected"|"hired"|"archived";internal_note:string|null;reviewed_by:string|null;reviewed_at:string|null};Insert:{id?:never;tracking_code:string;job_id?:number|null;locale:"fa"|"en";full_name:string;mobile:string;email:string;expertise:string;resume_url:string;note?:string|null;consent_at:string;status?:"new"|"reviewing"|"shortlisted"|"interview"|"rejected"|"hired"|"archived";internal_note?:string|null;reviewed_by?:string|null;reviewed_at?:string|null;created_at?:string;updated_at?:string};Update:Partial<Database["public"]["Tables"]["job_applications"]["Insert"]>;Relationships:[]};
      contact_submissions:{Row:Timestamped&{id:number;tracking_code:string;locale:"fa"|"en";full_name:string;mobile:string;email:string;subject:string;destination:"sales"|"technical"|"hr"|"pr";message:string;attachment_path:string|null;consent_at:string;status:"new"|"reviewing"|"answered"|"archived";internal_note:string|null;reviewed_by:string|null;reviewed_at:string|null};Insert:{id?:never;tracking_code:string;locale:"fa"|"en";full_name:string;mobile:string;email:string;subject:string;destination:"sales"|"technical"|"hr"|"pr";message:string;attachment_path?:string|null;consent_at:string;status?:"new"|"reviewing"|"answered"|"archived";internal_note?:string|null;reviewed_by?:string|null;reviewed_at?:string|null;created_at?:string;updated_at?:string};Update:Partial<Database["public"]["Tables"]["contact_submissions"]["Insert"]>;Relationships:[]};
      international_inquiries:{Row:Timestamped&{id:number;tracking_code:string;locale:"fa"|"en";company_name:string;country:string;website:string|null;business_field:string;import_distribution_experience:string;interested_products:string;estimated_volume:string|null;cooperation_type:"distribution"|"representation"|"contract_manufacturing"|"other";company_profile_path:string;consent_at:string;status:"new"|"reviewing"|"needs_information"|"approved"|"rejected"|"archived";internal_note:string|null;reviewed_by:string|null;reviewed_at:string|null};Insert:{id?:never;tracking_code:string;locale:"fa"|"en";company_name:string;country:string;website?:string|null;business_field:string;import_distribution_experience:string;interested_products:string;estimated_volume?:string|null;cooperation_type:"distribution"|"representation"|"contract_manufacturing"|"other";company_profile_path:string;consent_at:string;status?:"new"|"reviewing"|"needs_information"|"approved"|"rejected"|"archived";internal_note?:string|null;reviewed_by?:string|null;reviewed_at?:string|null;created_at?:string;updated_at?:string};Update:Partial<Database["public"]["Tables"]["international_inquiries"]["Insert"]>;Relationships:[]};
      navigation_items:{Row:Timestamped&{id:number;code:string;label_fa:string;label_en:string;href:string;location:"header"|"footer"|"both";parent_id:number|null;position:number;is_published:boolean};Insert:{id?:never;code:string;label_fa:string;label_en:string;href:string;location?:"header"|"footer"|"both";parent_id?:number|null;position?:number;is_published?:boolean;created_at?:string;updated_at?:string};Update:Partial<Database["public"]["Tables"]["navigation_items"]["Insert"]>;Relationships:[]};
      site_translations:{Row:Timestamped&{id:number;namespace:string;translation_key:string;locale:"fa"|"en";value:string;description:string|null};Insert:{id?:never;namespace:string;translation_key:string;locale:"fa"|"en";value:string;description?:string|null;created_at?:string;updated_at?:string};Update:Partial<Database["public"]["Tables"]["site_translations"]["Insert"]>;Relationships:[]};
      product_images:{Row:Timestamped&{id:number;product_id:number;file_url:string;alt_fa:string;alt_en:string;is_primary:boolean;position:number};Insert:{id?:never;product_id:number;file_url:string;alt_fa:string;alt_en:string;is_primary?:boolean;position?:number;created_at?:string;updated_at?:string};Update:Partial<Database["public"]["Tables"]["product_images"]["Insert"]>;Relationships:[]};
      product_features:{Row:Timestamped&{id:number;product_id:number;icon_key:string;title_fa:string;title_en:string;description_fa:string|null;description_en:string|null;position:number};Insert:{id?:never;product_id:number;icon_key:string;title_fa:string;title_en:string;description_fa?:string|null;description_en?:string|null;position?:number;created_at?:string;updated_at?:string};Update:Partial<Database["public"]["Tables"]["product_features"]["Insert"]>;Relationships:[]};
      product_applications:{Row:Timestamped&{id:number;product_id:number;title_fa:string;title_en:string;description_fa:string|null;description_en:string|null;position:number};Insert:{id?:never;product_id:number;title_fa:string;title_en:string;description_fa?:string|null;description_en?:string|null;position?:number;created_at?:string;updated_at?:string};Update:Partial<Database["public"]["Tables"]["product_applications"]["Insert"]>;Relationships:[]};
      product_downloads:{Row:Timestamped&{id:number;product_id:number;file_url:string;title_fa:string;title_en:string;file_type:"catalog"|"datasheet"|"certificate"|"manual"|"other";position:number};Insert:{id?:never;product_id:number;file_url:string;title_fa:string;title_en:string;file_type?:"catalog"|"datasheet"|"certificate"|"manual"|"other";position?:number;created_at?:string;updated_at?:string};Update:Partial<Database["public"]["Tables"]["product_downloads"]["Insert"]>;Relationships:[]};
      site_settings:{Row:Timestamped&{id:boolean;site_title_fa:string;site_title_en:string;site_description_fa:string;site_description_en:string;header_logo_url:string|null;admin_logo_url:string|null;login_logo_url:string|null;favicon_url:string|null;google_site_verification:string|null;default_og_image_url:string|null;updated_by:string|null};Insert:{id?:boolean;site_title_fa?:string;site_title_en?:string;site_description_fa?:string;site_description_en?:string;header_logo_url?:string|null;admin_logo_url?:string|null;login_logo_url?:string|null;favicon_url?:string|null;google_site_verification?:string|null;default_og_image_url?:string|null;updated_by?:string|null;created_at?:string;updated_at?:string};Update:Partial<Database["public"]["Tables"]["site_settings"]["Insert"]>;Relationships:[]};
      homepage_hero_slides:{Row:Timestamped&{id:number;image_url:string;alt_fa:string;alt_en:string;kicker_fa:string;kicker_en:string;title_fa:string;title_en:string;subtitle_fa:string|null;subtitle_en:string|null;description_fa:string|null;description_en:string|null;primary_label_fa:string|null;primary_label_en:string|null;primary_href:string;secondary_label_fa:string|null;secondary_label_en:string|null;secondary_href:string|null;position:number;is_published:boolean};Insert:{id?:never;image_url:string;alt_fa:string;alt_en:string;kicker_fa:string;kicker_en:string;title_fa:string;title_en:string;subtitle_fa?:string|null;subtitle_en?:string|null;description_fa?:string|null;description_en?:string|null;primary_label_fa?:string|null;primary_label_en?:string|null;primary_href?:string;secondary_label_fa?:string|null;secondary_label_en?:string|null;secondary_href?:string|null;position?:number;is_published?:boolean;created_at?:string;updated_at?:string};Update:Partial<Database["public"]["Tables"]["homepage_hero_slides"]["Insert"]>;Relationships:[]};
      homepage_video:{Row:Timestamped&{id:boolean;video_url:string|null;cover_url:string|null;title_fa:string;title_en:string;subtitle_fa:string|null;subtitle_en:string|null;description_fa:string|null;description_en:string|null;is_published:boolean};Insert:{id?:boolean;video_url?:string|null;cover_url?:string|null;title_fa?:string;title_en?:string;subtitle_fa?:string|null;subtitle_en?:string|null;description_fa?:string|null;description_en?:string|null;is_published?:boolean;created_at?:string;updated_at?:string};Update:Partial<Database["public"]["Tables"]["homepage_video"]["Insert"]>;Relationships:[]};
      faq_items:{Row:Timestamped&{id:number;category_fa:string;category_en:string;question_fa:string;question_en:string;answer_fa:string;answer_en:string;position:number;is_published:boolean};Insert:{id?:never;category_fa:string;category_en:string;question_fa:string;question_en:string;answer_fa:string;answer_en:string;position?:number;is_published?:boolean;created_at?:string;updated_at?:string};Update:Partial<Database["public"]["Tables"]["faq_items"]["Insert"]>;Relationships:[]};
      seo_settings:{Row:Timestamped&{id:number;route:string;locale:"fa"|"en";title:string;description:string;canonical_url:string|null;robots_index:boolean;robots_follow:boolean;og_image_url:string|null;structured_data:Json};Insert:{id?:never;route:string;locale:"fa"|"en";title:string;description:string;canonical_url?:string|null;robots_index?:boolean;robots_follow?:boolean;og_image_url?:string|null;structured_data?:Json;created_at?:string;updated_at?:string};Update:Partial<Database["public"]["Tables"]["seo_settings"]["Insert"]>;Relationships:[]};
      admin_settings: {
        Row: Timestamped & { id: boolean; login_method: "password" | "sms" | "both"; sms_provider: "kavenegar" | "sms_ir" | "ippanel" | null; sms_sender: string | null; sms_template_key: string | null; otp_ttl_seconds: number; otp_resend_seconds: number; require_captcha: boolean; updated_by: string | null };
        Insert: { id?: boolean; login_method?: "password" | "sms" | "both"; sms_provider?: "kavenegar" | "sms_ir" | "ippanel" | null; sms_sender?: string | null; sms_template_key?: string | null; otp_ttl_seconds?: number; otp_resend_seconds?: number; require_captcha?: boolean; updated_by?: string | null; created_at?: string; updated_at?: string };
        Update: Partial<Database["public"]["Tables"]["admin_settings"]["Insert"]>;
        Relationships: [];
      };
      staff_login_events: {
        Row: { id: number; user_id: string | null; identifier_hint: string | null; event_type: "password_success" | "password_failure" | "otp_requested" | "otp_success" | "otp_failure" | "signed_out" | "blocked"; provider: "password" | "kavenegar" | "sms_ir" | "ippanel" | null; ip_hash: string | null; user_agent: string | null; created_at: string };
        Insert: { id?: never; user_id?: string | null; identifier_hint?: string | null; event_type: "password_success" | "password_failure" | "otp_requested" | "otp_success" | "otp_failure" | "signed_out" | "blocked"; provider?: "password" | "kavenegar" | "sms_ir" | "ippanel" | null; ip_hash?: string | null; user_agent?: string | null; created_at?: string };
        Update: Partial<Database["public"]["Tables"]["staff_login_events"]["Insert"]>;
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};
