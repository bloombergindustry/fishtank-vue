# Fish Tank Content Loaders

&nbsp; 

### Table Of Contents

- [Usage](#usage)
    - [How to Import Content Loader Component](#how-to-import-content-loader-component)
    - [How to Export Content Loader Component](#how-to-export-content-loader-component)
- [The Content Loader Component](#the-content-loader-component)
    - [Alert List Theme ](#alert-list-theme)
    - [Alert Result Theme ](#alert-result-theme)
    - [Calendar Result Theme ](#calendar-result-theme)
    - [Commitee Result Theme ](#commitee-result-theme)
    - [Directories Result Theme ](#directories-result-theme)
    - [Legislation List Theme](#legislation-list-theme)
    - [Legislation Result Theme](#legislation-result-theme)
    - [Members Of Congress List Theme](#members-of-congress-list-theme)
    - [Members Of Congress Result Theme](#members-of-congress-result-theme)
    - [News List Theme](#news-list-theme)
    - [News Result Theme](#news-result-theme)
    - [Profile Result Theme](#profile-result-theme)
    - [Congressional Staffers List Theme](#congressional-staffers-list-theme)

# Usage
See the examples below to learn how to import and export your Content Loader Component.

&nbsp;

## How to Import Content Loader Component

&nbsp;

Simply add ' Loader Content ' to your list of imported components from ' @fishtank/fishtank-vue '.

```js
import { LoaderContent } from '@fishtank/fishtank-vue'
```

&nbsp;

## How to Export Content Loader Component

&nbsp;

After importing ' Loader Content', simply add it to your list of components within your export class.
```js
export default Vue.extend({
    components:{
        Loader Content
    },
})
```

&nbsp;

# The Content Loader Component

&nbsp;

The Content Loader component is a fully customizable animated svg placeholder for loading content. It comes ready to use with 13 pre-made themes with customizable props such as colors, animation speeds, heights, and widths. In addition to the pre-made themes, users have the option to fully customize their own content loader and use it to create unique svg loaders by adding their own custom shapes.

See [Usage](#usage) for steps on how to enable button components for usage in your template. The following sub-sections describe each of the content loader component's themes, how to customize your own theme, and the component's props.

&nbsp;

## Alert List Theme

&nbsp;

<img src="../../assets/ft-loader-content-alert-list.png" width="40%" alt="Fish Tank Alert List Content Loader" >

&nbsp;

```xml
    <LoaderContent theme="AlertList"/>
```
##### See [Usage](#usage) section for an explanation on how to enable this component in your template.

&nbsp;

## Alert Result Theme

&nbsp;

<img src="../../assets/ft-loader-content-alert-result.png" width="40%" alt="Fish Tank Alert Result Content Loader" >

&nbsp;

```xml
    <LoaderContent theme="AlertResult"/>
```
##### See [Usage](#usage) section for an explanation on how to enable this component in your template.

&nbsp;

## Calendar Result Theme

&nbsp;

<img src="../../assets/ft-loader-content-calendar-result.png" width="40%" alt="Fish Tank Calendar Result Content Loader" >

&nbsp;

```xml
    <LoaderContent theme="CalendarResult"/>
```
##### See [Usage](#usage) section for an explanation on how to enable this component in your template.

&nbsp;

## Commitee Result Theme

&nbsp;

<img src="../../assets/ft-loader-content-commitee-result.png" width="40%" alt="Fish Tank Commitee Result Content Loader" >

&nbsp;

```xml
    <LoaderContent theme="CommiteeResult"/>
```
##### See [Usage](#usage) section for an explanation on how to enable this component in your template.

&nbsp;

## Directories Result Theme

&nbsp;

<img src="../../assets/ft-loader-content-directories-result.png" width="40%" alt="Fish Tank Directories Result Content Loader" >

&nbsp;

```xml
    <LoaderContent theme="DirectoriesResult"/>
```
##### See [Usage](#usage) section for an explanation on how to enable this component in your template.

&nbsp;

## Legislation List Theme

&nbsp;

<img src="../../assets/ft-loader-content-Legislation-list.png" width="40%" alt="Fish Tank Legislation List Content Loader" >

&nbsp;

```xml
    <LoaderContent theme="LegislationList"/>
```
##### See [Usage](#usage) section for an explanation on how to enable this component in your template.

&nbsp;

## Legislation Result Theme

&nbsp;

<img src="../../assets/ft-loader-content-Legislation-result.png" width="40%" alt="Fish Tank Legislation Result Content Loader" >

&nbsp;

```xml
    <LoaderContent theme="LegislationResult"/>
```
##### See [Usage](#usage) section for an explanation on how to enable this component in your template.

&nbsp;

## Members Of Congress List Theme

&nbsp;

<img src="../../assets/ft-loader-content-members-of-congress-list.png" width="40%" alt="Fish Tank Members Of Congress List Content Loader" >

&nbsp;

```xml
    <LoaderContent theme="MembersOfCongressList"/>
```
##### See [Usage](#usage) section for an explanation on how to enable this component in your template.

&nbsp;

## Members Of Congress Result Theme

&nbsp;

<img src="../../assets/ft-loader-content-members-of-congress-result.png" width="40%" alt="Fish Tank Members Of Congress Result Content Loader" >

&nbsp;

```xml
    <LoaderContent theme="MembersOfCongressResult"/>
```
##### See [Usage](#usage) section for an explanation on how to enable this component in your template.

&nbsp;

## News List Theme

&nbsp;

<img src="../../assets/ft-loader-content-news-list.png" width="40%" alt="Fish Tank News List Content Loader" >

&nbsp;

```xml
    <LoaderContent theme="NewsList"/>
```
##### See [Usage](#usage) section for an explanation on how to enable this component in your template.

&nbsp;

## News Result Theme

&nbsp;

<img src="../../assets/ft-loader-content-news-result.png" width="40%" alt="Fish Tank News Result Content Loader" >

&nbsp;

```xml
    <LoaderContent theme="NewsResult"/>
```
##### See [Usage](#usage) section for an explanation on how to enable this component in your template.

&nbsp;

## Profile Result Theme

&nbsp;

<img src="../../assets/ft-loader-content-profile-result.png" width="40%" alt="Fish Tank Profile Result Content Loader" >

&nbsp;

```xml
    <LoaderContent theme="ProfileResult"/>
```
##### See [Usage](#usage) section for an explanation on how to enable this component in your template.

&nbsp;

## Congressional Staffers List Theme

&nbsp;

<img src="../../assets/ft-loader-content-congressional-staffers-list.png" width="40%" alt="Fish Tank Congressional Staffers List Content Loader" >

&nbsp;

```xml
    <LoaderContent theme="StaffersList"/>
```
##### See [Usage](#usage) section for an explanation on how to enable this component in your template.

&nbsp;

## Custom Content Loader

&nbsp;

<img src="../../assets/ft-loader-content-customized.png" width="40%" alt="Fish Tank Customizable Content Loader">

&nbsp;

```xml
    <LoaderContent
          :loader-height = "100" 
          :loader-width = "400"
          :loader-speed = "1.5"
          loader-primary-color = "#0018Ab" 
          loader-secondary-color = "#9933CC"
        >

          <rect 
            x="0" 
            y="12" 
            rx="5" 
            ry="0" 
            width="400" 
            height="24" 
          />

          <rect 
            x="0" 
            y="42" 
            rx="5" 
            ry="0" 
            width="156" 
            height="18" 
          />

        </LoaderContent>
```
##### See [Usage](#usage) section for an explanation on how to enable this component in your template.




## Props