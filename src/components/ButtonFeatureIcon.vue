<template>
  <BaseButton
    v-bind="$attrs"
    class="ft-button--feature-label"
    v-on="$listeners"
  >

    <slot/>

  </BaseButton>

</template>

<script lang="ts">
import Vue from "vue"
import BaseButton from "./BaseButton.vue"

import {  
  //Account & Status 24X24 icons

  Alert24, AlertAdd24, AlertSnooze24, Archive24, ArchiveEmail24,
  Dislike24, Dont24, Favorite24, FavoriteO24, Fingerprint24, Flag24, FlagO24,
  Folder24, FolderAdd24, Grid24, GridO24, Help24, History24, Home24, HomeO24,
  Inbox24, InboxAdd24, Info24, Like24, LockClosed24, LockOpen24, Login24,
  Logout24, Menu24, Mobile24, MobileInactive24, More24, User24, UserGroup24,
  Warning24,

  //Account & Status 32X32 icons

  AccountHistory32, Alert32, AlertAdd32, Dislike32, FlagO32, Folder32, 
  FolderAdd32, Help32, History32, Home32, Inbox32, InboxAdd32, Info32, Like32,
  Logout32, Menu32, Mobile32, MobileInactive32, More32, ShoppingCart32, User32,
  UserGroup32, Warning32,

  //Action & Features 24X24 icons

  Add24, AddSml24, AtSign24, Attachment24, Bold24, Calendar24, CalendarAdd24,
  CheckboxPartial24, CheckboxSelected24, CheckboxSelectedO24, CheckboxUnselected24,
  Close24, CloseSml24, Collapse24, Compare24, Complete24, Customize24, Delete24,
  Duplicate24, Edit24, Email24, EmailAlert24, Expand24, ExpandAll24, Export24,
  Filter24, FontSize24, Gear24, Hashtag24, Italics24, JumpTo24, ListBullet24,
  ListNum24, MapPin24, Move24, Pause24, Phone24, Pin24, Play24, Print24, 
  PrintAdd24, Refresh24, Rename24, Reorder24, Resize24, ResizeWidth24, Save24,
  Search24, SearchSml24, Share24, Sort24, SortColumns24, SortRows24, Timer24,
  Underline24, Url24, ViewDetails24, ViewGrid24, ViewList24,

  //Action & Features 32X32 icons

  Add32, Bold32, Calendar32, CalendarAdd32, Close32, Collapse32, Compare32, 
  Complete32, Customize32, Delete32, Duplicate32, Edit32, Email32, Expand32,
  Filter32, FontSize32, Gear32, Italics32, JumpTo32, ListBullet32, ListNum32,
  MapPin32, Pin32, Print32, Save32, Search32, Share32, Underline32, Url32,

  //Content Properties 24X24 icons

  Book24, Code24, Doc24, DocChart24, DocEdit24, DocHeadlines24, DocInfo24,
  DocLightbulb24, DoctypeCsv24, DoctypeDoc24, DoctypeHtm24, DoctypePdf24,
  DoctypePdm24, DoctypePpt24, DoctypeRtf24, DoctypeSgm24, DoctypeXls24, News24,
  Notes24, Scroll24, Table24, Webpage24,

  //Content Properties 32X32 icons 

  BnaInsights32, BnaPicks32, Book32, BookShelf32, ChartBar32, ChartInfo32,
  ChartLineDown32, ChartLineUp32, ChartPie32, Checklist32, Doc32, DocAnnotation32,
  DocChecklist32, DocCurrency32, DocEdit32, DocFederal32, DocFlag32, DocInfo32,
  DocInternational32, DocLaws32, DocMicroscope32, DocMoney32, DocScales32, 
  DocsComparison32, DocsRelated32, Drawings32, Feedback32, FolderDocs32, Form32,
  Image32, News32, NewsTools32, NewsV232, Notepad32, Notes32, Outline32, Papers32,
  PapersChart32, PapersTools32, Scroll32, ScrollHistory32, ScrollSearch32,
  Section32, Table32, TableBuild32, Training32, Versions32, Webinar32,
  Webpage32,

  //Directional 24X24 icons

  ArrowDown24, ArrowLeft24, ArrowRight24, ArrowUp24, CaretDown24, CaretLeft24,
  CaretRight24, CaretSmlDown24, CaretSmlLeft24, CaretSmlRight24, CaretSmlUp24,
  CaretUp24, ChevronDown24, ChevronLeft24, ChevronRight24, ChevronSmlDown24,
  ChevronSmlLeft24, ChevronSmlRight24, ChevronSmlUp24, ChevronUp24,

  //Directional 32X32 icons

  ArrowDown32, ArrowLeft32, ArrowRight32, ArrowUp32, ChevronDown32, 
  ChevronLeft32, ChevronRight32, ChevronUp32,

  //Locations & Places 24X24 icons

  Company24, Congress24, FederalOffice24, Globe24, WhiteHouse24, World24,

  //Locations & Places 32X32 icons

  Company32, CompanyInfo32, Congress32, CongressHistory32, FederalOffice32,
  Globe32, StateHouse32, SupremeCourt32, Washington32, WhiteHouse32, World32,

  //Ratings & Scores 24X23 icons

  BciteCaution24, BciteDistinguish24, BciteNegative24, BciteNone24, 
  BcitePositive24, BciteSuperseded24,

  //Social Media 24X24 icons

  Facebook24, Linkedin24, Twitter24, Youtube24,

  //Social Media 32X32 icons

  Facebook32, Linkedin32, Twitter32, Youtube32,

  //Topics & Concepts 24X24 icons

  DraftingCompass24, Glasses24, Laws24, Lightbulb24, Network24, Quill24,
  Related24,

  //Topics & Concepts 32X32 icons

  Box32, Briefcase32, Calculator32, Certificate32, Compass32, Deal32,
  DealInfo32, DraftingCompass32, Environment32, Gift32, Glasses32, Guidance32,
  Health32, HelpDesk32, Judge32, Laws32, LightbulbOff32, LightbulbOn32, Merger32,
  Microscope32, Money32, Monopoly32, Network32, Quill32, QuillMoney32, Related32,
  Scales32, ScalesHistory32, SecSearch32, SecureNetwork32, Shield32, Shutter32,
  Spotlight32, ToolsDesign32, ToolsLabor32
} from "@fishtank/icons-vue"

