<template >

  <ContentLoader 
    v-if="theme === 'AlertList'"
    :height="92"
    :width="400"
    :speed="loaderSpeed"
    :primary-color="loaderPrimaryColor"
    :secondary-color="loaderSecondaryColor"
  >
    <rect 
      x="0" 
      y="12" 
      rx="0" 
      ry="0" 
      width="191" 
      height="12" 
    /> 
    <rect 
      x="0" 
      y="40" 
      rx="0" 
      ry="0" 
      width="400" 
      height="16" 
    /> 
    <rect 
      x="270" 
      y="12" 
      rx="0" 
      ry="0" 
      width="132" 
      height="12" 
    /> 
    <rect 
      x="0" 
      y="64" 
      rx="0" 
      ry="0" 
      width="364" 
      height="16" 
    />
    <rect 
      x="0" 
      y="91" 
      rx="0" 
      ry="0" 
      width="400" 
      height="1" 
    />

  </ContentLoader>

  <ContentLoader
    v-else-if="theme === 'AlertResult'"
    :height="544"
    :width="340"
    :speed="loaderSpeed"
    :primary-color="loaderPrimaryColor"
    :secondary-color="loaderSecondaryColor"
  >
    
    <rect 
      x="0" 
      y="12" 
      rx="5" 
      ry="0" 
      width="170" 
      height="16" 
    /> 
    <rect 
      x="0" 
      y="36" 
      rx="5" 
      ry="0" 
      width="340" 
      height="36" 
    />
    <rect 
      x="0" 
      y="84" 
      rx="5" 
      ry="0" 
      width="340" 
      height="36" 
    />
    <rect 
      x="0" 
      y="132" 
      rx="5" 
      ry="0" 
      width="258" 
      height="36" 
    />
    <rect 
      x="0" 
      y="204" 
      rx="5" 
      ry="0" 
      width="150" 
      height="12" 
    />
    <rect 
      x="0" 
      y="220" 
      rx="5" 
      ry="0" 
      width="150" 
      height="12" 
    />
    <rect 
      x="0" 
      y="236" 
      rx="5" 
      ry="0" 
      width="150" 
      height="12" 
    />
    <rect 
      x="0" 
      y="268" 
      rx="5" 
      ry="0" 
      width="340" 
      height="16" 
    />
    <rect 
      x="0" 
      y="292" 
      rx="5" 
      ry="0" 
      width="320" 
      height="16" 
    />
    <rect 
      x="0" 
      y="316" 
      rx="5" 
      ry="0" 
      width="340" 
      height="16" 
    />
    <rect 
      x="0" 
      y="340" 
      rx="5" 
      ry="0" 
      width="320" 
      height="16" 
    />
    <rect 
      x="0" 
      y="364" 
      rx="5" 
      ry="0" 
      width="340" 
      height="16" 
    />
    <rect 
      x="0" 
      y="386" 
      rx="5" 
      ry="0" 
      width="320" 
      height="16" 
    />
    <rect 
      x="0" 
      y="410" 
      rx="5" 
      ry="0" 
      width="340" 
      height="16" 
    />
    <rect 
      x="0" 
      y="434" 
      rx="5" 
      ry="0" 
      width="320" 
      height="16" 
    />
    <rect 
      x="0" 
      y="456" 
      rx="5" 
      ry="0" 
      width="340" 
      height="16" 
    />
    <rect 
      x="0" 
      y="480" 
      rx="5" 
      ry="0" 
      width="320" 
      height="16" 
    />
    <rect 
      x="0" 
      y="504" 
      rx="5" 
      ry="0" 
      width="340" 
      height="16" 
    />
    <rect 
      x="0" 
      y="528" 
      rx="5" 
      ry="0" 
      width="320" 
      height="16" 
    />

    
  </ContentLoader>

  <ContentLoader
    v-else-if="theme === 'CalendarResult'"
    :height="588"
    :width="340"
    :speed="loaderSpeed"
    :primary-color="loaderPrimaryColor"
    :secondary-color="loaderSecondaryColor"
  >
    
    <rect 
      x="0" 
      y="12" 
      rx="5" 
      ry="0" 
      width="170" 
      height="24" 
    />
    <rect 
      x="0" 
      y="48" 
      rx="5" 
      ry="0" 
      width="340" 
      height="36" 
    /> 
    <rect 
      x="0" 
      y="96" 
      rx="5" 
      ry="0" 
      width="340" 
      height="36" 
    />
    <rect 
      x="0" 
      y="144" 
      rx="5" 
      ry="0" 
      width="257" 
      height="36" 
    />
    <rect 
      x="0" 
      y="216" 
      rx="5" 
      ry="0" 
      width="170" 
      height="40" 
    /> 
    <rect 
      x="0" 
      y="272" 
      rx="5" 
      ry="0" 
      width="340" 
      height="16" 
    />
    <rect 
      x="0" 
      y="296" 
      rx="5" 
      ry="0" 
      width="320" 
      height="16" 
    />
    <rect 
      x="0" 
      y="320" 
      rx="5" 
      ry="0" 
      width="340" 
      height="16" 
    />
    <rect 
      x="0" 
      y="344" 
      rx="5" 
      ry="0" 
      width="320" 
      height="16" 
    />
    <rect 
      x="0" 
      y="368" 
      rx="5" 
      ry="0" 
      width="340" 
      height="16" 
    /> 
    <rect 
      x="0" 
      y="420" 
      rx="5" 
      ry="0" 
      width="171" 
      height="40" 
    /> 
    <rect 
      x="0" 
      y="476" 
      rx="5" 
      ry="0" 
      width="340" 
      height="16" 
    /> 
    <rect 
      x="0" 
      y="500" 
      rx="5" 
      ry="0" 
      width="320" 
      height="16" 
    /> 
    <rect 
      x="0" 
      y="524" 
      rx="5" 
      ry="0" 
      width="340" 
      height="16" 
    />
    <rect 
      x="0" 
      y="548" 
      rx="5" 
      ry="0" 
      width="320" 
      height="16" 
    />  
    <rect 
      x="0" 
      y="572" 
      rx="5" 
      ry="0" 
      width="340" 
      height="16" 
    />  
    
    
  </ContentLoader>

  <ContentLoader
    v-else-if="theme === 'CommiteeResult'"
    :height="498"
    :width="340"
    :speed="loaderSpeed"
    :primary-color="loaderPrimaryColor"
    :secondary-color="loaderSecondaryColor"
  >
    
    <rect 
      x="0" 
      y="0" 
      rx="5" 
      ry="0" 
      width="340" 
      height="78" 
    />

    <rect 
      x="0" 
      y="102" 
      rx="5" 
      ry="0" 
      width="171" 
      height="40" 
    /> 

    <rect 
      x="0" 
      y="154" 
      rx="5" 
      ry="0" 
      width="130" 
      height="16" 
    /> 

    <rect 
      x="0" 
      y="184" 
      rx="5" 
      ry="0" 
      width="32" 
      height="40" 
    /> 

    <rect 
      x="60" 
      y="192" 
      rx="5" 
      ry="0" 
      width="108" 
      height="24" 
    />

    <rect 
      x="211" 
      y="196" 
      rx="5" 
      ry="0" 
      width="70" 
      height="16" 
    />

    <rect 
      x="289" 
      y="196" 
      rx="5" 
      ry="0" 
      width="51" 
      height="16" 
    />

    <rect 
      x="0" 
      y="242" 
      rx="5" 
      ry="0" 
      width="130" 
      height="16" 
    />

    <rect 
      x="0" 
      y="272" 
      rx="5" 
      ry="0" 
      width="32" 
      height="40" 
    />

    <rect 
      x="60" 
      y="280" 
      rx="5" 
      ry="0" 
      width="108" 
      height="24" 
    />

    <rect 
      x="211" 
      y="284" 
      rx="5" 
      ry="0" 
      width="70" 
      height="16" 
    />

    <rect 
      x="289" 
      y="284" 
      rx="5" 
      ry="0" 
      width="51" 
      height="16" 
    />

    <rect 
      x="0" 
      y="336" 
      rx="5" 
      ry="0" 
      width="171" 
      height="40" 
    />

    <rect 
      x="0" 
      y="388" 
      rx="5" 
      ry="0" 
      width="130" 
      height="16" 
    />

    <rect 
      x="0" 
      y="418" 
      rx="5" 
      ry="0" 
      width="32" 
      height="40" 
    />

    <rect 
      x="60" 
      y="426" 
      rx="5" 
      ry="0" 
      width="108" 
      height="24" 
    />

    <rect 
      x="60" 
      y="426" 
      rx="5" 
      ry="0" 
      width="108" 
      height="24" 
    />

    <rect 
      x="211" 
      y="430" 
      rx="5" 
      ry="0" 
      width="70" 
      height="16" 
    />

    <rect 
      x="289" 
      y="430" 
      rx="5" 
      ry="0" 
      width="51" 
      height="16" 
    />

    <rect 
      x="0" 
      y="470" 
      rx="5" 
      ry="0" 
      width="32" 
      height="40" 
    />
    
    <rect 
      x="60" 
      y="478" 
      rx="5" 
      ry="0" 
      width="108" 
      height="24" 
    />

    <rect 
      x="211" 
      y="482" 
      rx="5" 
      ry="0" 
      width="70" 
      height="16" 
    />

    <rect 
      x="289" 
      y="482" 
      rx="5" 
      ry="0" 
      width="51" 
      height="16" 
    />

  </ContentLoader>

  <ContentLoader
    v-else-if="theme === 'DirectoriesResult'"
    :height="504"
    :width="400"
    :speed="loaderSpeed"
    :primary-color="loaderPrimaryColor"
    :secondary-color="loaderSecondaryColor"
  >
    
    <rect 
      x="0" 
      y="0" 
      rx="5" 
      ry="0" 
      width="400" 
      height="108" 
    />

    <rect 
      x="0" 
      y="132" 
      rx="5" 
      ry="0" 
      width="400" 
      height="108" 
    />

    <rect 
      x="0" 
      y="264" 
      rx="5" 
      ry="0" 
      width="400" 
      height="108" 
    />

    <rect 
      x="0" 
      y="396" 
      rx="5" 
      ry="0" 
      width="400" 
      height="108" 
    />

  </ContentLoader>

  <ContentLoader
    v-else-if="theme === 'LegislationList'"
    :height="107"
    :width="340"
    :speed="loaderSpeed"
    :primary-color="loaderPrimaryColor"
    :secondary-color="loaderSecondaryColor"
  >
    
    <rect 
      x="0" 
      y="12" 
      rx="5" 
      ry="0" 
      width="85" 
      height="20" 
    />

    <rect 
      x="0" 
      y="40" 
      rx="5" 
      ry="0" 
      width="257" 
      height="16" 
    />

    <rect 
      x="0" 
      y="60" 
      rx="5" 
      ry="0" 
      width="171" 
      height="16" 
    />

    <rect 
      x="0" 
      y="80" 
      rx="5" 
      ry="0" 
      width="340" 
      height="16" 
    />

    <rect 
      x="0" 
      y="106" 
      rx="5" 
      ry="0" 
      width="340" 
      height="1" 
    />

  </ContentLoader>

  <ContentLoader
    v-else-if="theme === 'LegislationResult'"
    :height="528"
    :width="340"
    :speed="loaderSpeed"
    :primary-color="loaderPrimaryColor"
    :secondary-color="loaderSecondaryColor"
  >
    
    <rect 
      x="0" 
      y="20" 
      rx="5" 
      ry="0" 
      width="171" 
      height="36" 
    />

    <rect 
      x="0" 
      y="68" 
      rx="5" 
      ry="0" 
      width="340" 
      height="24" 
    />

    <rect 
      x="0" 
      y="96" 
      rx="5" 
      ry="0" 
      width="257" 
      height="24" 
    />

    <rect 
      x="0" 
      y="156" 
      rx="5" 
      ry="0" 
      width="171" 
      height="40" 
    />

    <rect 
      x="0" 
      y="212" 
      rx="5" 
      ry="0" 
      width="340" 
      height="16" 
    />

    <rect 
      x="0" 
      y="236" 
      rx="5" 
      ry="0" 
      width="325" 
      height="16" 
    />

    <rect 
      x="0" 
      y="260" 
      rx="5" 
      ry="0" 
      width="340" 
      height="16" 
    />

    <rect 
      x="0" 
      y="284" 
      rx="5" 
      ry="0" 
      width="325" 
      height="16" 
    />

    <rect 
      x="0" 
      y="308" 
      rx="5" 
      ry="0" 
      width="340" 
      height="16" 
    />

    <rect 
      x="0" 
      y="360" 
      rx="5" 
      ry="0" 
      width="171" 
      height="40" 
    />

    <rect 
      x="0" 
      y="416" 
      rx="5" 
      ry="0" 
      width="340" 
      height="16" 
    />

    <rect 
      x="0" 
      y="440" 
      rx="5" 
      ry="0" 
      width="325" 
      height="16" 
    />

    <rect 
      x="0" 
      y="464" 
      rx="5" 
      ry="0" 
      width="340" 
      height="16" 
    />

    <rect 
      x="0" 
      y="488" 
      rx="5" 
      ry="0" 
      width="325" 
      height="16" 
    />

    <rect 
      x="0" 
      y="512" 
      rx="5" 
      ry="0" 
      width="340" 
      height="16" 
    />

  </ContentLoader>

  <ContentLoader
    v-else-if="theme === 'MembersOfCongressList'"
    :height="64"
    :width="340"
    :speed="loaderSpeed"
    :primary-color="loaderPrimaryColor"
    :secondary-color="loaderSecondaryColor"
  >
    
    <rect 
      x="0" 
      y="12" 
      rx="5" 
      ry="0" 
      width="32" 
      height="40" 
    />

    <rect 
      x="44" 
      y="20" 
      rx="5" 
      ry="0" 
      width="128" 
      height="24" 
    />

    <rect 
      x="189" 
      y="24" 
      rx="5" 
      ry="0" 
      width="76" 
      height="16" 
    />

    <rect 
      x="281" 
      y="24" 
      rx="5" 
      ry="0" 
      width="60" 
      height="16" 
    />

  </ContentLoader>

  <ContentLoader
    v-else-if="theme === 'MembersOfCongressResult'"
    :height="530"
    :width="400"
    :speed="loaderSpeed"
    :primary-color="loaderPrimaryColor"
    :secondary-color="loaderSecondaryColor"
  >
    
    <rect 
      x="0" 
      y="0" 
      rx="5" 
      ry="0" 
      width="400" 
      height="268" 
    />

    <rect 
      x="0" 
      y="288" 
      rx="5" 
      ry="0" 
      width="257" 
      height="36" 
    />

    <rect 
      x="0" 
      y="288" 
      rx="5" 
      ry="0" 
      width="257" 
      height="36" 
    />

    <rect 
      x="0" 
      y="342" 
      rx="5" 
      ry="0" 
      width="257" 
      height="24" 
    />

    <rect 
      x="0" 
      y="374" 
      rx="5" 
      ry="0" 
      width="400" 
      height="24" 
    />

    <rect 
      x="0" 
      y="434" 
      rx="5" 
      ry="0" 
      width="171" 
      height="40" 
    />

    <rect 
      x="0" 
      y="490" 
      rx="5" 
      ry="0" 
      width="400" 
      height="16" 
    />

    <rect 
      x="0" 
      y="514" 
      rx="5" 
      ry="0" 
      width="383" 
      height="16" 
    />

  </ContentLoader>

  <ContentLoader
    v-else-if="theme === 'NewsList'"
    :height="240"
    :width="340"
    :speed="loaderSpeed"
    :primary-color="loaderPrimaryColor"
    :secondary-color="loaderSecondaryColor"
  >
    
    <rect 
      x="0" 
      y="12" 
      rx="5" 
      ry="0" 
      width="340" 
      height="24" 
    />

    <rect 
      x="0" 
      y="40" 
      rx="5" 
      ry="0" 
      width="257" 
      height="24" 
    />

    <rect 
      x="0" 
      y="76" 
      rx="5" 
      ry="0" 
      width="171" 
      height="12" 
    />

    <rect 
      x="0" 
      y="92" 
      rx="5" 
      ry="0" 
      width="171" 
      height="12" 
    />

    <rect 
      x="0" 
      y="116" 
      rx="5" 
      ry="0" 
      width="340" 
      height="16" 
    />

    <rect 
      x="0" 
      y="140" 
      rx="5" 
      ry="0" 
      width="325" 
      height="16" 
    />

    <rect 
      x="0" 
      y="164" 
      rx="5" 
      ry="0" 
      width="340" 
      height="16" 
    />

    <rect 
      x="0" 
      y="188" 
      rx="5" 
      ry="0" 
      width="325" 
      height="16" 
    />

    <rect 
      x="0" 
      y="212" 
      rx="5" 
      ry="0" 
      width="340" 
      height="16" 
    />

    <rect 
      x="0" 
      y="212" 
      rx="5" 
      ry="0" 
      width="340" 
      height="16" 
    />

    <rect 
      x="0" 
      y="239" 
      rx="5" 
      ry="0" 
      width="340" 
      height="1" 
    />
  
  </ContentLoader>

  <ContentLoader
    v-else-if="theme === 'NewsResult'"
    :height="528"
    :width="340"
    :speed="loaderSpeed"
    :primary-color="loaderPrimaryColor"
    :secondary-color="loaderSecondaryColor"
  >
    
    <rect 
      x="0" 
      y="12" 
      rx="5" 
      ry="0" 
      width="171" 
      height="16" 
    />

    <rect 
      x="0" 
      y="36" 
      rx="5" 
      ry="0" 
      width="340" 
      height="36" 
    />

    <rect 
      x="0" 
      y="84" 
      rx="5" 
      ry="0" 
      width="340" 
      height="36" 
    />

    <rect 
      x="0" 
      y="132" 
      rx="5" 
      ry="0" 
      width="257" 
      height="36" 
    />

    <rect 
      x="0" 
      y="192" 
      rx="5" 
      ry="0" 
      width="171" 
      height="12" 
    />

    <rect 
      x="0" 
      y="208" 
      rx="5" 
      ry="0" 
      width="171" 
      height="12" 
    />

    <rect 
      x="0" 
      y="224" 
      rx="5" 
      ry="0" 
      width="171" 
      height="12" 
    />

    <rect 
      x="0" 
      y="248" 
      rx="5" 
      ry="0" 
      width="340" 
      height="16" 
    />

    <rect 
      x="0" 
      y="272" 
      rx="5" 
      ry="0" 
      width="325" 
      height="16" 
    />

    <rect 
      x="0" 
      y="296" 
      rx="5" 
      ry="0" 
      width="340" 
      height="16" 
    />

    <rect 
      x="0" 
      y="320" 
      rx="5" 
      ry="0" 
      width="325" 
      height="16" 
    />

    <rect 
      x="0" 
      y="344" 
      rx="5" 
      ry="0" 
      width="340" 
      height="16" 
    />

    <rect 
      x="0" 
      y="368" 
      rx="5" 
      ry="0" 
      width="325" 
      height="16" 
    />

    <rect 
      x="0" 
      y="392" 
      rx="5" 
      ry="0" 
      width="340" 
      height="16" 
    />

    <rect 
      x="0" 
      y="416" 
      rx="5" 
      ry="0" 
      width="325" 
      height="16" 
    />

    <rect 
      x="0" 
      y="440" 
      rx="5" 
      ry="0" 
      width="340" 
      height="16" 
    />

    <rect 
      x="0" 
      y="464" 
      rx="5" 
      ry="0" 
      width="325" 
      height="16" 
    />

    <rect 
      x="0" 
      y="488" 
      rx="5" 
      ry="0" 
      width="340" 
      height="16" 
    />

    <rect 
      x="0" 
      y="512" 
      rx="5" 
      ry="0" 
      width="340" 
      height="16" 
    />

  </ContentLoader>

  <ContentLoader
    v-else-if="theme === 'ProfileResult'"
    :height="508"
    :width="340"
    :speed="loaderSpeed"
    :primary-color="loaderPrimaryColor"
    :secondary-color="loaderSecondaryColor"
  >
    
    <rect 
      x="0" 
      y="0" 
      rx="5" 
      ry="0" 
      width="258" 
      height="36" 
    />

    <rect 
      x="0" 
      y="52" 
      rx="5" 
      ry="0" 
      width="258" 
      height="24" 
    />

    <rect 
      x="0" 
      y="84" 
      rx="5" 
      ry="0" 
      width="340" 
      height="16" 
    />

    <rect 
      x="0" 
      y="136" 
      rx="5" 
      ry="0" 
      width="171" 
      height="40" 
    />

    <rect 
      x="0" 
      y="192" 
      rx="5" 
      ry="0" 
      width="340" 
      height="16" 
    />

    <rect 
      x="0" 
      y="216" 
      rx="5" 
      ry="0" 
      width="325" 
      height="16" 
    />

    <rect 
      x="0" 
      y="240" 
      rx="5" 
      ry="0" 
      width="340" 
      height="16" 
    />

    <rect 
      x="0" 
      y="264" 
      rx="5" 
      ry="0" 
      width="325" 
      height="16" 
    />

    <rect 
      x="0" 
      y="288" 
      rx="5" 
      ry="0" 
      width="340" 
      height="16" 
    />

    <rect 
      x="0" 
      y="340" 
      rx="5" 
      ry="0" 
      width="171" 
      height="40" 
    />

    <rect 
      x="0" 
      y="396" 
      rx="5" 
      ry="0" 
      width="340" 
      height="16" 
    />

    <rect 
      x="0" 
      y="420" 
      rx="5" 
      ry="0" 
      width="325" 
      height="16" 
    />

    <rect 
      x="0" 
      y="444" 
      rx="5" 
      ry="0" 
      width="340" 
      height="16" 
    />

    <rect 
      x="0" 
      y="468" 
      rx="5" 
      ry="0" 
      width="325" 
      height="16" 
    />

    <rect 
      x="0" 
      y="492" 
      rx="5" 
      ry="0" 
      width="340" 
      height="16" 
    />

  </ContentLoader>

  <ContentLoader
    v-else-if="theme === 'StaffersList'"
    :height="540"
    :width="340"
    :speed="loaderSpeed"
    :primary-color="loaderPrimaryColor"
    :secondary-color="loaderSecondaryColor"
  >
    
    <rect 
      x="0" 
      y="12" 
      rx="5" 
      ry="0" 
      width="141" 
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

    <rect 
      x="0" 
      y="66" 
      rx="5" 
      ry="0" 
      width="205" 
      height="18" 
    />

    <rect 
      x="0" 
      y="108" 
      rx="5" 
      ry="0" 
      width="141" 
      height="24" 
    />

    <rect 
      x="0" 
      y="138" 
      rx="5" 
      ry="0" 
      width="156" 
      height="18" 
    />

    <rect 
      x="0" 
      y="162" 
      rx="5" 
      ry="0" 
      width="205" 
      height="18" 
    />

    <rect 
      x="0" 
      y="204" 
      rx="5" 
      ry="0" 
      width="176" 
      height="24" 
    />

    <rect 
      x="0" 
      y="234" 
      rx="5" 
      ry="0" 
      width="116" 
      height="18" 
    />

    <rect 
      x="0" 
      y="258" 
      rx="5" 
      ry="0" 
      width="205" 
      height="18" 
    />

    <rect 
      x="0" 
      y="300" 
      rx="5" 
      ry="0" 
      width="115" 
      height="24" 
    />

    <rect 
      x="0" 
      y="330" 
      rx="5" 
      ry="0" 
      width="207" 
      height="18" 
    />

    <rect 
      x="0" 
      y="354" 
      rx="5" 
      ry="0" 
      width="231" 
      height="18" 
    />

    <rect 
      x="0" 
      y="396" 
      rx="5" 
      ry="0" 
      width="202" 
      height="24" 
    />

    <rect 
      x="0" 
      y="426" 
      rx="5" 
      ry="0" 
      width="275" 
      height="18" 
    />

    <rect 
      x="0" 
      y="450" 
      rx="5" 
      ry="0" 
      width="301" 
      height="18" 
    />

    <rect 
      x="0" 
      y="492" 
      rx="5" 
      ry="0" 
      width="202" 
      height="24" 
    />

    <rect 
      x="0" 
      y="522" 
      rx="5" 
      ry="0" 
      width="301" 
      height="18" 
    />

  </ContentLoader>

  <ContentLoader
    v-else
    :speed="loaderSpeed"
    :primary-color="loaderPrimaryColor"
    :secondary-color="loaderSecondaryColor"
    :width ="loaderWidth" 
    :height ="loaderHeight" 
  >
    <slot/> 
  </ContentLoader>
