<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
/*-----------------------------------------------------------------------------------
  Reset Properties
-----------------------------------------------------------------------------------*/
html, body, div, span, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {margin:0;padding:0;background:none transparent;font-size:100%;font-weight:normal;font-style:normal;border:0;box-sizing: border-box;}
table{width:100%; border-collapse:collapse;border-spacing:0;border:0;table-layout:fixed;}
img{vertical-align:top;}
li{list-style:none;}
address, caption, em, cite{font-weight:normal;font-style:normal;}
caption{width:0;height:0;font-size:0;line-height:0;text-indent:-9999em;overflow:hidden;}
legend, hr{position:absolute;top:-9999em;left:-9999em;width:0;height:0;font-size:0;line-height:0;text-indent:-9999em;overflow:hidden;}

body{font:14px/1.6 'Spoqa Han Sans', 'Sans-serif';color:#222;}
a{color:#222;text-decoration:none;}
label, select, input, textarea{font:14px/1.6 'Spoqa Han Sans', 'Sans-serif';color:#222;vertical-align:top;outline:none;}
input, textarea{box-sizing:border-box;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;}

input[type="checkbox"], input[type="radio"]{margin:0;padding:0;vertical-align:middle;}
input[type="text"], input[type="password"], input[type="number"], input[type="email"], input[type="tel"]{height:44px;padding:0;border:none;background:#fff;box-sizing:border-box;}
button::-moz-focus-inner, input::-moz-focus-inner{border:0;padding:0;}
::-webkit-input-placeholder{color:#7b7979;}
:-moz-placeholder{color:#7b7979;}
::-moz-placeholder{color:#7b7979;}
:-ms-input-placeholder{color:#7b7979;}
textarea {width:100%;padding:10px;border: 1px solid #dfdfe1;font-size: 16px;color: #000;background: #fff;box-sizing: border-box;resize:none;}

/* font */
@font-face {
    font-family: 'Spoqa Han Sans';
    font-weight: 700;
    src: local('Spoqa Han Sans Bold'),
    url('./assets/fonts/SpoqaHanSansBold.woff2') format('woff2'),
    url('./assets/fonts/SpoqaHanSansBold.woff') format('woff'),
    url('./assets/fonts/SpoqaHanSansBold.ttf') format('truetype');
}

@font-face {
    font-family: 'Spoqa Han Sans';
    font-weight: 400;
    src: local('Spoqa Han Sans Regular'),
    url('./assets/fonts/SpoqaHanSansRegular.woff2') format('woff2'),
    url('./assets/fonts/SpoqaHanSansRegular.woff') format('woff'),
    url('./assets/fonts/SpoqaHanSansRegular.ttf') format('truetype');
}

</style>