export default Vue.extend({
  name: "ButtonFeatureIcon",
  components: {
    BaseButton,
   //Account & Status 24X24 icons

   Alert24, AlertAdd24, AlertSnooze24, Archive24, ArchiveEmail24,
   Dislike24, Dont24, Favorite24, FavoriteO24, Fingerprint24, Flag24, FlagO24,
   Folder24, FolderAdd24, Grid24, GridO24, Help24, History24, Home24, HomeO24,
   Inbox24, InboxAdd24, Info24, Like24, LockClosed24, LockOpen24, Login24,
   Logout24, Menu24, Mobile24, MobileInactive24, More24, User24, UserGroup24,
   Warning24,

   //Account & Status 32X32 icons

   AccountHistory32, Alert32, AlertAdd32, Dislike32, FlagO32, Folder32, 
   FolderAdd32, Help32, History32, Home32, Inbox32, InboxAdd32, Info32, Like32,
   Logout32, Menu32, Mobile32, MobileInactive32, More32, ShoppingCart32, User32,
   UserGroup32, Warning32,

   //Action & Features 24X24 icons

   Add24, AddSml24, AtSign24, Attachment24, Bold24, Calendar24, CalendarAdd24,
   CheckboxPartial24, CheckboxSelected24, CheckboxSelectedO24, CheckboxUnselected24,
   Close24, CloseSml24, Collapse24, Compare24, Complete24, Customize24, Delete24,
   Duplicate24, Edit24, Email24, EmailAlert24, Expand24, ExpandAll24, Export24,
   Filter24, FontSize24, Gear24, Hashtag24, Italics24, JumpTo24, ListBullet24,
   ListNum24, MapPin24, Move24, Pause24, Phone24, Pin24, Play24, Print24, 
   PrintAdd24, Refresh24, Rename24, Reorder24, Resize24, ResizeWidth24, Save24,
   Search24, SearchSml24, Share24, Sort24, SortColumns24, SortRows24, Timer24,
   Underline24, Url24, ViewDetails24, ViewGrid24, ViewList24,

   //Action & Features 32X32 icons

   Add32, Bold32, Calendar32, CalendarAdd32, Close32, Collapse32, Compare32, 
   Complete32, Customize32, Delete32, Duplicate32, Edit32, Email32, Expand32,
   Filter32, FontSize32, Gear32, Italics32, JumpTo32, ListBullet32, ListNum32,
   MapPin32, Pin32, Print32, Save32, Search32, Share32, Underline32, Url32,

   //Content Properties 24X24 icons

   Book24, Code24, Doc24, DocChart24, DocEdit24, DocHeadlines24, DocInfo24,
   DocLightbulb24, DoctypeCsv24, DoctypeDoc24, DoctypeHtm24, DoctypePdf24,
   DoctypePdm24, DoctypePpt24, DoctypeRtf24, DoctypeSgm24, DoctypeXls24, News24,
   Notes24, Scroll24, Table24, Webpage24,

   //Content Properties 32X32 icons 

   BnaInsights32, BnaPicks32, Book32, BookShelf32, ChartBar32, ChartInfo32,
    ChartLineDown32, ChartLineUp32, ChartPie32, Checklist32, Doc32, DocAnnotation32,
   DocChecklist32, DocCurrency32, DocEdit32, DocFederal32, DocFlag32, DocInfo32,
   DocInternational32, DocLaws32, DocMicroscope32, DocMoney32, DocScales32, 
   DocsComparison32, DocsRelated32, Drawings32, Feedback32, FolderDocs32, Form32,
   Image32, News32, NewsTools32, NewsV232, Notepad32, Notes32, Outline32, Papers32,
   PapersChart32, PapersTools32, Scroll32, ScrollHistory32, ScrollSearch32,
   Section32, Table32, TableBuild32, Training32, Versions32, Webinar32,
   Webpage32,

   //Directional 24X24 icons

   ArrowDown24, ArrowLeft24, ArrowRight24, ArrowUp24, CaretDown24, CaretLeft24,
   CaretRight24, CaretSmlDown24, CaretSmlLeft24, CaretSmlRight24, CaretSmlUp24,
   CaretUp24, ChevronDown24, ChevronLeft24, ChevronRight24, ChevronSmlDown24,
   ChevronSmlLeft24, ChevronSmlRight24, ChevronSmlUp24, ChevronUp24,

   //Directional 32X32 icons

   ArrowDown32, ArrowLeft32, ArrowRight32, ArrowUp32, ChevronDown32, 
   ChevronLeft32, ChevronRight32, ChevronUp32,

   //Locations & Places 24X24 icons

   Company24, Congress24, FederalOffice24, Globe24, WhiteHouse24, World24,

   //Locations & Places 32X32 icons

   Company32, CompanyInfo32, Congress32, CongressHistory32, FederalOffice32,
   Globe32, StateHouse32, SupremeCourt32, Washington32, WhiteHouse32, World32,

   //Ratings & Scores 24X23 icons

   BciteCaution24, BciteDistinguish24, BciteNegative24, BciteNone24, 
   BcitePositive24, BciteSuperseded24,

   //Social Media 24X24 icons

   Facebook24, Linkedin24, Twitter24, Youtube24,

   //Social Media 32X32 icons

   Facebook32, Linkedin32, Twitter32, Youtube32,

   //Topics & Concepts 24X24 icons

   DraftingCompass24, Glasses24, Laws24, Lightbulb24, Network24, Quill24,
   Related24,

   //Topics & Concepts 32X32 icons

   Box32, Briefcase32, Calculator32, Certificate32, Compass32, Deal32,
   DealInfo32, DraftingCompass32, Environment32, Gift32, Glasses32, Guidance32,
   Health32, HelpDesk32, Judge32, Laws32, LightbulbOff32, LightbulbOn32, Merger32,
   Microscope32, Money32, Monopoly32, Network32, Quill32, QuillMoney32, Related32,
   Scales32, ScalesHistory32, SecSearch32, SecureNetwork32, Shield32, Shutter32,
   Spotlight32, ToolsDesign32, ToolsLabor32
  },
  props:{
   
  },

  computed:{
    
  }
})
</script>