</template>
<script lang="ts">
import { ContentLoader } from "vue-content-loader"
import Vue from 'vue'
import a11y from '@/util/a11y'

export default Vue.extend({
  name:'FishTankLoaderContent',
  components:{
    ContentLoader,
  },
  mixins:[
    a11y
  ],
  props:{
    theme:{
      type: String,
      default : null,
      required: false,
      description: "Specify pre-made loader content theme (optional). There are 13 themes to choose from.",
      availableThemes: [ " AlertList", " AlertResult", "CalendarResult", "CommiteeResult", "DirectoriesResult", "LegislationList", "LegislationResult", "MembersOfCongressList", "NewsList", "NewsResult", "ProfileResult", "StaffersList",]
    },
    loaderHeight:{
      type: Number,
      default : null,
      required: false, //set this to false, because it's not provided with the themed
      description: "Determines height of Content Loader SVG",
    },
    loaderWidth:{
      type: Number,
      default : 400,
      required: false,
      description: "Determines width of Content Loader SVG",
    },
    loaderSpeed:{
      type: Number,
      default: 2,
      required: false,
      description: "Determines speed of loader animation",
    },
    loaderPrimaryColor:{
      type: String,
      default: "#f3f3f3",
      required: false,
      description: "Determines gradient start value",
    },
    loaderSecondaryColor:{
      type: String,
      default: "#ecebeb",
      required: false,
      description: "Determines gradient end value",
    }

  }
  
})
</script>